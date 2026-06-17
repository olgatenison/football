import Image from "next/image";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "./ContactForm";

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
    text: "Adresse folgt, Österreich",
    subtext: "",
    href: null,
    icon: MapPinIcon,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="kontakt-direkt"
      className="relative overflow-hidden bg-black pb-24 pt-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p
              className="font-medium text-4xl text-[#afd63f]"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              Kontakt
            </p>

            <h2
              className="mt-6 text-balance text-5xl/20
             font-semibold tracking-tight text-white font-display max-w-md"
            >
              Sie erreichen uns auch direkt
            </h2>

            <p className="  text-base/8 font-light text-white mt-6 text-balance">
              Haben Sie Fragen zum Tormanntraining, zu Camps oder individuellen
              Trainingspaketen? Kontaktieren Sie uns gerne telefonisch oder per
              E-Mail.
            </p>

            <div className="mt-12 max-w-xl space-y-10">
              {contactItems.map((item) => (
                <div key={item.title} className="flex gap-x-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blck border-[#afd63f] border">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-[#afd63f]"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        className=" block text-base text-gray-400 transition hover:text-white"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className=" text-base/7 text-gray-400">
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
