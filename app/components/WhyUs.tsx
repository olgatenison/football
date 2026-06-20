import {
  TrophyIcon,
  UserGroupIcon,
  BoltIcon,
  ChartBarIcon,
  FireIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

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
    <section id="warum-wir" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl gap-16 pb-32 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p
              className="text-4xl font-medium text-[#afd63f]"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              Deine Vorteile
            </p>

            <h2 className="mt-6 max-w-md text-balance font-display text-5xl/20 font-semibold tracking-wider text-white">
              WARUM UNS WÄHLEN?
            </h2>

            <p className="mt-6 text-balance text-base/8 font-light text-white">
              Professionelles Training. Individuelle Förderung. Nachhaltiger
              Erfolg.
            </p>

            <div className="mt-8">
              <Link
                href="#kontakt"
                className="inline-flex rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg transition-colors duration-300 ease-out hover:bg-[#273810] hover:text-white"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>

          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative pl-16">
                <dt className="text-base font-bold text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg border border-[#afd63f] bg-black">
                    <benefit.icon
                      aria-hidden="true"
                      className="size-6 text-[#afd63f]"
                    />
                  </div>
                  {benefit.title}
                </dt>

                <dd className="mt-3 text-balance text-base/8 font-light text-white/80">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="w-full  bg-[#afd63f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row px-6  lg:px-8">
          <Image
            width={600}
            height={388}
            src="/team.webp"
            alt="Tormanntraining"
            className="h-auto w-full max-w-md shrink-0 object-contain lg:max-w-lg -m-10 rounded-lg"
          />

          <p
            className="text-4xl font-medium text-black max-w-lg"
            style={{ fontFamily: "'Indie Flower', cursive" }}
          >
            Werde Teil der Tormannschule Weinviertel und entwickle dein volles
            Potenzial im Tor.
          </p>
        </div>
      </div>
    </section>
  );
}
