import {
  UserIcon,
  UsersIcon,
  CalendarDaysIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const offers = [
  {
    name: "Einzeltraining",
    description: "Individuelles Training mit persönlichem Fokus.",
    icon: UserIcon,
  },
  {
    name: "Gruppentraining",
    description: "Training in kleinen, leistungsgerechten Gruppen.",
    icon: UsersIcon,
  },
  {
    name: "Tagescamps",
    description: "Intensive Trainingstage für gezielte Entwicklung.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Training für Kinder",
    description: "Altersgerechtes Training mit Spaß und Motivation.",
    icon: FaceSmileIcon,
  },
  {
    name: "Jugendliche und Erwachsene",
    description: "Training für verschiedene Alters- und Leistungsstufen.",
    icon: AcademicCapIcon,
  },
  {
    name: "Individuelle Trainingspakete für Vereine",
    description: "Maßgeschneiderte Trainingslösungen für Vereine.",
    icon: BuildingOfficeIcon,
  },
];

export default function WhoIsFor() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tormanntraining für alle Altersklassen
            </h2>

            <p className="mt-6 text-lg/8 text-gray-400">
              Eine fundierte Ausbildung in den Bereichen direkte
              Torverteidigung, Raumsicherung und mannschaftstaktisches Verhalten
              bildet die Grundlage unseres Trainings. Ergänzt wird das Programm
              durch gezielte Einheiten in Fitness, Koordination und Athletik.
            </p>

            <p className="mt-6 text-lg/8 text-gray-400">
              Das Training wird alters- und leistungsgerecht durchgeführt. In
              den Gruppen achten wir darauf, dass die Leistungsunterschiede der
              Tormänner möglichst gering bleiben, um optimale
              Trainingsbedingungen zu schaffen.
            </p>
          </div>

          <div className="xl:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Wir bieten:
            </h3>

            <ul role="list" className="mt-8 grid gap-6 sm:grid-cols-2">
              {offers.map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <div className="flex gap-x-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/20">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-indigo-400"
                      />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-sm/6 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-lg/8 text-gray-400">
              Für Kinder gibt es keine Altersgrenze. Wichtig ist jedoch die
              eigene Motivation und der Wunsch, im Tor zu stehen – denn
              Begeisterung und Freude am Tormannspiel sind die Grundlage für
              nachhaltigen Trainingserfolg.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
