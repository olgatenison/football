import Image from "next/image";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/sponsors/sponsor-1.svg",
  },
  {
    name: "Sponsor 2",
    logo: "/sponsors/sponsor-2.svg",
  },
  {
    name: "Sponsor 3",
    logo: "/sponsors/sponsor-3.svg",
  },
  {
    name: "Partner 1",
    logo: "/sponsors/partner-1.svg",
  },
  {
    name: "Partner 2",
    logo: "/sponsors/partner-2.svg",
  },
  {
    name: "Partner 3",
    logo: "/sponsors/partner-3.svg",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-base/7 font-semibold text-indigo-400">
              Netzwerk & Unterstützung
            </p>

            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Unsere Sponsoren und Partner
            </h2>

            <p className="mt-6 text-lg/8 text-gray-300">
              Gemeinsam mit unseren Sponsoren und Partnern schaffen wir
              bestmögliche Bedingungen für professionelles Tormanntraining,
              Bewegung, Entwicklung und Freude am Sport.
            </p>

            <div className="mt-8">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Partner werden
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:pl-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex h-28 items-center justify-center rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <Image
                  alt={sponsor.name}
                  src={sponsor.logo}
                  width={180}
                  height={80}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
