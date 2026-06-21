import Image from "next/image";

const activeCareerLogos = [
  { src: "/aboutStudy/logo1.png", alt: "Club 1" },
  { src: "/aboutStudy/logo2.png", alt: "Club 2" },
  { src: "/aboutStudy/logo3.png", alt: "Club 3" },
  { src: "/aboutStudy/logo4.png", alt: "Club 4" },
  { src: "/aboutStudy/logo5.png", alt: "Club 5" },
  { src: "/aboutStudy/logo6.png", alt: "Club 6" },
  { src: "/aboutStudy/logo7.png", alt: "Club 7" },
  { src: "/aboutStudy/logo8.png", alt: "Club 8" },
  { src: "/aboutStudy/logo9.png", alt: "Club 9" },
];

const trainerLogos = [
  { src: "/aboutWork/logo1.png", alt: "Club 1" },
  { src: "/aboutWork/logo2.png", alt: "Club 2" },
  { src: "/aboutWork/logo3.png", alt: "Club 3" },
  { src: "/aboutWork/logo4.png", alt: "Club 4" },
  { src: "/aboutWork/logo5.png", alt: "Club 5" },
  { src: "/aboutWork/logo6.png", alt: "Club 6" },
  { src: "/aboutWork/logo7.png", alt: "Club 7" },
  { src: "/aboutWork/logo8.png", alt: "Club 8" },
  { src: "/aboutWork/logo9.png", alt: "Club 9" },
  { src: "/aboutWork/logo10.png", alt: "Club 10" },
  { src: "/aboutWork/logo11.png", alt: "Club 11" },
  { src: "/aboutWork/logo12.png", alt: "Club 12" },
  { src: "/aboutWork/logo13.png", alt: "Club 13" },
];

type Logo = {
  src: string;
  alt: string;
};

function LogoGrid({ logos }: { logos: Logo[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:max-w-5xl lg:grid-cols-5">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-24 w-40 items-center justify-center opacity-80 transition-all duration-300 ease-out hover:scale-110 hover:opacity-100"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={158}
            height={80}
            className="max-h-24 max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-black py-18 sm:py-24" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Шапка */}
        <div className="mx-auto md:flex max-w-4xl items-end gap-x-16 ">
          <div className="w-80 md:w-48 shrink-0 overflow-hidden rounded-lg md:mx-0 mx-auto">
            <Image
              src="/about.png"
              alt="Über mich"
              width={300}
              height={350}
              className="md:max-h-80 w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
          <p
            className="block text-center font-medium text-4xl text-[#afd63f] md:hidden mt-3"
            style={{ fontFamily: "'Indie Flower', cursive" }}
          >
            Franz Machaczek
          </p>
          <div className="relative">
            <h2 className="md:max-w-2xl text-balance text-5xl/24 font-semibold tracking-tight text-white md:text-7xl font-display md:text-left text-center md:mt-0 mt-3">
              Über mich
            </h2>
            <p
              className="md:block absolute -top-12 left-24 font-medium text-4xl text-[#afd63f] hidden "
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              Franz Machaczek
            </p>
          </div>
        </div>
        {/* Aktive Karriere */}
        <section className="mt-12">
          <div className="mx-auto md:flex max-w-7xl items-start justify-center gap-x-16">
            <h3 className="mt-1 md:w-40 shrink-0 text-2xl font-bold text-[#afd63f] font-display">
              Aktive Karriere
            </h3>
            <p className="md:mt-0 mt-8 md:max-w-2xl text-base/8 font-light text-white">
              Seit über 40 Jahren ist Fußball meine Leidenschaft. Als aktiver
              Tormann und lizenzierter Tormanntrainer durfte ich wertvolle
              Erfahrungen auf und neben dem Platz sammeln. Bereits seit 2009
              arbeite ich mit Nachwuchs- und Erwachsenentorhütern und
              unterstütze sie dabei, ihre Technik, Reaktionsfähigkeit und ihr
              Selbstvertrauen gezielt weiterzuentwickeln.
              <span className="font-semibold text-black bg-[#afd63f] mx-1 px-1">
                {" "}
                Mit der UEFA-Torwarttrainer-B-Lizenz und jahrzehntelanger
                Praxiserfahrung weiß ich, worauf es im modernen Tormannspiel
                ankommt.{" "}
              </span>
              Mein Ziel ist es, jeden Torhüter individuell zu fördern und dabei
              zu helfen, das persönliche Potenzial bestmöglich auszuschöpfen.
            </p>
          </div>
          <div className="mt-16">
            <LogoGrid logos={activeCareerLogos} />
          </div>
        </section>
        {/* Trainerstationen */}
        <section className="mt-12 md:mt-28">
          <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-start justify-center gap-x-16 gap-y-6">
            <p className="max-w-2xl md:text-right text-base/8 font-light text-white text-left">
              Als Tormanntrainer habe ich in zahlreichen Vereinen und
              Nachwuchsakademien gearbeitet und dabei Torhüter aller
              Altersklassen betreut.{" "}
              <span className="font-semibold text-black bg-[#afd63f] mx-1 px-1">
                Seit 2009 begleite ich Torhüter auf ihrem Weg — vom
                Nachwuchsspieler bis zum Profi.
              </span>{" "}
              Mein Ziel ist es, jeden Torhüter individuell zu fördern und dabei
              zu helfen, das persönliche Potenzial bestmöglich auszuschöpfen.
            </p>

            <h3 className="mt-1 md:w-40 shrink-0 text-2xl font-bold text-[#afd63f] font-display">
              Trainer&shy;stationen
            </h3>
          </div>

          <div className="mt-16">
            <LogoGrid logos={trainerLogos} />
          </div>
        </section>
      </div>
    </div>
  );
}
