"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  parentLastName: string;
  parentFirstName: string;
  parentEmail: string;
  parentPhone: string;

  childLastName: string;
  childFirstName: string;
  age: string;
  emergencyPhone: string;

  notes: string;
  agb: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  parentLastName: "",
  parentFirstName: "",
  parentEmail: "",
  parentPhone: "",

  childLastName: "",
  childFirstName: "",
  age: "",
  emergencyPhone: "",

  notes: "",
  agb: false,
};

const primaryButton =
  "rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg hover:bg-[#273810] transition-colors duration-300 ease-out hover:text-white w-full";

const secondaryButton =
  "w-full rounded-md border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10";

const inputStyle =
  "w-full rounded-md bg-white/5 px-3.5 py-3 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#afd63f]";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitError(false);

    if (type === "checkbox") {
      const input = e.target as HTMLInputElement;

      setFormData((prev) => ({
        ...prev,
        [name]: input.checked,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function setAge(age: string) {
    setFormData((prev) => ({
      ...prev,
      age,
    }));

    setErrors((prev) => ({
      ...prev,
      age: "",
    }));

    setSubmitError(false);
  }

  function validateStep(currentStep: number) {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      if (formData.parentLastName.trim().length < 2) {
        newErrors.parentLastName = "Bitte geben Sie den Nachnamen ein.";
      }

      if (formData.parentFirstName.trim().length < 2) {
        newErrors.parentFirstName = "Bitte geben Sie den Vornamen ein.";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
        newErrors.parentEmail =
          "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      }

      if (!/^[0-9+\s()-]{6,}$/.test(formData.parentPhone)) {
        newErrors.parentPhone =
          "Bitte geben Sie eine gültige Telefonnummer ein.";
      }
    }

    if (currentStep === 2) {
      const age = Number(formData.age);

      if (formData.childLastName.trim().length < 2) {
        newErrors.childLastName =
          "Bitte geben Sie den Nachnamen des Kindes ein.";
      }

      if (formData.childFirstName.trim().length < 2) {
        newErrors.childFirstName =
          "Bitte geben Sie den Vornamen des Kindes ein.";
      }

      if (!age || age < 8 || age > 17) {
        newErrors.age = "Bitte wählen Sie ein Alter zwischen 8 und 17 Jahren.";
      }

      if (!/^[0-9+\s()-]{6,}$/.test(formData.emergencyPhone)) {
        newErrors.emergencyPhone =
          "Bitte geben Sie eine gültige Notfallnummer ein.";
      }
    }

    if (currentStep === 3 && !formData.agb) {
      newErrors.agb = "Bitte akzeptieren Sie die AGB.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function nextStep() {
    if (!validateStep(step)) return;
    setSubmitError(false);
    setStep((prev) => Math.min(prev + 1, 3));
  }

  function prevStep() {
    setSubmitError(false);
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess(false);
    setSubmitError(false);

    if (!validateStep(3)) return;

    try {
      setIsSending(true);

      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          camp: "Tormanntrainingscamp 13.–14. Juni 2026",
          location: "Sportplatz USV Bullendorf",
          time: "jeweils 9:00–12:30 Uhr",
        }),
      });

      if (!response.ok) {
        setSubmitError(true);
        return;
      }

      setSuccess(true);
      setFormData(initialFormData);
      setErrors({});
      setStep(3);
    } catch (error) {
      console.error(error);
      setSubmitError(true);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="anmeldung" className="relative bg-black px-6 py-20 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur md:p-10"
      >
        <StepIndicator step={step} />

        {step === 1 && (
          <div className="space-y-6">
            <p className="text-center text-lg text-white/90">
              Kontaktdaten der Eltern / Erziehungsberechtigten
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Nachname Elternteil *"
                name="parentLastName"
                value={formData.parentLastName}
                onChange={handleChange}
                error={errors.parentLastName}
              />

              <Input
                label="Vorname Elternteil *"
                name="parentFirstName"
                value={formData.parentFirstName}
                onChange={handleChange}
                error={errors.parentFirstName}
              />

              <Input
                label="E-Mail *"
                name="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={handleChange}
                error={errors.parentEmail}
              />

              <Input
                label="Telefon *"
                name="parentPhone"
                type="tel"
                value={formData.parentPhone}
                onChange={handleChange}
                error={errors.parentPhone}
              />
            </div>

            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className={`${primaryButton} max-w-65`}
              >
                weiter
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <p className="text-center text-lg text-white/90">
              Daten des Kindes / Teilnehmers
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Nachname Kind *"
                name="childLastName"
                value={formData.childLastName}
                onChange={handleChange}
                error={errors.childLastName}
              />

              <Input
                label="Vorname Kind *"
                name="childFirstName"
                value={formData.childFirstName}
                onChange={handleChange}
                error={errors.childFirstName}
              />

              <AgeSelect
                value={formData.age}
                setAge={setAge}
                error={errors.age}
              />

              <Input
                label="Notfall-Nr. *"
                name="emergencyPhone"
                type="tel"
                value={formData.emergencyPhone}
                onChange={handleChange}
                error={errors.emergencyPhone}
              />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={prevStep}
                className={secondaryButton}
              >
                zurück
              </button>

              <button
                type="button"
                onClick={nextStep}
                className={primaryButton}
              >
                weiter
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#afd63f]/50 bg-[#afd63f]/10 p-5 text-center text-sm text-white md:text-base">
              Die Anmeldung ist verbindlich. Die Teilnahmeplätze sind begrenzt.
            </div>

            <label className="block">
              <span className="mb-2 block text-sm">Anmerkungen / Wünsche</span>

              <textarea
                name="notes"
                rows={5}
                value={formData.notes}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Anmerkungen / Wünsche"
              />
            </label>

            <div>
              <div className="flex gap-3">
                <input
                  id="agb"
                  name="agb"
                  type="checkbox"
                  checked={formData.agb}
                  onChange={handleChange}
                  className="mt-1 size-4 accent-[#afd63f]"
                />

                <label htmlFor="agb" className="text-sm text-white/80">
                  Ich habe die{" "}
                  <a href="/agb" className="font-semibold text-[#afd63f]">
                    AGB
                  </a>{" "}
                  gelesen und akzeptiere diese.
                </label>
              </div>

              {errors.agb && (
                <p className="mt-2 text-sm text-red-400">{errors.agb}</p>
              )}
            </div>

            {success && (
              <div className="rounded-xl border border-[#afd63f] bg-[#afd63f]/10 p-5 text-center">
                <p className="font-bold text-[#afd63f]">
                  Anmeldung erfolgreich gesendet!
                </p>

                <p className="mt-2 text-sm text-white/80">
                  Vielen Dank für Ihre Anmeldung zum Tormanntrainingscamp. Wir
                  melden uns in Kürze bei Ihnen.
                </p>
              </div>
            )}

            {submitError && (
              <div className="rounded-xl border border-red-500 bg-red-500/10 p-5 text-center">
                <p className="font-bold text-red-400">Fehler beim Senden</p>

                <p className="mt-2 text-sm text-white/80">
                  Die Anmeldung konnte nicht gesendet werden. Bitte versuchen
                  Sie es später erneut.
                </p>
              </div>
            )}

            {!success && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className={secondaryButton}
                >
                  zurück
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className={primaryButton}
                >
                  {isSending ? "Wird gesendet..." : "Anmelden"}
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </section>
  );
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="mb-12 flex items-center justify-between">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-1 items-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold transition-all duration-300 ${
              step >= item
                ? "bg-[#afd63f] text-black shadow-lg"
                : "border border-white/20 bg-white/5 text-white/60"
            }`}
          >
            {item}
          </div>

          {item < 3 && (
            <div
              className={`mx-4 h-0.5 flex-1 transition-all duration-300 ${
                step > item ? "bg-[#afd63f]" : "bg-white/15"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm">{label}</span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={inputStyle}
      />

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </label>
  );
}

function AgeSelect({
  value,
  setAge,
  error,
}: {
  value: string;
  setAge: (age: string) => void;
  error?: string;
}) {
  return (
    <div>
      <span className="mb-2 block text-sm">Alter *</span>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 10 }, (_, index) => String(index + 8)).map(
          (age) => {
            const isSelected = value === age;

            return (
              <button
                key={age}
                type="button"
                onClick={() => setAge(age)}
                className={`rounded-md border px-3 py-2 text-sm font-semibold transition focus:outline-none ${
                  isSelected
                    ? "border-[#afd63f] bg-[#afd63f] text-black"
                    : "border-white/15 bg-white/5 text-white hover:border-[#afd63f] hover:bg-[#afd63f]/15"
                }`}
              >
                {age}
              </button>
            );
          },
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}
