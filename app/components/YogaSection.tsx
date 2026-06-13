import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const yogaClasses = [
  {
    day: "Montag",
    title: "Stretch & Mobility",
    emoji: "🧘",
    image: "/yoga/stretch-mobility.jpg",
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
    emoji: "💪",
    image: "/yoga/strength-stability.jpg",
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

export default function YogaSection() {
  return (
    <section id="bewegungsschule" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="text-base/7 font-semibold text-indigo-400">
          Yoga & Bewegung
        </p>

        <h2 className="mt-2 max-w-3xl text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Bewegungsschule Weinviertel
        </h2>

        <p className="mt-6 max-w-2xl text-lg/8 text-gray-300">
          Yoga für mehr Beweglichkeit & Stärke – ideal zur Verbesserung von
          Mobilität, Stabilität, Regeneration und Körpergefühl.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {yogaClasses.map((item, index) => (
            <article
              key={item.title}
              className={`relative lg:col-span-3 ${
                index === 0 ? "lg:rounded-tl-[2rem]" : "lg:rounded-tr-[2rem]"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-lg bg-gray-800 ${
                  index === 0
                    ? "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
                    : "lg:rounded-tr-[2rem]"
                }`}
              />

              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ${
                  index === 0
                    ? "max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]"
                    : "lg:rounded-tr-[calc(2rem+1px)]"
                }`}
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  width={900}
                  height={600}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-x-3">
                    <span className="text-3xl" aria-hidden="true">
                      {item.emoji}
                    </span>

                    <div>
                      <p className="text-sm/4 font-semibold text-indigo-400">
                        {item.day}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm/6 text-gray-400">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-x-3">
                        <SparklesIcon
                          aria-hidden="true"
                          className="mt-0.5 size-5 flex-none text-indigo-400"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <ClockIcon
                        aria-hidden="true"
                        className="size-5 text-indigo-400"
                      />
                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.time}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <MapPinIcon
                        aria-hidden="true"
                        className="size-5 text-indigo-400"
                      />
                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-indigo-500/10 p-4 ring-1 ring-indigo-400/20">
                    <p className="text-lg font-semibold text-white">
                      {item.price}
                    </p>
                    <p className="mt-1 text-sm/6 text-indigo-300">
                      {item.blockPrice}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-white/15 ${
                  index === 0
                    ? "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
                    : "lg:rounded-tr-[2rem]"
                }`}
              />
            </article>
          ))}

          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-gray-800 lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <Image
                alt="Yoga Training"
                src="/yoga/yoga-training.jpg"
                width={700}
                height={500}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-sm/4 font-semibold text-indigo-400">
                  Für jedes Fitnesslevel
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Beweglichkeit, Kraft und Stabilität
                </p>
                <p className="mt-2 text-sm/6 text-gray-400">
                  Die Einheiten eignen sich als Ergänzung zum Sporttraining oder
                  als regelmäßiges Bewegungsprogramm für mehr Körpergefühl.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-white/15 lg:rounded-bl-[2rem]" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <Image
                alt="Stretching und Mobility"
                src="/yoga/mobility.jpg"
                width={700}
                height={500}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-sm/4 font-semibold text-indigo-400">
                  Ergänzung zum Sport
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                  Ideal für Regeneration und Prävention
                </p>
                <p className="mt-2 text-sm/6 text-gray-400">
                  Dehnung, Mobilität und Stabilität unterstützen die sportliche
                  Entwicklung nachhaltig.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-white/15" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-indigo-500 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-8 max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div>
                <h3 className="text-sm/4 font-semibold text-indigo-100">
                  Mehr Informationen
                </h3>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Iris Schneider
                </p>
                <p className="mt-4 text-sm/6 text-indigo-100">
                  Weitere Details zu den Yoga- und Bewegungseinheiten finden Sie
                  direkt auf der Website.
                </p>
              </div>

              <Link
                href="https://www.iris-schneider.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center text-sm font-semibold text-white hover:text-indigo-100"
              >
                Website öffnen
                <ArrowTopRightOnSquareIcon
                  aria-hidden="true"
                  className="ml-2 size-4"
                />
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-1 outline-white/20 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
