import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const yogaClasses = [
  {
    day: "Montag",
    title: "Stretch & Mobility",
    points: [
      "Fokus auf Dehnung und Beweglichkeit",
      "Verbesserung der Regeneration",
      "Für jedes Fitnesslevel geeignet",
    ],
    time: "18:45 Uhr",
    location: "Veranstaltungssaal Drösing",
    price: "€ 16 pro Einheit",
    blockPrice: "5er Block € 75",
  },
  {
    day: "Mittwoch",
    title: "Strength & Stability",
    points: [
      "Kräftigung des gesamten Körpers",
      "Verbesserung von Balance und Stabilität",
      "Ideale Ergänzung zum Sporttraining",
    ],
    time: "18:45 Uhr",
    location: "Turnsaal der VS Hauskirchen",
    price: "€ 16 pro Einheit",
    blockPrice: "5er Block € 75",
  },
];

const yogaInfo = [
  {
    title: "Für jedes Fitnesslevel",
    text: "Die Einheiten eignen sich für Anfänger, Sportler und alle, die mehr Beweglichkeit, Stabilität und Körpergefühl entwickeln möchten.",
  },
  {
    title: "Ideal als Ergänzung zum Sport",
    text: "Mobilität, Dehnung und Stabilität unterstützen Regeneration, Prävention und eine nachhaltige sportliche Entwicklung.",
  },
];

export default function Yoga() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p
          className="text-center text-4xl font-medium text-[#afd63f]"
          style={{ fontFamily: "'Indie Flower', cursive" }}
        >
          Yoga & Bewegung
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl text-center text-balance font-display text-5xl/20 font-semibold tracking-wider text-white">
          Bewegungsschule Weinviertel
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-balance text-base/8 font-light text-white">
          Yoga für mehr Beweglichkeit & Stärke – ideal zur Verbesserung von
          Mobilität, Stabilität, Regeneration und Körpergefühl.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-rows-2 lg:gap-8">
              {yogaClasses.map((item) => (
                <div
                  key={item.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-6 transition hover:border-[#afd63f]/50 hover:bg-zinc-900 lg:min-h-0"
                >
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex w-full flex-row justify-between gap-6">
                      <p
                        className="text-2xl font-medium text-[#afd63f]"
                        style={{ fontFamily: "'Indie Flower', cursive" }}
                      >
                        {item.day}
                      </p>

                      <div className="w-50 space-y-2 text-right text-sm text-white/75">
                        <p>{item.location}</p>

                        <p className="flex items-center justify-end gap-2">
                          <ClockIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-[#afd63f]"
                          />
                          <span>{item.time}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="mt-4 max-w-md text-balance font-display text-2xl/8 font-semibold uppercase tracking-wider text-white">
                        {item.title}
                      </h3>

                      <ul className="mt-3 space-y-1 text-sm/6 font-light text-white/80">
                        {item.points.map((point) => (
                          <li key={point}>— {point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex gap-3 text-sm font-medium">
                      <span className="w-full bg-[#afd63f] px-4 py-2 text-black">
                        {item.price}
                      </span>
                      <span className="w-50 border border-white/15 px-4 py-2 text-white">
                        {item.blockPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {yogaInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-zinc-950 p-6 transition hover:border-[#afd63f]/50 hover:bg-zinc-900"
                >
                  {/* <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#afd63f] text-black">
                    <SparklesIcon aria-hidden="true" className="size-5" />
                  </div> */}

                  <h4 className="font-display text-xl/7 font-semibold uppercase tracking-wider text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm/6 font-light text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-lg">
            <div className="group relative min-h-[520px] overflow-hidden lg:min-h-[540px]">
              <Image
                width={900}
                height={1100}
                alt="Yoga und Bewegung"
                src="/joga.png"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="bg-[#afd63f] p-8 text-black">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                <div>
                  <h3
                    className="text-2xl font-medium text-black"
                    style={{ fontFamily: "'Indie Flower', cursive" }}
                  >
                    Mehr Informationen
                  </h3>

                  <p className="mt-4 font-display text-4xl/12 font-semibold uppercase tracking-wider text-black">
                    Iris Schneider
                  </p>

                  <p className="mt-3 max-w-md text-base/7 font-light text-black/80">
                    Weitere Details zu den Yoga- und Bewegungseinheiten finden
                    Sie direkt auf der Website.
                  </p>
                </div>

                <Link
                  href="https://www.iris-schneider.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 border border-black bg-black px-6 py-5 text-lg font-semibold text-[#afd63f] transition hover:bg-transparent hover:text-black"
                >
                  Website öffnen
                  {/* <ArrowTopRightOnSquareIcon
                    aria-hidden="true"
                    className="size-5"
                  /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
