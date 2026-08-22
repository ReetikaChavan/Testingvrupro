"use client";

import { useState } from "react";
import { Cake } from "./components/Cake";
import { Confetti } from "./components/Confetti";
import { DecorImage } from "./components/Doodles";
import batmanImg from "../images/batman.png";
import webImg from "../images/web.png";
import discoballImg from "../images/discoball.png";
import heartsImg from "../images/hearts.png";
import doodlestarImg from "../images/doodlestar.png";
import bluestarImg from "../images/bluestar.png";

export default function Home() {
  const [blown, setBlown] = useState(false);

  return (
    <div className="birthday-bg relative h-screen w-full overflow-hidden">
      {/* corner doodles — fixed to the viewport, not the content column, and
          sized with clamp() so they read clearly on phones and scale up on
          large screens instead of staying pinned to a tiny fixed size */}
      <DecorImage
        src={bluestarImg}
        className="fixed left-[3%] top-[3%] z-10 animate-twinkle"
        style={{ width: "clamp(3rem, 4.5vw, 5rem)", height: "clamp(3rem, 4.5vw, 5rem)" }}
      />
      <DecorImage
        src={webImg}
        className="fixed -right-12 -top-12 z-10 opacity-95"
        style={{ width: "clamp(9rem, 15vw, 17rem)", height: "clamp(9rem, 15vw, 17rem)" }}
      />
      <DecorImage
        src={discoballImg}
        className="fixed -bottom-8 -right-10 z-10"
        style={{ width: "clamp(12rem, 18vw, 21rem)", height: "clamp(12rem, 18vw, 21rem)" }}
      />
      <DecorImage
        src={batmanImg}
        className="fixed bottom-0 left-0 z-10"
        style={{ width: "clamp(7.5rem, 12vw, 11rem)", height: "clamp(13.5rem, 21.6vw, 19.8rem)" }}
      />

      {/* extra doodles to fill the wider canvas on large screens */}
      <DecorImage
        src={heartsImg}
        className="fixed left-[6%] top-1/2 z-10 hidden opacity-80 lg:block"
        style={{ width: "clamp(3rem, 5vw, 5rem)", height: "clamp(3.7rem, 6.2vw, 6.2rem)" }}
      />
      <DecorImage
        src={doodlestarImg}
        className="fixed right-[8%] top-[20%] z-10 hidden animate-twinkle opacity-80 lg:block"
        style={{ width: "clamp(2.5rem, 4vw, 4rem)", height: "clamp(3rem, 4.8vw, 4.8rem)" }}
      />
      <DecorImage
        src={bluestarImg}
        className="fixed left-[10%] bottom-[12%] z-10 hidden animate-twinkle opacity-70 lg:block"
        style={{ width: "clamp(2rem, 2.8vw, 3.5rem)", height: "clamp(2rem, 2.8vw, 3.5rem)" }}
      />

      {/* content column: heading pinned to the top, button centered in the
          middle, cake anchored to the bottom */}
      <div className="relative z-20 mx-auto flex h-screen w-full max-w-xl flex-col items-center px-6 pt-8 pb-2 lg:max-w-2xl">
        <div className="flex flex-col items-center pt-6">
          <h1
            className="text-center font-[family-name:var(--font-script)] leading-tight text-[color:var(--color-navy)]"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
          >
            Happy Birthday
          </h1>

          <div className="relative mt-1 flex items-center justify-center">
            <DecorImage src={doodlestarImg} className="absolute -left-16 top-1 h-10 w-10 animate-twinkle sm:-left-20" />
            <p className="text-sm font-bold tracking-[0.25em] text-[color:var(--color-navy)]">
              MAKE A WISH!!
            </p>
            <DecorImage src={doodlestarImg} className="absolute -right-16 top-1 h-10 w-10 animate-twinkle sm:-right-20" />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <button
            type="button"
            onClick={() => setBlown(true)}
            disabled={blown}
            className="relative rounded-full bg-[#eef6fb] px-7 py-3 disabled:opacity-70"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[color:var(--color-navy)]" />
            <span className="pointer-events-none absolute inset-[4px] rounded-full border border-dashed border-[color:var(--color-navy)]" />
            <span className="relative flex items-center gap-2 text-sm font-extrabold tracking-widest text-[color:var(--color-navy)]">
              <span aria-hidden>≈</span>
              {blown ? "WISH SENT!" : "BLOW THE CANDLE"}
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          {blown && (
            <p className="animate-wish-in text-center font-[family-name:var(--font-script)] text-2xl text-[color:var(--color-navy)]">
              May it all come true 🎉
            </p>
          )}

          <div className="relative w-full">
            <DecorImage src={heartsImg} className="absolute left-[6%] top-[8%] h-20 w-16 opacity-90 sm:left-[10%]" />
            <DecorImage src={heartsImg} className="absolute right-[6%] top-[4%] h-16 w-14 -scale-x-100 opacity-90 sm:right-[10%]" />

            <div className="flex items-end justify-center">
              <Cake />
            </div>
          </div>

          {blown && (
            <button
              type="button"
              onClick={() => setBlown(false)}
              className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-navy)]/70 underline underline-offset-2"
            >
              Make another wish
            </button>
          )}
        </div>
      </div>

      <Confetti active={blown} />
    </div>
  );
}
