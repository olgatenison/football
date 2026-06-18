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

    image: "/joga.png",
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

    image: "/joga.png",
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
    <section id="bewegungsschule" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p
          className="text-4xl font-medium text-[#afd63f]"
          style={{ fontFamily: "'Indie Flower', cursive" }}
        >
          Yoga & Bewegung
        </p>

        <h2 className="mt-6 max-w-md text-balance font-display text-5xl/20 font-semibold tracking-wider text-white">
          Bewegungsschule Weinviertel
        </h2>

        <p className="mt-3 text-balance text-base/8 font-light text-white max-w-lg">
          Yoga für mehr Beweglichkeit & Stärke – ideal zur Verbesserung von
          Mobilität, Stabilität, Regeneration und Körpergefühl.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* 1 ряд 2 картка */}

          {yogaClasses.map((item, index) => (
            <article
              key={item.title}
              className={`relative lg:col-span-3 ${
                index === 0 ? "lg:rounded-tl-4xl" : "lg:rounded-tr-4xl"
              }`}
            >
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${
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
                    <div>
                      <p
                        className="text-2xl font-medium text-[#afd63f]"
                        style={{ fontFamily: "'Indie Flower', cursive" }}
                      >
                        {item.day}
                      </p>
                      <h3 className="mt-3 max-w-md text-balance font-display text-2xl/10 font-semibold tracking-wider text-white uppercase ">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-3 text-balance text-base/8 font-light text-white/80">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-x-3">
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* 
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
                  </div> */}

                  <div className="mt-6 rounded-xl bg-[#afd63f] p-4 ">
                    <p className="text-lg font-semibold text-black">
                      {item.price}
                    </p>
                    <p className="mt-1 text-base/6 text-black">
                      {item.blockPrice}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`pointer-events-none absolute inset-0 rounded-lg shadow outline outline-white/15 ${
                  index === 0
                    ? "max-lg:rounded-t-4xl lg:rounded-tl-4xl"
                    : "lg:rounded-tr-4xl"
                }`}
              />
            </article>
          ))}

          {/*2 ряд  картка 1 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-[#020202] lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <Image
                alt="Yoga Training"
                src="/12.jpg"
                width={700}
                height={500}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3
                  className="text-2xl font-medium text-[#afd63f]"
                  style={{ fontFamily: "'Indie Flower', cursive" }}
                >
                  Für jedes Fitnesslevel
                </h3>
                <p className="mt-6 max-w-md text-balance font-display text-2xl/10 font-semibold tracking-wider text-white uppercase ">
                  Beweglichkeit, Kraft und Stabilität
                </p>
                <p className="mt-3 text-balance text-base/8 font-light text-white/80">
                  Die Einheiten eignen sich als Ergänzung zum Sporttraining oder
                  als regelmäßiges Bewegungsprogramm für mehr Körpergefühl.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline-1 outline-white/15 lg:rounded-bl-4xl " />
          </div>
          {/*2ряд  картка 2 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-[#020202]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <Image
                alt="Stretching und Mobility"
                src="/13.jpg"
                width={700}
                height={500}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3
                  className="text-2xl font-medium text-[#afd63f]"
                  style={{ fontFamily: "'Indie Flower', cursive" }}
                >
                  Ergänzung zum Sport
                </h3>
                <p className="mt-6 max-w-md text-balance font-display text-2xl/10 font-semibold tracking-wider text-white uppercase">
                  Ideal für Regeneration und Prävention
                </p>
                <p className="mt-3 text-balance text-base/8 font-light text-white/80">
                  Dehnung, Mobilität und Stabilität unterstützen die sportliche
                  Entwicklung nachhaltig.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline-1 outline-white/15" />
          </div>
          {/*2 ряд картка 3 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-[#afd63f] max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8 max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div>
                <h3
                  className="text-2xl font-medium text-black"
                  style={{ fontFamily: "'Indie Flower', cursive" }}
                >
                  Mehr Informationen
                </h3>
                <p className="mt-6 max-w-md text-balance font-display text-4xl/12 font-semibold tracking-wider text-white uppercase ">
                  Iris Schneider
                </p>
                <p className="mt-3 text-balance text-base/8 font-light text-black">
                  Weitere Details zu den Yoga- und Bewegungseinheiten finden Sie
                  direkt auf der Website.
                </p>
              </div>

              <Link
                href="https://www.iris-schneider.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center text-lg font-semibold text-black hover:text-indigo-100"
              >
                Website öffnen
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline-1 outline-white/20 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
