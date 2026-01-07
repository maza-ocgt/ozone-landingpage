"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useTranslation } from "react-i18next";

type Role = "creator" | "viewer";

type Field = {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea" | "select" | "multiselect";
  options?: string[];
  helper?: string;
  required?: boolean;
};

type FormValue = string | string[];
type FormState = Record<Role, Record<string, FormValue>>;

const getRoleFields = (t: any): Record<Role, Field[]> => {
  const countryOptions = [
    t("survey.options.countries.malaysia"),
    t("survey.options.countries.india"),
    t("survey.options.countries.china"),
    t("survey.options.countries.indonesia"),
    t("survey.options.countries.other"),
  ];

  return {
    creator: [
      { id: "name", label: t("survey.fields.nameOrStage"), placeholder: t("survey.fields.nameStagePlaceholder"), required: true },
      { id: "email", label: t("survey.fields.email"), placeholder: t("survey.fields.emailPlaceholder"), type: "email", required: true },
      {
        id: "birthdate",
        label: t("survey.fields.birthdate"),
        placeholder: t("survey.fields.birthdatePlaceholder"),
        helper: t("survey.fields.birthdateHelper"),
      },
      {
        id: "country",
        label: t("survey.fields.country"),
        type: "select",
        options: countryOptions,
        required: true,
      },
      {
        id: "contentFocus",
        label: t("survey.fields.contentFocus"),
        type: "select",
        options: [
          t("survey.options.contentFocus.film"),
          t("survey.options.contentFocus.vlogs"),
          t("survey.options.contentFocus.education"),
          t("survey.options.contentFocus.gaming"),
          t("survey.options.contentFocus.music"),
          t("survey.options.contentFocus.podcast"),
          t("survey.options.contentFocus.other"),
        ],
      },
      {
        id: "audience",
        label: t("survey.fields.audience"),
        type: "select",
        options: [
          t("survey.options.audience.less10k"),
          t("survey.options.audience.10k50k"),
          t("survey.options.audience.50k250k"),
          t("survey.options.audience.250kplus"),
        ],
      },
      {
        id: "platforms",
        label: t("survey.fields.platforms"),
        placeholder: t("survey.fields.platformsPlaceholder"),
      },
      {
        id: "link",
        label: t("survey.fields.link"),
        placeholder: t("survey.fields.linkPlaceholder"),
      },
      {
        id: "goals",
        label: t("survey.fields.goals"),
        placeholder: t("survey.fields.goalsPlaceholder"),
        type: "textarea",
      },
    ],
    viewer: [
      { id: "name", label: t("survey.fields.name"), placeholder: t("survey.fields.namePlaceholder"), required: true },
      { id: "email", label: t("survey.fields.email"), placeholder: t("survey.fields.emailPlaceholder"), type: "email", required: true },
      {
        id: "birthdate",
        label: t("survey.fields.birthdate"),
        placeholder: t("survey.fields.birthdatePlaceholder"),
        helper: t("survey.fields.birthdateHelper"),
      },
      {
        id: "country",
        label: t("survey.fields.country"),
        type: "select",
        options: countryOptions,
        required: true,
      },
      {
        id: "influencer",
        label: t("survey.fields.influencer"),
        type: "select",
        options: [t("survey.options.yes"), t("survey.options.no")],
        required: true,
      },
      {
        id: "influencerType",
        label: t("survey.fields.influencerType"),
        placeholder: t("survey.fields.influencerTypePlaceholder"),
      },
      {
        id: "devices",
        label: t("survey.fields.devices"),
        type: "multiselect",
        options: [
          t("survey.options.devices.phone"),
          t("survey.options.devices.tablet"),
          t("survey.options.devices.laptop"),
          t("survey.options.devices.desktop"),
          t("survey.options.devices.smartTV"),
          t("survey.options.devices.streamingStick"),
        ],
      },
      {
        id: "genres",
        label: t("survey.fields.genres"),
        type: "multiselect",
        options: [
          t("survey.options.genres.movies"),
          t("survey.options.genres.series"),
          t("survey.options.genres.vlogs"),
          t("survey.options.genres.documentaries"),
          t("survey.options.genres.sports"),
          t("survey.options.genres.drama"),
        ],
      },
      {
        id: "features",
        label: t("survey.fields.features"),
        placeholder: t("survey.fields.featuresPlaceholder"),
        type: "textarea",
      },
    ],
  };
};

