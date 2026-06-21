import Image from "next/image";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/sponsor/p1.png",
  },
  {
    name: "Sponsor 2",
    logo: "/sponsor/s1.png",
  },
  {
    name: "Sponsor 3",
    logo: "/sponsor/s2.png",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-black pt-12  overflow-hidden">
      <div
        className="mx-auto max-w-7xl bg-contain bg-bottom bg-no-repeat pb-32"
        style={{ backgroundImage: "url('/hero/ballbg.jpg')" }}
      >
        <div className="px-6 lg:px-8">
          <div className="items-center text-center">
            <div className="mx-auto">
              <p
                className="font-medium text-4xl text-[#afd63f]"
                style={{ fontFamily: "'Indie Flower', cursive" }}
              >
                Netzwerk & Unterstützung
              </p>

              <h2 className="mt-6 text-balance text-3xl/12 md:text-5xl font-semibold tracking-tight text-white font-display">
                Unsere Sponsoren und Partner
              </h2>
            </div>

            <p className="max-w-2xl mx-auto text-base/8 font-light text-white mt-6 text-balance">
              Gemeinsam mit unseren Sponsoren und Partnern schaffen wir
              bestmögliche Bedingungen für professionelles Tormanntraining,
              Bewegung, Entwicklung und Freude am Sport.
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg transition-colors duration-300 ease-out hover:bg-[#273810] hover:text-white"
              >
                Partner werden
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 items-center">
            <div className="col-span-2 sm:col-span-1 flex h-32 items-center justify-center sm:justify-start opacity-80 transition-all duration-300 ease-out hover:scale-110 hover:opacity-100">
              <Image
                alt={sponsors[0].name}
                src={sponsors[0].logo}
                width={320}
                height={200}
                className="max-h-34 w-full object-contain"
              />
            </div>

            <div className="hidden sm:block" />

            <div className="flex h-32 items-center justify-center opacity-80 transition-all duration-300 ease-out hover:scale-110 hover:opacity-100">
              <Image
                alt={sponsors[1].name}
                src={sponsors[1].logo}
                width={320}
                height={200}
                className="max-h-34 w-full object-contain"
              />
            </div>

            <div className="flex h-32 items-center justify-center sm:justify-end opacity-80 transition-all duration-300 ease-out hover:scale-110 hover:opacity-100">
              <Image
                alt={sponsors[2].name}
                src={sponsors[2].logo}
                width={320}
                height={200}
                className="max-h-34 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
