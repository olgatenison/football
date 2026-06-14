import Link from "next/link";



export default function ImpressumPage() {
  return (
    <main className="bg-gray-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500 hover:bg-white/10 hover:text-white"
        >
          ← Zur Startseite
        </Link>
        <p className="text-base font-semibold text-indigo-400">
          Tormann & Bewegungsschule Weinviertel
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-12 space-y-10 text-base leading-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Angaben gemäß § 5 ECG
            </h2>

            <p className="mt-4">
              <strong>Union Tormann- und Bewegungsschule Weinviertel</strong>
              <br />
              ZVR-Zahl: 1542945537
            </p>

            <p className="mt-4">
              Mitglied der Sportunion Niederösterreich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Verantwortlich für den Inhalt
            </h2>

            <p className="mt-4">
              Union Tormann- und Bewegungsschule Weinviertel
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Kontakt
            </h2>

            <p className="mt-4">
              Telefon:{" "}
              <a
                href="tel:+436643919374"
                className="text-indigo-400 hover:text-indigo-300"
              >
                +43 664 391 93 74
              </a>
            </p>

            <p>
              E-Mail:{" "}
              <a
                href="mailto:franz.machaczek@hotmail.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                franz.machaczek@hotmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Haftung für Inhalte
            </h2>

            <p className="mt-4">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird jedoch keine Gewähr übernommen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Haftung für Links
            </h2>

            <p className="mt-4">
              Diese Website kann Links zu externen Websites Dritter enthalten.
              Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Urheberrecht
            </h2>

            <p className="mt-4">
              Die auf dieser Website veröffentlichten Inhalte, Bilder und Texte
              unterliegen dem Urheberrecht. Eine Verwendung oder
              Vervielfältigung ist nur mit ausdrücklicher Zustimmung des
              jeweiligen Rechteinhabers gestattet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}