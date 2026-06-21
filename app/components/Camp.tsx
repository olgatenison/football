import {
  CalendarDaysIcon,
  MapPinIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const campDetails = [
  {
    icon: CalendarDaysIcon,
    title: "13. – 14. Juni 2026",
    text: "Jeweils 9:00 – 12:30 Uhr",
  },
  {
    icon: MapPinIcon,
    title: "Sportplatz USV Bullendorf",
    text: "Training auf dem Sportplatz",
  },
  {
    icon: TrophyIcon,
    title: "3 Trainingseinheiten täglich",
    text: "Intensives Tormanntraining",
  },
  {
    icon: UserGroupIcon,
    title: "Für Kinder & Jugendliche",
    text: "Von 8 bis 17 Jahren",
  },
  {
    icon: SparklesIcon,
    title: "Inklusive Campshirt 2026",
    text: "Im Preis enthalten",
  },
];

export default function Camp() {
  return (
    <div className="bg-black">
      <div className="mx-auto px-4 pt-8 md:pt-24 sm:px-6  max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2 border-b border-[#afd63f] pb-16">
          <div>
            <div className="border-b border-[#afd63f] pb-10">
              <p
                className="text-4xl font-medium text-[#afd63f]"
                style={{ fontFamily: "'Indie Flower', cursive" }}
              >
                Vor den Sommerferien
              </p>
              <h2 className="mt-6 md:max-w-md text-balance font-display text-3xl/12 md:text-5xl/20 font-semibold tracking-wider text-white uppercase">
                {" "}
                Tormann- trainingscamp
              </h2>
              <p className="mt-6 text-balance text-base/8 font-light text-white">
                <span className="font-semibold text-black bg-[#afd63f] mx-1 px-1">
                  2 Tage voller Training, Spaß und Entwicklung.
                </span>{" "}
                Das Camp richtet sich an motivierte Kinder und Jugendliche, die
                ihre Fähigkeiten im Tor gezielt verbessern möchten.
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {campDetails.map((detail) => (
                <div key={detail.title} className="relative">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-black ring-1 ring-[#afd63f]">
                      <detail.icon
                        aria-hidden="true"
                        className="size-6 text-[#afd63f]"
                      />
                    </div>
                    <div>
                      <dt className="text-base font-bold text-white">
                        {detail.title}
                      </dt>
                      <dd className="mt-2 text-base text-white/80">
                        {detail.text}
                      </dd>
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Image
              alt=""
              src="/с.png"
              width={500}
              height={500}
              className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
            />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="rounded-lg bg-[#afd63f] p-4 text-center">
                <div className=" flex text-center items-center ">
                  <span className="mt-6  font-display text-6xl/24 font-semibold tracking-wider text-white uppercase text-center mx-auto">
                    € 99
                  </span>
                </div>
                <p className="text-2xl font-bold text-black mt-6 wrap-break-word">
                  Frühbucherpreis
                </p>
                <p className=" text-base text-black">
                  Gültig bei Anmeldung bis 15. Mai 2026.
                </p>
              </div>

              <div className="rounded-lg bg-[#afd63f] p-4 text-center">
                <div className=" flex  text-center items-center ">
                  <span className="mt-6  font-display text-6xl/24 font-semibold tracking-wider text-white uppercase text-center mx-auto">
                    € 119
                  </span>
                </div>
                <p className="text-2xl font-bold text-black mt-6 wrap-break-word">
                  Normalpreis
                </p>
                <p className=" text-base text-black">Gültig ab 16. Mai 2026.</p>
              </div>
            </div>

            <>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/camp-anmeldung"
                  className="rounded-md bg-[#afd63f] w-full py-3.5 text-base font-semibold text-black shadow-lg hover:bg-[#273810] transition-colors duration-300 ease-out hover:text-white text-center"
                >
                  Jetzt anmelden
                </Link>
              </div>
              <p className="mt-6 text-center text-base/8 text-white/80 text-balance">
                Fragen? Schreiben Sie uns an{" "}
                <a
                  href="mailto:tormannschuleweinviertel@hotmail.com"
                  className="font-semibold text-[#afd63f] hover:text-white"
                >
                  tormannschuleweinviertel@hotmail.com
                </a>{" "}
                oder rufen Sie an unter{" "}
                <a
                  href="tel:+436643919374"
                  className="font-semibold text-[#afd63f] hover:text-white"
                >
                  +43 664 391 93 74
                </a>
                .
              </p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
