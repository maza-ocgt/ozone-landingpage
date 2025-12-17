"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black">
      {/* Top Dark Strip */}
      <div className="h-1 bg-black" />

      {/* Central Gradient Strip */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            {/* Left Side - Email */}
            <a
              href="mailto:marketing.admin@ocglobaltech.com"
              className="text-white text-sm md:text-base font-bold hover:underline transition-all duration-200"
            >
              marketing.admin@ocglobaltech.com
            </a>

            {/* Right Side - Copyright */}
            <p className="text-white text-sm md:text-base font-bold">
              Built by © OC Global Technology
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Dark Strip */}
      <div className="h-1 bg-black" />
    </footer>
  );
}

