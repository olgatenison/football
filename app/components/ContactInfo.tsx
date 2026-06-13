import Image from "next/image";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const contactItems = [
  {
    title: "Telefon",
    text: "+43 664 391 93 74",
    href: "tel:+436643919374",
    icon: PhoneIcon,
  },
  {
    title: "E-Mail",
    text: "tormannschuleweinviertel@hotmail.com",
    href: "mailto:tormannschuleweinviertel@hotmail.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Adresse",
    text: "Adresse folgt",
    subtext: "Österreich",
    href: null,
    icon: MapPinIcon,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="kontakt-direkt"
      className="relative overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-base/7 font-semibold text-indigo-400">Kontakt</p>

            <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Sie erreichen uns auch direkt
            </h2>

            <p className="mt-6 text-lg/8 text-gray-400">
              Haben Sie Fragen zum Tormanntraining, zu Camps oder individuellen
              Trainingspaketen? Kontaktieren Sie uns gerne telefonisch oder per
              E-Mail.
            </p>

            <div className="mt-12 max-w-xl space-y-10">
              {contactItems.map((item) => (
                <div key={item.title} className="flex gap-x-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-indigo-500">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-base/7 font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block text-base/7 text-gray-400 transition hover:text-white"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="mt-2 text-base/7 text-gray-400">
                        {item.text}
                        {item.subtext && (
                          <>
                            <br />
                            {item.subtext}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-indigo-500/10 blur-2xl" />

            <Image
              alt="Tormanntraining Kontakt"
              src="/contact/contact-info.jpg"
              width={900}
              height={1100}
              className="relative aspect-[4/5] w-full rounded-3xl bg-gray-800 object-cover ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
