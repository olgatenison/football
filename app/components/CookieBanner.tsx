"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const COOKIE_CONSENT_KEY = "football-cookie-consent";
const COOKIE_EVENT = "cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(COOKIE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return "accepted";
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function getServerSnapshot() {
  return "accepted";
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const isVisible = consent === null;

  function setConsent(value: "accepted" | "declined") {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new Event(COOKIE_EVENT));
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl">
      <div className="rounded-lg  bg-black p-5 text-white shadow-2xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-2xl font-medium text-[#afd63f]"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              COOKIES
            </p>

            <h2 className="mt-2 text-2xl font-bold">Cookies & Datenschutz</h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-300">
              Diese Website verwendet Cookies, um die Benutzererfahrung zu
              verbessern. Weitere Informationen findest du in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-lime-400 hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setConsent("declined")}
              className="rounded-md bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#273810] transition-colors duration-300 ease-out hover:text-white border-white/80 border hover:border-black"
            >
              Ablehnen
            </button>

            <button
              onClick={() => setConsent("accepted")}
              className="rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg hover:bg-[#273810] transition-colors duration-300 ease-out hover:text-white"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
