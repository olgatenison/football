import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-24 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-14 inline-flex items-center rounded-full border border-[#afd63f]/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#afd63f] transition hover:bg-[#afd63f] hover:text-black"
        >
          ← Zur Startseite
        </Link>

        <div className="mb-16">
          <p className="font-draw text-3xl text-[#afd63f] sm:text-4xl">
            Tormann & Bewegungsschule Weinviertel
          </p>

          <h1 className="mt-2 font-display text-6xl font-black uppercase leading-none text-white sm:text-7xl lg:text-8xl">
            Impressum
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <aside>
            <h2 className="font-display text-4xl uppercase leading-none text-[#afd63f]">
              Rechtliches
            </h2>
          </aside>

          <div className="space-y-6 text-base leading-8 text-white/80">
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Angaben gemäß § 5 ECG
              </h2>

              <p>
                <strong className="text-white">
                  Union Tormann- und Bewegungsschule Weinviertel
                </strong>
                <br />
                ZVR-Zahl: <span className="text-[#afd63f]">1542945537</span>
              </p>

              <p className="mt-4">
                Mitglied der Sportunion Niederösterreich.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Verantwortlich für den Inhalt
              </h2>

              <p>Union Tormann- und Bewegungsschule Weinviertel</p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Kontakt
              </h2>

              <p>
                Telefon:{" "}
                <a
                  href="tel:+436643919374"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  +43 664 391 93 74
                </a>
              </p>

              <p>
                E-Mail:{" "}
                <a
                  href="mailto:franz.machaczek@hotmail.com"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  franz.machaczek@hotmail.com
                </a>
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Haftung für Inhalte
              </h2>

              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
                Inhalte wird jedoch keine Gewähr übernommen.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Haftung für Links
              </h2>

              <p>
                Diese Website kann Links zu externen Websites Dritter enthalten.
                Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                Urheberrecht
              </h2>

              <p>
                Die auf dieser Website veröffentlichten Inhalte, Bilder und Texte
                unterliegen dem Urheberrecht. Eine Verwendung oder
                Vervielfältigung ist nur mit ausdrücklicher Zustimmung des
                jeweiligen Rechteinhabers gestattet.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}