import {
  TrophyIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  FireIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const benefits = [
  {
    title: "Erfahrene Trainer",
    description:
      "Training mit fachlicher Kompetenz, Praxiserfahrung und Leidenschaft für das Tormannspiel.",
    icon: TrophyIcon,
  },
  {
    title: "Kleine Gruppen",
    description:
      "Mehr Aufmerksamkeit für jeden Teilnehmer und bessere individuelle Betreuung.",
    icon: UserGroupIcon,
  },
  {
    title: "Moderne Trainingsmethoden",
    description:
      "Zeitgemäße Übungen für Technik, Reaktion, Spielverständnis und Entscheidungsverhalten.",
    icon: BoltIcon,
  },
  {
    title: "Individuelle Förderung",
    description:
      "Alters- und leistungsgerechtes Training abgestimmt auf persönliche Ziele.",
    icon: ChartBarIcon,
  },
  {
    title: "Athletik & Koordination",
    description:
      "Gezielte Einheiten zur Verbesserung von Beweglichkeit, Stabilität und Explosivität.",
    icon: FireIcon,
  },
  {
    title: "Spaß am Training",
    description:
      "Motivation, Freude und Begeisterung stehen bei jeder Einheit im Mittelpunkt.",
    icon: FaceSmileIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="warum-wir" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="text-base/7 font-semibold text-indigo-400">
              Deine Vorteile
            </p>

            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              WARUM UNS WÄHLEN?
            </h2>

            <p className="mt-6 text-lg/8 text-gray-300">
              Professionelles Training. Individuelle Förderung. Nachhaltiger
              Erfolg.
            </p>

            <div className="mt-8">
              <Link
                href="#kontakt"
                className="inline-flex items-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>

          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative pl-16">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <benefit.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {benefit.title}
                </dt>

                <dd className="mt-2 text-base/7 text-gray-400">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-10 text-center">
          <p className="text-lg/8 text-gray-300">
            Werde Teil der Tormannschule Weinviertel und entwickle dein volles
            Potenzial im Tor. 🥅⚽
          </p>
        </div>
      </div>
    </section>
  );
}
