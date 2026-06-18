import {
  CalendarDaysIcon,
  MapPinIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const campDetails = [
  {
    icon: CalendarDaysIcon,
    title: "13. – 14. Juni 2026",
    text: "Jeweils 9:00 – 12:30 Uhr",
  },
  {
    icon: MapPinIcon,
    title: "Sportplatz USV Bullendorf",
    text: "Training auf dem Sportplatz",
  },
  {
    icon: TrophyIcon,
    title: "3 Trainingseinheiten täglich",
    text: "Intensives Tormanntraining",
  },
  {
    icon: UserGroupIcon,
    title: "Für Kinder & Jugendliche",
    text: "Von 8 bis 17 Jahren",
  },
  {
    icon: SparklesIcon,
    title: "Inklusive Campshirt 2026",
    text: "Im Preis enthalten",
  },
];

export default function CampSection() {
  return (
    <section id="camp" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-4xl font-medium text-[#afd63f]"
            style={{ fontFamily: "'Indie Flower', cursive" }}
          >
            Vor den Sommerferien
          </p>

          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tormanntrainingscamp
          </h2>

          <p className="mt-6 text-lg/8 text-gray-300">
            2 Tage voller Training, Spaß und Entwicklung. Das Camp richtet sich
            an motivierte Kinder und Jugendliche, die ihre Fähigkeiten im Tor
            gezielt verbessern möchten.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campDetails.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/20">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-indigo-400"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm/6 text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
              Frühbucherpreis
            </p>

            <div className="mt-4 flex items-end gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                € 99
              </span>
            </div>

            <p className="mt-4 text-base/7 text-gray-300">
              Gültig bei Anmeldung bis 15. Mai 2026.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Normalpreis
            </p>

            <div className="mt-4 flex items-end gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                € 119
              </span>
            </div>

            <p className="mt-4 text-base/7 text-gray-300">
              Gültig ab 16. Mai 2026.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/camp-anmeldung"
            className="inline-flex items-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Jetzt anmelden
            <ArrowRightIcon aria-hidden="true" className="ml-2 size-4" />
          </Link>
        </div>

        <p className="mt-6 text-center text-sm/6 text-gray-400">
          Fragen? Schreiben Sie uns an{" "}
          <a
            href="mailto:tormannschuleweinviertel@hotmail.com"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            tormannschuleweinviertel@hotmail.com
          </a>{" "}
          oder rufen Sie an unter{" "}
          <a
            href="tel:+436643919374"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            +43 664 391 93 74
          </a>
          .
        </p>
      </div>
    </section>
  );
}
