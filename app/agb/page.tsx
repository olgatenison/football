import Link from "next/link";

export default function AgbPage() {
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
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="mt-12 space-y-10 text-base leading-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Geltungsbereich
            </h2>

            <p className="mt-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Kurse,
              Trainings, Workshops, Veranstaltungen und sonstige Angebote der
              Union Tormann- und Bewegungsschule Weinviertel.
            </p>

            <p className="mt-4">
              Mit der Anmeldung erkennt der/die Teilnehmer:in bzw. dessen/deren
              gesetzliche Vertretung diese AGB verbindlich an.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Anmeldung und Vertragsabschluss
            </h2>

            <p className="mt-4">
              Die Anmeldung erfolgt schriftlich, per E-Mail oder über ein
              Online-Anmeldeformular.
            </p>

            <p className="mt-4">
              Der Vertrag kommt mit der schriftlichen Anmeldebestätigung durch
              den Veranstalter zustande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Teilnahmevoraussetzungen
            </h2>

            <p className="mt-4">
              Teilnahmeberechtigt sind Kinder, Jugendliche und Erwachsene gemäß
              der jeweiligen Kursbeschreibung.
            </p>

            <p className="mt-4">
              Bei minderjährigen Teilnehmer:innen ist die Zustimmung eines/einer
              Erziehungsberechtigten erforderlich.
            </p>

            <p className="mt-4">
              Mit der Anmeldung bestätigt der/die Teilnehmer:in, sportgesund zu
              sein. Gesundheitliche Einschränkungen sind vor Trainingsbeginn
              bekanntzugeben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Kursbeitrag und Zahlungsbedingungen
            </h2>

            <p className="mt-4">
              Die Kursgebühren sind vor Kursbeginn bzw. innerhalb der auf der
              Rechnung angegebenen Frist ohne Abzug zu bezahlen.
            </p>

            <p className="mt-4">
              Bei Zahlungsverzug behält sich der Veranstalter vor,
              Mahngebühren zu verrechnen oder Teilnehmer:innen vom Training
              auszuschließen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Rücktritt und Stornobedingungen
            </h2>

            <p className="mt-4">
              Ein Rücktritt von der Anmeldung ist schriftlich mitzuteilen.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Bis 14 Tage vor Kursbeginn: kostenfreie Stornierung</li>
              <li>13 bis 7 Tage vor Kursbeginn: 50 % des Kursbeitrags</li>
              <li>
                Ab 6 Tage vor Kursbeginn oder bei Nichterscheinen: 100 % des
                Kursbeitrags
              </li>
            </ul>

            <p className="mt-4">
              Bei Verletzung oder Krankheit kann bei Vorlage eines ärztlichen
              Attests eine individuelle Lösung vereinbart werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Absage oder Änderung durch den Veranstalter
            </h2>

            <p className="mt-4">
              Der Veranstalter behält sich vor, Kurse bei zu geringer
              Teilnehmerzahl, Ausfall von Trainer:innen oder aus sonstigen
              wichtigen Gründen, z. B. höhere Gewalt oder Wetterbedingungen,
              abzusagen oder zeitlich zu verschieben.
            </p>

            <p className="mt-4">
              Bereits bezahlte Beiträge werden in diesem Fall aliquot
              rückerstattet oder gutgeschrieben. Weitergehende Ansprüche
              bestehen nicht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Haftung</h2>

            <p className="mt-4">Die Teilnahme erfolgt auf eigene Gefahr.</p>

            <p className="mt-4">
              Der Veranstalter haftet nur für Schäden, die auf grobe
              Fahrlässigkeit oder Vorsatz zurückzuführen sind. Eine Haftung für
              leichte Fahrlässigkeit ist, außer bei Personenschäden,
              ausgeschlossen.
            </p>

            <p className="mt-4">
              Für persönliche Gegenstände wird keine Haftung übernommen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Versicherung
            </h2>

            <p className="mt-4">
              Die Teilnehmer:innen sind grundsätzlich selbst für einen
              ausreichenden Unfall- und Haftpflichtversicherungsschutz
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Foto- und Videoaufnahmen
            </h2>

            <p className="mt-4">
              Während der Trainings und Veranstaltungen können Foto- und
              Videoaufnahmen erstellt werden.
            </p>

            <p className="mt-4">
              Mit der Anmeldung erklärt sich der/die Teilnehmer:in bzw.
              dessen/deren gesetzliche Vertretung einverstanden, dass diese
              Aufnahmen für Vereinszwecke, Website, Social Media und
              Printmedien verwendet werden dürfen.
            </p>

            <p className="mt-4">
              Ein Widerruf ist jederzeit schriftlich möglich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              10. Datenschutz
            </h2>

            <p className="mt-4">
              Personenbezogene Daten werden ausschließlich zum Zweck der
              Kursorganisation, Abrechnung und Information über weitere Angebote
              verarbeitet.
            </p>

            <p className="mt-4">
              Die Daten werden nicht an Dritte weitergegeben, sofern keine
              gesetzliche Verpflichtung besteht.
            </p>

            <p className="mt-4">
              Weitere Informationen finden Sie in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              11. Ausschluss vom Training
            </h2>

            <p className="mt-4">
              Der Veranstalter behält sich vor, Teilnehmer:innen bei grobem
              Fehlverhalten, wiederholten Regelverstößen oder Gefährdung anderer
              Personen vom Training auszuschließen.
            </p>

            <p className="mt-4">
              In diesem Fall besteht kein Anspruch auf Rückerstattung des
              Kursbeitrags.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              12. Gerichtsstand und anwendbares Recht
            </h2>

            <p className="mt-4">Es gilt österreichisches Recht.</p>

            <p className="mt-4">
              Gerichtsstand ist das sachlich zuständige Gericht am Sitz des
              Veranstalters.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}