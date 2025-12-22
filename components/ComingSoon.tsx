"use client";

export default function ComingSoon() {
  return (
    <section className="w-full py-16 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <img
            src="/coming-soon.png"
            alt="Coming Soon"
            className="w-full h-auto max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

