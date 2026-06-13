import Link from "next/link";

const navigation = [{ name: "Datenschutz", href: "/datenschutz" }];

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold text-white">
              Tormann & Bewegungsschule Weinviertel
            </Link>

            <p className="mt-4 max-w-md text-sm/6 text-gray-400">
              Professionelles Tormanntraining, Bewegung und individuelle
              Förderung im Weinviertel.
            </p>
          </div>

          <div className="space-y-3 text-sm/6 text-gray-400">
            <p className="font-semibold text-white">Kontakt</p>

            <p>
              Adresse folgt
              <br />
              Österreich
            </p>

            <p>
              <a
                href="mailto:tormannschuleweinviertel@hotmail.com"
                className="hover:text-white"
              >
                tormannschuleweinviertel@hotmail.com
              </a>
            </p>

            <p>
              <a href="tel:+436643919374" className="hover:text-white">
                +43 664 391 93 74
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm/6 text-gray-400">
            © 2026 Tormann & Bewegungsschule Weinviertel
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 text-gray-400 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <p className="text-sm/6 text-gray-500">
              Erstellt von{" "}
              <a
                href="https://dvi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-400 hover:text-white"
              >
                DVI
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
