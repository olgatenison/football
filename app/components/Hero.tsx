"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const handsRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const ballRotation = useRef(0);
  const caught = useRef(false);

  // Финальные позиции — используем в анимации и параллаксе
  const HANDS_FINAL_Y = 90;
  const BALL_FINAL_Y = -70;

  useEffect(() => {
    const ball = ballRef.current;
    const hands = handsRef.current;
    if (!ball || !hands) return;

    ball.style.transition = "none";
    hands.style.transition = "none";

    ball.style.opacity = "0";
    ball.style.transform = `translateX(-50%) translateY(-400px) scale(0.3) rotate(-150deg)`;

    hands.style.opacity = "0";
    hands.style.transform = `translateY(220px) scale(0.7)`;
    hands.style.transformOrigin = "bottom center";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ball.style.transition =
          "transform 0.95s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.25s ease";
        ball.style.opacity = "1";
        ball.style.transform = `translateX(-50%) translateY(${BALL_FINAL_Y}px) scale(0.8) rotate(0deg)`;

        hands.style.transition =
          "transform 1.1s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.35s ease";
        hands.style.opacity = "1";
        hands.style.transform = `translateY(${HANDS_FINAL_Y}px)`;
      });
    });

    const t1 = setTimeout(() => {
      caught.current = true;
    }, 1200);

    return () => clearTimeout(t1);
  });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let rafId: number;

    const handleScroll = () => {
      if (!caught.current) return;
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
        }
        if (handsRef.current) {
          // от финальной позиции + небольшой параллакс
          handsRef.current.style.transform = `translateY(${HANDS_FINAL_Y + scrollY * 0.1}px)`;
        }
        if (ballRef.current) {
          ballRotation.current = scrollY * 0.4;
          ballRef.current.style.transform = `
            translateX(-50%)
            translateY(${BALL_FINAL_Y + scrollY * -0.05}px)
            scale(0.8)
            rotate(${ballRotation.current}deg)
          `;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  });

  return (
    <section
      className="relative w-full max-w-7xl mx-auto h-screen min-h-150 max-h-225"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Layer 1 — фон */}
      <div
        ref={bgRef}
        className="absolute will-change-transform"
        style={{ inset: "-15% 0" }}
      >
        <Image
          src="/hero/bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                In Form für&#39;s Leben
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                Jeder einzelne muss persönliche Hürden überwinden. Wie schnell
                wir ins Ziel kommen, spielt dabei keine große Rolle. Wichtig ist
                nur, jeden Tag alles zu geben. Stellst du dich der
                Herausforderung? Sei dabei!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  хз как нащвать кнопку
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <defs>
            <path id="arc" d="M 50,250 Q 400,0 750,250" />
          </defs>
          <text
            fill="white"
            fontWeight="bold"
            fontSize="40"
            letterSpacing="-1"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
          >
            <textPath href="#arc" startOffset="50%" textAnchor="middle">
              In Form für&apos;s Leben
            </textPath>
          </text>
        </svg>

        <div className="mt-16 pointer-events-auto">
          <a
            href="#"
            className="rounded-md bg-[#afd63f] px-7 py-3.5 text-sm font-semibold text-black shadow-lg hover:bg-[#273810] transition-colors duration-300 ease-out hover:text-white"
          >
            Jetzt mitmachen
          </a>
        </div>
        <p className="mt-40 text-white/90 text-base max-w-xl leading-relaxed drop-shadow">
          Jeder einzelne muss persönliche Hürden überwinden. Wie schnell wir ins
          Ziel kommen, spielt dabei keine große Rolle. Wichtig ist nur, jeden
          Tag alles zu geben. Stellst du dich der Herausforderung?
        </p>
      </div>
    </section>
  );
}
