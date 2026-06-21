import Link from "next/link";

export default function AgbPage() {
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
            AGB
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <aside>
            <h2 className="font-display text-4xl uppercase leading-none text-[#afd63f]">
              Teilnahme
            </h2>
          </aside>

          <div className="space-y-6 text-base leading-8 text-white/80">
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                1. Geltungsbereich
              </h2>

              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche
                Kurse, Trainings, Workshops, Veranstaltungen und sonstige
                Angebote der Union Tormann- und Bewegungsschule Weinviertel.
              </p>

              <p className="mt-4">
                Mit der Anmeldung erkennt der/die Teilnehmer:in bzw.
                dessen/deren gesetzliche Vertretung diese AGB verbindlich an.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                2. Anmeldung und Vertragsabschluss
              </h2>

              <p>
                Die Anmeldung erfolgt schriftlich, per E-Mail oder über ein
                Online-Anmeldeformular.
              </p>

              <p className="mt-4">
                Der Vertrag kommt mit der schriftlichen Anmeldebestätigung durch
                den Veranstalter zustande.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                3. Teilnahmevoraussetzungen
              </h2>

              <p>
                Teilnahmeberechtigt sind Kinder, Jugendliche und Erwachsene
                gemäß der jeweiligen Kursbeschreibung.
              </p>

              <p className="mt-4">
                Bei minderjährigen Teilnehmer:innen ist die Zustimmung eines
                Erziehungsberechtigten erforderlich.
              </p>

              <p className="mt-4">
                Mit der Anmeldung bestätigt der/die Teilnehmer:in,
                sportgesund zu sein. Gesundheitliche Einschränkungen sind vor
                Trainingsbeginn bekanntzugeben.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                4. Kursbeitrag und Zahlungsbedingungen
              </h2>

              <p>
                Die Kursgebühren sind vor Kursbeginn bzw. innerhalb der auf der
                Rechnung angegebenen Frist ohne Abzug zu bezahlen.
              </p>

              <p className="mt-4">
                Bei Zahlungsverzug behält sich der Veranstalter vor,
                Mahngebühren zu verrechnen oder Teilnehmer:innen vom Training
                auszuschließen.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                5. Rücktritt und Stornobedingungen
              </h2>

              <p>Ein Rücktritt von der Anmeldung ist schriftlich mitzuteilen.</p>

              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#afd63f]">
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

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                6. Absage oder Änderung durch den Veranstalter
              </h2>

              <p>
                Der Veranstalter behält sich vor, Kurse bei zu geringer
                Teilnehmerzahl, Ausfall von Trainer:innen oder aus sonstigen
                wichtigen Gründen, z. B. höherer Gewalt oder
                Wetterbedingungen, abzusagen oder zeitlich zu verschieben.
              </p>

              <p className="mt-4">
                Bereits bezahlte Beiträge werden in diesem Fall aliquot
                rückerstattet oder gutgeschrieben. Weitergehende Ansprüche
                bestehen nicht.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                7. Haftung
              </h2>

              <p>Die Teilnahme erfolgt auf eigene Gefahr.</p>

              <p className="mt-4">
                Der Veranstalter haftet nur für Schäden, die auf grobe
                Fahrlässigkeit oder Vorsatz zurückzuführen sind. Eine Haftung
                für leichte Fahrlässigkeit ist, außer bei Personenschäden,
                ausgeschlossen.
              </p>

              <p className="mt-4">
                Für persönliche Gegenstände wird keine Haftung übernommen.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                8. Versicherung
              </h2>

              <p>
                Die Teilnehmer:innen sind grundsätzlich selbst für einen
                ausreichenden Unfall- und Haftpflichtversicherungsschutz
                verantwortlich.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                9. Foto- und Videoaufnahmen
              </h2>

              <p>
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

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                10. Datenschutz
              </h2>

              <p>
                Personenbezogene Daten werden ausschließlich zum Zweck der
                Kursorganisation, Abrechnung und Information über weitere
                Angebote verarbeitet.
              </p>

              <p className="mt-4">
                Die Daten werden nicht an Dritte weitergegeben, sofern keine
                gesetzliche Verpflichtung besteht.
              </p>

              <p className="mt-4">
                Weitere Informationen finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="font-bold text-[#afd63f] hover:text-white"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                11. Ausschluss vom Training
              </h2>

              <p>
                Der Veranstalter behält sich vor, Teilnehmer:innen bei grobem
                Fehlverhalten, wiederholten Regelverstößen oder Gefährdung
                anderer Personen vom Training auszuschließen.
              </p>

              <p className="mt-4">
                In diesem Fall besteht kein Anspruch auf Rückerstattung des
                Kursbeitrags.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-black text-white">
                12. Gerichtsstand und anwendbares Recht
              </h2>

              <p>Es gilt österreichisches Recht.</p>

              <p className="mt-4">
                Gerichtsstand ist das sachlich zuständige Gericht am Sitz des
                Veranstalters.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}