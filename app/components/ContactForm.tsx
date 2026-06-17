"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacy?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (formData.phone && !/^[0-9+\s()-]{6,}$/.test(formData.phone)) {
      newErrors.phone = "Bitte geben Sie eine gültige Telefonnummer ein.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Die Nachricht sollte mindestens 10 Zeichen haben.";
    }

    if (!formData.privacy) {
      newErrors.privacy = "Bitte akzeptieren Sie die Datenschutzerklärung.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess(false);

    if (!validate()) return;

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden");
      }

      setSuccess(true);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      console.error(error);
      alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="kontakt" className="relative isolate bg-black px-6  lg:px-8">
      {/* <div className="mx-auto max-w-2xl text-center">
        <p
          className="font-medium text-4xl text-[#afd63f]"
          style={{ fontFamily: "'Indie Flower', cursive" }}
        >
          Kontakt
        </p>

        <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white font-display">
          Schreiben Sie uns
        </h2>

        <p className="max-w-lg mx-auto text-base/8 font-light text-white mt-6">
          Wir melden uns schnellstmöglich mit passenden Informationen bei Ihnen.
        </p>
      </div> */}

      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm text-white">
              Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#afd63f]"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm text-white">
              Unternehmen
            </label>

            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#afd63f]"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm text-white">
              E-Mail *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#afd63f]"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm text-white">
              Telefon
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+43 664 391 93 74"
              className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#afd63f]"
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm text-white">
              Nachricht *
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#afd63f]"
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <div className="flex gap-x-4">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 size-4"
              />

              <label htmlFor="privacy" className="text-sm/6 text-gray-400">
                Ich willige in die Verarbeitung meiner Daten gemäß der{" "}
                <a
                  href="/datenschutz"
                  className="font-semibold text-[#afd63f] hover:text-[#273810]"
                >
                  Datenschutzerklärung
                </a>{" "}
                ein.
              </label>
            </div>

            {errors.privacy && (
              <p className="mt-2 text-sm text-red-400">{errors.privacy}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={isSending}
            className="rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg transition-colors duration-300 ease-out hover:bg-[#273810] hover:text-white w-full"
          >
            {isSending ? "Wird gesendet..." : "Absenden"}
          </button>
        </div>

        {success && (
          <p className="mt-6 text-center text-sm/6 text-[#afd63f]">
            Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
          </p>
        )}
      </form>
    </section>
  );
}
