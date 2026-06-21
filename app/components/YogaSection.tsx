import Image from "next/image";
import Link from "next/link";

export default function YogaSection() {
  return (
    <section id="bewegungsschule" className="bg-black py-24  ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
        <div>
          {/*2 ряд  картка 1 */}
          <div className="relative lg:col-span-2 ">
            <div className="absolute inset-0 rounded-lg bg-[#020202] lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
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
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow border border-[#afd63f]/50 lg:rounded-bl-4xl " />
          </div>
          {/*2ряд  картка 2 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-[#020202]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
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
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow border border-[#afd63f]/50" />
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
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow border border-[#afd63f]/50 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
