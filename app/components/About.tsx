import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Über mich
      </h2>
      {/* first block of logo */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-lg/8 font-semibold text-white">
          Seit über 40 Jahren ist Fußball meine Leidenschaft. Als aktiver
          Tormann und lizenzierter Tormanntrainer durfte ich wertvolle
          Erfahrungen auf und neben dem Platz sammeln. Bereits seit 2009 arbeite
          ich mit Nachwuchs- und Erwachsenentorhütern und unterstütze sie dabei,
          ihre Technik, Reaktionsfähigkeit und ihr Selbstvertrauen gezielt
          weiterzuentwickeln. Mit der UEFA-Torwarttrainer-B-Lizenz und
          jahrzehntelanger Praxiserfahrung weiß ich, worauf es im modernen
          Tormannspiel ankommt. Mein Ziel ist es, jeden Torhüter individuell zu
          fördern und dabei zu helfen, das persönliche Potenzial bestmöglich
          auszuschöpfen.
        </h3>{" "}
        <>
          <p>Aktive Karriere (логотипы 9 клубов)</p>
        </>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <Image
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
      {/* second block of logo */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-lg/8 font-semibold text-white">
          Seit über 40 Jahren ist Fußball meine Leidenschaft. Als aktiver
          Tormann und lizenzierter Tormanntrainer durfte ich wertvolle
          Erfahrungen auf und neben dem Platz sammeln. Bereits seit 2009 arbeite
          ich mit Nachwuchs- und Erwachsenentorhütern und unterstütze sie dabei,
          ihre Technik, Reaktionsfähigkeit und ihr Selbstvertrauen gezielt
          weiterzuentwickeln. Mit der UEFA-Torwarttrainer-B-Lizenz und
          jahrzehntelanger Praxiserfahrung weiß ich, worauf es im modernen
          Tormannspiel ankommt. Mein Ziel ist es, jeden Torhüter individuell zu
          fördern und dabei zu helfen, das persönliche Potenzial bestmöglich
          auszuschöpfen.
        </h3>
        <>
          <p>Trainerstationen (логотипы 13 клубов)</p>
        </>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <Image
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <Image
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
