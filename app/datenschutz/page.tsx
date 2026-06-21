import Link from "next/link";

export default function DatenschutzPage() {
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

          <h1 className="mt-2 font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl lg:text-8xl">
            Datenschutz
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <aside>
            <h2 className="font-display text-4xl uppercase leading-none text-[#afd63f]">
              Deine Daten
            </h2>
          </aside>

          <div className="space-y-6 text-base leading-8 text-white/80">
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                1. Verantwortlicher
              </h2>

              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten auf
                dieser Website ist:
              </p>

              <p className="mt-4">
                Tormann & Bewegungsschule Weinviertel
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:tormannschuleweinviertel@hotmail.com"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  tormannschuleweinviertel@hotmail.com
                </a>
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>

              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung dieser Website sowie zur Bearbeitung von Anfragen
                erforderlich ist.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                3. Kontaktformular
              </h2>

              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, werden die
                von Ihnen eingegebenen Daten zur Bearbeitung Ihrer Anfrage
                verarbeitet. Dazu gehören insbesondere Name, E-Mail-Adresse,
                Telefonnummer, Unternehmen und Nachricht.
              </p>

              <p className="mt-4">
                Die Verarbeitung erfolgt gemäß{" "}
                <a
                  href="https://dsgvo-gesetz.de/art-6-dsgvo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  Art. 6 Abs. 1 lit. b DSGVO
                </a>{" "}
                zur Durchführung vorvertraglicher Maßnahmen bzw. auf Grundlage
                unseres berechtigten Interesses gemäß{" "}
                <a
                  href="https://dsgvo-gesetz.de/art-6-dsgvo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  Art. 6 Abs. 1 lit. f DSGVO
                </a>
                .
              </p>

              <p className="mt-4">
                Die Daten werden nicht an Dritte weitergegeben und nur so lange
                gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich
                ist.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                4. Hosting und Server-Logfiles
              </h2>

              <p>
                Beim Besuch dieser Website werden automatisch technische
                Informationen durch den Hosting-Anbieter verarbeitet.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#afd63f]">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>aufgerufene Seiten</li>
              </ul>

              <p className="mt-4">
                Diese Daten dienen der technischen Bereitstellung, Stabilität und
                Sicherheit der Website. Rechtsgrundlage ist{" "}
                <a
                  href="https://dsgvo-gesetz.de/art-6-dsgvo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  Art. 6 Abs. 1 lit. f DSGVO
                </a>
                .
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                5. Ihre Rechte
              </h2>

              <p>
                Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf
                Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten.
              </p>

              <p className="mt-4">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt, können Sie sich bei der{" "}
                <a
                  href="https://www.dsb.gv.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  österreichischen Datenschutzbehörde
                </a>{" "}
                beschweren.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                6. Kontakt
              </h2>

              <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>

              <p className="mt-4">
                <a
                  href="mailto:tormannschuleweinviertel@hotmail.com"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  tormannschuleweinviertel@hotmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}