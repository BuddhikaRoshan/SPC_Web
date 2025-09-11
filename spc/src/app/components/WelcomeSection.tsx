"use client";

import Link from 'next/link';
import Image from 'next/image';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="relative overflow-hidden py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 blur-3xl">
        <div className="mx-auto h-48 w-11/12 max-w-7xl rounded-full bg-gradient-to-tr from-orange-200/50 via-white to-transparent" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-1/3 -z-10 hidden h-72 w-72 rounded-full bg-orange-300/30 blur-2xl lg:block" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
              Est. 1968 · State Printing Corporation
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Government Printing Department
              </span>
            </h2>
            <p className="mb-4 max-w-2xl text-base leading-relaxed text-gray-600">
              A trusted name in quality printing for over five decades. From
              school books to complex secure publications, we deliver at scale
              with precision and consistency.
            </p>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-600">
              Powered by modern offset and digital presses, and an expert team
              dedicated to craftsmanship, efficiency, and uncompromised quality.
            </p>

            <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'Nationwide secure printing capabilities',
                'Modern offset & digital infrastructure',
                'Expert estimating and sales guidance',
                'Reliable delivery and aftercare',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.414 0L3.296 9.96a1 1 0 111.414-1.414l3.046 3.045 6.543-6.542a1 1 0 011.405.242z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:translate-y-[-1px] hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Start a project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M13.5 4.5a.75.75 0 000 1.5h5.69l-9.72 9.72a.75.75 0 101.06 1.06l9.72-9.72v5.69a.75.75 0 101.5 0v-8.25a.75.75 0 00-.75-.75h-8.25z" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 opacity-80">
              <span className="text-xs font-medium text-gray-500">Trusted by</span>
              <div className="flex items-center gap-4 grayscale">
                <Image src="/gov.png" alt="Gov" width={72} height={22} className="opacity-80" />
                <Image src="/nlb.png" alt="NLB" width={64} height={22} className="opacity-80" />
                <Image src="/gm.png" alt="GM" width={56} height={22} className="opacity-80" />
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="order-1 lg:order-2">
            <div className="group relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/welcome.png"
                  alt="Production floor"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />

              {/* Floating chips */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                ISO-grade quality
              </div>
              <div className="absolute bottom-4 right-4 rounded-lg bg-white/80 px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                50+ years of trust
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
