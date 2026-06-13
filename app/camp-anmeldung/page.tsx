import {
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function CampAnmeldungPage() {
  return (
    <main className="relative isolate bg-gray-900">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-16 pt-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="text-base/7 font-semibold text-indigo-400">
              Anmeldung
            </p>

            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tormanntrainingscamp 2026
            </h1>

            <p className="mt-6 text-lg/8 text-gray-400">
              Bitte füllen Sie das Formular aus. Nach dem Absenden melden wir
              uns mit allen weiteren Informationen zur Teilnahme.
            </p>

            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
              <div className="flex gap-x-4">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-7 w-6 flex-none text-gray-400"
                />
                <dd>
                  13. – 14. Juni 2026
                  <br />
                  jeweils 9:00 – 12:30 Uhr
                </dd>
              </div>

              <div className="flex gap-x-4">
                <PhoneIcon
                  aria-hidden="true"
                  className="h-7 w-6 flex-none text-gray-400"
                />
                <dd>
                  <a href="tel:+436643919374" className="hover:text-white">
                    +43 664 391 93 74
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-7 w-6 flex-none text-gray-400"
                />
                <dd>
                  <a
                    href="mailto:tormannschuleweinviertel@hotmail.com"
                    className="hover:text-white"
                  >
                    tormannschuleweinviertel@hotmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-8 sm:pb-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-xl lg:mr-0">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="child-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Name des Kindes
                </label>
                <input
                  id="child-name"
                  name="child-name"
                  type="text"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="child-age"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Alter
                </label>
                <input
                  id="child-age"
                  name="child-age"
                  type="number"
                  min="8"
                  max="17"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="parent-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Name der erziehungsberechtigten Person
                </label>
                <input
                  id="parent-name"
                  name="parent-name"
                  type="text"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-white"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="shirt-size"
                  className="block text-sm/6 font-semibold text-white"
                >
                  T-Shirt-Größe
                </label>
                <select
                  id="shirt-size"
                  name="shirt-size"
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                >
                  <option>Bitte auswählen</option>
                  <option>128</option>
                  <option>140</option>
                  <option>152</option>
                  <option>164</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Erfahrung
                </label>
                <select
                  id="position"
                  name="position"
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                >
                  <option>Bitte auswählen</option>
                  <option>Anfänger</option>
                  <option>Fortgeschritten</option>
                  <option>Vereinsspieler</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Nachricht / gesundheitliche Hinweise
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex gap-x-3 text-sm/6 text-gray-300">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 size-4 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span>
                    Ich willige in die Verarbeitung meiner Daten gemäß der
                    Datenschutzerklärung ein.
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Anmeldung absenden
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
