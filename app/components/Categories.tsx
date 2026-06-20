"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  UserIcon,
  UsersIcon,
  CalendarDaysIcon,
  FaceSmileIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const offers = [
  {
    name: "Einzeltraining",
    description: "Individuelles Training mit persönlichem Fokus.",
    href: "#",
    imageSrc: "/categories/1.jpg",
    icon: UserIcon,
  },
  {
    name: "Gruppentraining",
    description: "Training in kleinen, leistungsgerechten Gruppen.",
    href: "#",
    imageSrc: "/categories/2.png",
    icon: UsersIcon,
  },
  {
    name: "Tagescamps",
    description: "Intensive Trainingstage für gezielte Entwicklung.",
    href: "#",
    imageSrc: "/categories/3.png",
    icon: CalendarDaysIcon,
  },
  {
    name: "Training für Kinder",
    description: "Altersgerechtes Training mit Spaß und Motivation.",
    href: "#",
    imageSrc: "/categories/4.png",
    icon: FaceSmileIcon,
  },
  {
    name: "Jugendliche und Erwachsene",
    description: "Training für verschiedene Alters- und Leistungsstufen.",
    href: "#",
    imageSrc: "/categories/5.png",
    icon: AcademicCapIcon,
  },
  {
    name: "Individuelle Trainingspakete für Vereine",
    description: "Maßgeschneiderte Trainingslösungen für Vereine.",
    href: "#",
    imageSrc: "/categories/6.png",
    icon: BuildingOfficeIcon,
  },
];

export default function Categories() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const moved = useRef(false);

  function handleMouseDown(event: MouseEvent<HTMLDivElement>) {
    if (!sliderRef.current) return;

    isDown.current = true;
    moved.current = false;
    startX.current = event.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  }

  function handleMouseLeave() {
    isDown.current = false;
  }

  function handleMouseUp() {
    isDown.current = false;
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!isDown.current || !sliderRef.current) return;

    event.preventDefault();

    const x = event.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;

    if (Math.abs(walk) > 5) {
      moved.current = true;
    }

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function handleCardClick(event: MouseEvent<HTMLAnchorElement>) {
    if (moved.current) {
      event.preventDefault();
    }
  }

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="category-scroll cursor-grab overflow-x-auto pb-5 active:cursor-grabbing"
      >
        <div className="flex gap-4">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <a
                key={offer.name}
                href={offer.href}
                onClick={handleCardClick}
                draggable={false}
                className="group relative flex h-[400px] w-[82vw] shrink-0 select-none flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:border-white/25 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afd63f] sm:w-[46%] lg:w-[31%] xl:w-[calc((100%-48px)/4)]"
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src={offer.imageSrc}
                    alt={offer.name}
                    draggable={false}
                    width={600}
                    height={800}
                    className="pointer-events-none h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-50 group-focus-visible:scale-[1.03] group-focus-visible:brightness-50"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0 transition duration-300 group-hover:from-black/95 group-hover:via-black/75 group-hover:to-black/20 group-focus-visible:from-black/95 group-focus-visible:via-black/75 group-focus-visible:to-black/20" />
                </div>

                <div className="relative z-10 mt-auto p-5">
                  <p className="mb-4 translate-y-3 text-sm leading-6 text-gray-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {offer.description}
                  </p>

                  <h4 className="text-lg font-semibold leading-tight text-white">
                    <span className="block w-full bg-[#afd63f] px-5 py-3 text-center font-semibold text-black">
                      {offer.name}
                    </span>
                  </h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
