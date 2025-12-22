"use client";

export default function ComingSoon() {
  return (

    <section className="w-full pt-0 pb-16 md:pt-0 md:pb-24 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center -mt-32 md:-mt-40">
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

