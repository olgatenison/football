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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Layer 2 — мяч */}
      <div
        ref={ballRef}
        className="absolute will-change-transform top-50"
        style={{
          bottom: "5%",
          left: "50%",
          width: "530px",
          aspectRatio: "1",
          opacity: 0,
        }}
      >
        <Image
          src="/hero/ball.png"
          alt="Football"
          fill
          priority
          className="object-contain"
          style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.6))" }}
        />
      </div>

      {/* Layer 3 — руки */}
      <div
        ref={handsRef}
        className="absolute inset-0 will-change-transform "
        style={{
          opacity: 0,
          transformOrigin: "bottom center",
        }}
      >
        <Image
          src="/hero/hands.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>
      {/* Layer 4 — градиенты по краям */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: `
            linear-gradient(to right, black 0%, transparent 25%),
            linear-gradient(to left, black 0%, transparent 25%)
          `,
        }}
      />
      {/* Layer 4 — текст */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none ">
        {/* Заголовок дугой через SVG */}
        <svg
          viewBox="0 0 800 300"
          className="w-full max-w-3xl -mt-10"
          style={{ overflow: "visible" }}
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
