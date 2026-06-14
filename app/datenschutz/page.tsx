import Link from "next/link";


export default function DatenschutzPage() {
  return (
    <main className="bg-gray-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500 hover:bg-white/10 hover:text-white"
        >
          ← Zur Startseite
        </Link>
        <p className="text-base font-semibold text-indigo-400 mt-10">
          Tormann & Bewegungsschule Weinviertel
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 space-y-10 text-base leading-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Verantwortlicher
            </h2>

            <p className="mt-4">
              Verantwortlich für die Verarbeitung personenbezogener Daten auf
              dieser Website ist:
            </p>

            <p className="mt-4">
              Tormann & Bewegungsschule Weinviertel
              <br />
              E-Mail:{" "}
              <a
                href="mailto:tormannschuleweinviertel@hotmail.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                tormannschuleweinviertel@hotmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>

            <p className="mt-4">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur
              Bereitstellung dieser Website sowie zur Bearbeitung von Anfragen
              erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Kontaktformular
            </h2>

            <p className="mt-4">
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die von
              Ihnen eingegebenen Daten zur Bearbeitung Ihrer Anfrage verarbeitet.
              Dazu gehören insbesondere Name, E-Mail-Adresse, Telefonnummer,
              Unternehmen und Nachricht.
            </p>

            <p className="mt-4">
              Die Verarbeitung erfolgt gemäß{" "}
              <a
                href="https://dsgvo-gesetz.de/art-6-dsgvo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Art. 6 Abs. 1 lit. b DSGVO
              </a>{" "}
              zur Durchführung vorvertraglicher Maßnahmen bzw. auf Grundlage
              unseres berechtigten Interesses gemäß{" "}
              <a
                href="https://dsgvo-gesetz.de/art-6-dsgvo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
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

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Hosting und Server-Logfiles
            </h2>

            <p className="mt-4">
              Beim Besuch dieser Website werden automatisch technische
              Informationen durch den Hosting-Anbieter verarbeitet. Dazu können
              insbesondere folgende Daten gehören:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
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
                className="text-indigo-400 hover:text-indigo-300"
              >
                Art. 6 Abs. 1 lit. f DSGVO
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Ihre Rechte
            </h2>

            <p className="mt-4">
              Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung
              Ihrer personenbezogenen Daten.
            </p>

            <p className="mt-4">
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen
              das Datenschutzrecht verstößt, können Sie sich bei der{" "}
              <a
                href="https://www.dsb.gv.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300"
              >
                österreichischen Datenschutzbehörde
              </a>{" "}
              beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. Kontakt</h2>

            <p className="mt-4">
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:
            </p>

            <p className="mt-4">
              <a
                href="mailto:tormannschuleweinviertel@hotmail.com"
                className="text-indigo-400 hover:text-indigo-300"
              >
                tormannschuleweinviertel@hotmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}