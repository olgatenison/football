import Categories from "./Categories";

export default function WhoIsFor() {
  return (
    <section className="bg-black pb-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-16">
          <h2 className="mt-6 text-balance text-5xl/20 font-semibold tracking-tight text-white font-display">
            Tormanntraining für alle Altersklassen
          </h2>
          <div className="max-w-3xl text-base/8 font-light text-white">
            <p className=" text-base/8 font-light text-white mt-6">
              Eine fundierte Ausbildung in den Bereichen direkte
              Torverteidigung, Raumsicherung und mannschaftstaktisches Verhalten
              bildet die Grundlage unseres Trainings. Ergänzt wird das Programm
              durch gezielte Einheiten in Fitness, Koordination und Athletik.
            </p>

            <p className=" text-base/8 font-light text-white mt-6">
              Das Training wird alters- und leistungsgerecht durchgeführt.{" "}
              <span className="font-semibold text-black bg-[#afd63f] mx-1 px-1">
                In den Gruppen achten wir darauf, dass die Leistungsunterschiede
                der Tormänner möglichst gering bleiben, um optimale
                Trainingsbedingungen zu schaffen.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3
            className=" font-medium text-4xl text-[#afd63f] "
            style={{ fontFamily: "'Indie Flower', cursive" }}
          >
            Wir bieten:
          </h3>

          <div className="mt-8">
            <Categories />
          </div>
        </div>

        <p className="max-w-2xl text-base/8 font-light text-white mt-12">
          Für Kinder gibt es keine Altersgrenze. Wichtig ist jedoch die eigene
          Motivation und der Wunsch, im Tor zu stehen – denn Begeisterung und
          Freude am Tormannspiel sind die Grundlage für nachhaltigen
          Trainingserfolg.
        </p>
      </div>
    </section>
  );
}