const createEmptyState = (roleFields?: Record<Role, Field[]>): FormState => {
  const base: FormState = {
    creator: {},
    viewer: {},
  };

  if (roleFields) {
    (["creator", "viewer"] as Role[]).forEach((role) => {
      roleFields[role].forEach((field) => {
        base[role][field.id] = field.type === "multiselect" ? [] : "";
      });
      base[role].countryOther = "";
    });
  } else {
    (["creator", "viewer"] as Role[]).forEach((role) => {
      base[role].countryOther = "";
    });
  }

  return base;
};

type SurveyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const { t } = useTranslation("common");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [formValues, setFormValues] = useState<FormState>(() => createEmptyState());
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleFields = useMemo(() => getRoleFields(t), [t]);

  const activeFields = useMemo(
    () => (selectedRole ? roleFields[selectedRole] : []),
    [selectedRole, roleFields]
  );

  // Initialize form values when roleFields are available
  useEffect(() => {
    setFormValues(createEmptyState(roleFields));
  }, [roleFields]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedRole(null);
      setFormValues(createEmptyState(roleFields));
      setToast(null);
    }
  }, [isOpen, roleFields]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!isOpen) {
    return null;
  }

  const formatBirthdate = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 8);
    const dd = digits.slice(0, 2);
    const mm = digits.slice(2, 4);
    const yyyy = digits.slice(4, 8);
    const parts = [dd, mm, yyyy].filter(Boolean);
    return parts.join("-").slice(0, 10);
  };

  const handleChange = (role: Role, id: string, value: FormValue) => {
    const nextValue =
      id === "birthdate" && typeof value === "string" ? formatBirthdate(value) : value;

    setFormValues((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [id]: nextValue,
      },
    }));
  };

  const toggleMulti = (role: Role, id: string, option: string) => {
    setFormValues((prev) => {
      const current = prev[role][id];
      const currentArray = Array.isArray(current) ? current : [];
      const exists = currentArray.includes(option);
      const next = exists
        ? currentArray.filter((item) => item !== option)
        : [...currentArray, option];

      return {
        ...prev,
        [role]: {
          ...prev[role],
          [id]: next,
        },
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedRole) return;

    const birthdateRaw = formValues[selectedRole].birthdate;
    const birthdate = typeof birthdateRaw === "string" ? birthdateRaw.trim() : "";
    const birthdateValid = birthdate === "" || /^\d{2}-\d{2}-\d{4}$/.test(birthdate);

    if (
      selectedRole === "viewer" &&
      formValues.viewer.influencer === t("survey.options.yes") &&
      !formValues.viewer.influencerType
    ) {
      setToast({ message: t("survey.messages.influencerError"), type: "error" });
      return;
    }

    if (!birthdateValid) {
      setToast({ message: t("survey.messages.birthdateError"), type: "error" });
      return;
    }

    try {
      setIsSubmitting(true);
      setToast(null);

      const collectionName = selectedRole === "creator" ? "surveyCreators" : "surveyViewers";
      const payload = {
        role: selectedRole,
        ...formValues[selectedRole],
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, collectionName), payload);
      setToast({ message: t("survey.messages.success"), type: "success" });
      setFormValues(createEmptyState(roleFields));
      setSelectedRole(null);
    } catch (error) {
      console.error(error);
      setToast({ message: t("survey.messages.error"), type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-3xl"
      >
        {toast && (
          <div className="pointer-events-none absolute top-4 right-4 z-20">
            <div
              className={`pointer-events-auto rounded-2xl px-4 py-3 text-sm font-semibold shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl border ${
                toast.type === "success"
                  ? "bg-emerald-500/20 border-emerald-300/60 text-emerald-50"
                  : "bg-rose-500/20 border-rose-300/60 text-rose-50"
              }`}
            >
              {toast.message}
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/6 via-cyan-500/3 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.06),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.08),transparent_30%)] pointer-events-none" />

        <div className="relative flex flex-col gap-6 p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-teal-300">
                {t("survey.preregister")}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                {t("survey.title")}
              </h3>
              <p className="text-sm text-white/70 max-w-2xl">
                {t("survey.subtitle")}
              </p>
            </div>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white hover:border-teal-300/70 hover:text-teal-100 transition"
              aria-label="Cancel and close survey"
            >
              {/* <span className="text-sm font-medium">Cancel</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(["creator", "viewer"] as Role[]).map((role) => (
              <button
                key={role}
                onClick={() => {
                  setSelectedRole(role);
                  setToast(null);
                }}
                className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${
                  selectedRole === role
                    ? "border-teal-300/80 bg-white/10 shadow-[0_0_30px_rgba(94,234,212,0.35)]"
                    : "border-white/10 bg-white/5 hover:border-teal-300/50 hover:bg-white/10"
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-teal-200">
                    {role === "creator" ? t("survey.roles.create") : t("survey.roles.watch")}
                  </p>
                  <p className="text-xl font-semibold text-white">
                    {role === "creator" ? t("survey.roles.creator") : t("survey.roles.viewer")}
                  </p>
                  <p className="text-sm text-white/60">
                    {role === "creator"
                      ? t("survey.roles.creatorDesc")
                      : t("survey.roles.viewerDesc")}
                  </p>
                </div>
                <span
                  className={`h-10 w-10 rounded-full border flex items-center justify-center text-sm font-semibold ${
                    selectedRole === role
                      ? "border-teal-300 text-teal-100 bg-teal-300/10"
                      : "border-white/15 text-white/60"
                  }`}
                >
                  {selectedRole === role ? "✓" : "→"}
                </span>
              </button>
            ))}
          </div>

          {selectedRole && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6"
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeFields.map((field) => {
                  const value = formValues[selectedRole][field.id];
                  const stringValue = Array.isArray(value) ? "" : value;
                  const isCountryOther =
                    field.id === "country" && stringValue === t("survey.options.countries.other");

                  return (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label className="flex items-center gap-1 text-sm font-medium text-white">
                        <span>{field.label}</span>
                        {field.required && <span className="text-teal-200">*</span>}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                        className="min-h-[120px] rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                          placeholder={field.placeholder}
                          value={stringValue}
                          required={field.required}
                          onChange={(event) =>
                            handleChange(selectedRole, field.id, event.target.value)
                          }
                        />
                      ) : field.type === "select" ? (
                        <>
                          <select
                            className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-white outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                            value={stringValue}
                            required={field.required}
                            onChange={(event) =>
                              handleChange(selectedRole, field.id, event.target.value)
                            }
                          >
                            <option value="" disabled>
                              {t("survey.options.chooseOption")}
                            </option>
                            {field.options?.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {isCountryOther && (
                            <input
                              type="text"
                              className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                              placeholder={t("survey.fields.countryOther")}
                              value={formValues[selectedRole].countryOther as string}
                              onChange={(event) =>
                                handleChange(selectedRole, "countryOther", event.target.value)
                              }
                            />
                          )}
                        </>
                      ) : field.type === "multiselect" && Array.isArray(value) ? (
                        <div className="flex flex-wrap gap-2">
                          {field.options?.map((option) => {
                            const active = value.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleMulti(selectedRole, field.id, option)}
                                className={`rounded-full border px-3 py-2 text-sm transition ${
                                  active
                                    ? "border-teal-300/80 bg-teal-300/15 text-teal-100 shadow-[0_0_20px_rgba(94,234,212,0.3)]"
                                    : "border-white/15 bg-white/5 text-white/70 hover:border-teal-200/60 hover:text-white"
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <input
                          type={field.type ?? "text"}
                          className="rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-teal-300/70 focus:ring-2 focus:ring-teal-400/20"
                          placeholder={field.placeholder}
                          value={stringValue}
                          required={field.required}
                          inputMode={field.id === "birthdate" ? "numeric" : undefined}
                          pattern={field.id === "birthdate" ? "\\d{2}-\\d{2}-\\d{4}" : undefined}
                          maxLength={field.id === "birthdate" ? 10 : undefined}
                          onChange={(event) =>
                            handleChange(selectedRole, field.id, event.target.value)
                          }
                        />
                      )}
                      {field.helper && (
                        <span className="text-xs text-white/50">{field.helper}</span>
                      )}
                    </div>
                  );
                })}

          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/80">
              {t("survey.messages.moreInfo")}{" "}
              <a
                href="mailto:marketing.admin@ocglobaltech.com"
                className="text-teal-200 underline underline-offset-2 hover:text-teal-100"
              >
                marketing.admin@ocglobaltech.com
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="submit"
                className="rounded-full border border-white/15 bg-gradient-to-r from-teal-300/40 via-cyan-400/40 to-blue-500/40 px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-[0_10px_40px_rgba(59,130,246,0.4)] backdrop-blur-xl transition hover:border-teal-200/70 hover:shadow-[0_10px_55px_rgba(59,130,246,0.55)] disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={isSubmitting || !selectedRole}
              >
                {isSubmitting ? t("survey.messages.saving") : t("survey.messages.submit")}
              </button>
            </div>
          </div>
        </motion.form>
      )}
        </div>
      </motion.div>
    </div>
  );
}
