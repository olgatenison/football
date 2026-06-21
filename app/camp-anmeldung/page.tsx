import RegistrationForm from "../components/RegistrationForm";
import Link from "next/link";

export default function CampAnmeldungPage() {
  return (
    <main className=" bg-black">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-[#afd63f] hover:text-[#afd63f]"
        >
          ← Zur Startseite
        </Link>
      </div>

      <RegistrationForm />
    </main>
  );
}
