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
    <section id="contact" className="relative  bg-black pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:items-start gap-16 lg:grid-cols-2 items-center">
          <div className="md:max-w-xl lg:w-full mx-auto ">
            <p
              className="font-medium text-4xl text-[#afd63f] text-center lg:text-left"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              Kontakt
            </p>

            <h2
              className="mt-6 text-balance text-3xl/12 md:text-5xl/20 
             font-semibold tracking-tight text-white font-display lg:max-w-md text-center lg:text-left"
            >
              Sie erreichen uns auch direkt
            </h2>

            <p className="max-w-2xl mx-auto text-base/8 font-light text-white mt-6 text-balance lg:text-left text-center">
              Haben Sie Fragen zum Tormanntraining, zu Camps oder individuellen
              Trainingspaketen? Kontaktieren Sie uns gerne telefonisch oder per
              E-Mail.
            </p>

            <div className="mt-12 lg:max-w-xl space-y-10 mx-auto border-b border-[#afd63f] lg:border-0 pb-12">
              {contactItems.map((item) => (
                <div key={item.title} className="flex gap-x-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-black border-[#afd63f] border ">
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
                        className=" block text-base text-white/80 transition hover:text-white wrap-break-word"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className=" text-base/7 text-white/80 wrap-break-word">
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
