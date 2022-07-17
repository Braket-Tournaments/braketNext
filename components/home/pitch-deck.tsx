import React, { useState, useRef, useEffect } from "react";
import DecorLine from "../items/decor-line";

export default function PitchDeck() {
  function Carousel() {
    const [imgIndex, setImgIndex] = useState<number>(0);
    const imgIndexRef = useRef(imgIndex);
    imgIndexRef.current = imgIndex;

    const [timerID, setTimerID] = useState<null | ReturnType<
      typeof setTimeout
    >>(null);
    const timerIDRef = useRef(timerID);
    timerIDRef.current = timerID;

    const images: string[] = [
      "/images/carousel_img_1.jpg",
      "/images/carousel_img_2.jpg",
      "/images/carousel_img_3.jpg",
    ];

    function setNextSlideTimer() {
      clearTimeout(Number(timerIDRef.current));

      const id: null | ReturnType<typeof setTimeout> = setTimeout(() => {
        setImgIndex(
          imgIndexRef.current + 1 === images.length
            ? 0
            : imgIndexRef.current + 1
        );

        clearTimeout(Number(timerIDRef.current));

        setNextSlideTimer();
      }, 10000);

      setTimerID(id);
    }

    // The empty array in the second parameter makes useEffect() only run once.
    useEffect(() => {
      setNextSlideTimer();
    }, []);

    return (
      <div className="relative w-[var(--home-carousel-width)] h-[var(--home-carousel-height)] ml-[calc(1.5rem+6vw)] flex justify-center align-middle">
        <div className="relative w-full h-full">
          {images.map((url, i) => {
            return (
              <img
                src={url}
                className={`absolute transition-opacity duration-[500ms] object-cover object-center ${
                  i === imgIndex
                    ? "z-[1] delay-[0ms]"
                    : "opacity-0 delay-[500ms]"
                }`}
                alt={`Carousel Image ${i + 1}`}
              />
            );
          })}
        </div>
        <div className="absolute w-full top-[calc(100%+1.5rem)] flex align-middle justify-center gap-x-[2rem]">
          {images.map((url, i) => {
            return (
              <div
                className={`w-[1rem] h-[1rem] rounded-full transition-opacity duration-[500ms] ${
                  i === imgIndex ? "bg-white/75" : "bg-white/25 cursor-pointer"
                }`}
                onClick={() => {
                  setImgIndex(i);
                  setNextSlideTimer();
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-var(--navbar-height))] bg-main-background flex items-center justify-between">
      <Carousel />
      <div className="w-[calc(var(--home-carousel-width)*0.85)] h-[var(--home-carousel-height)] flex flex-col justify-center gap-y-[3rem]">
        <div className="flex flex-col">
          <h1 className="text-white text-[3.5rem] self-center">HEADER</h1>
          <div className="w-[calc(80%)] drop-shadow-arrowsvg flex self-end">
            <DecorLine className="w-0 flex-grow-[1]" width={100} />
          </div>
        </div>

        <div className="w-full pl-[5rem] pr-[10rem] text-[2rem] text-white">
          <p>
            Lorem Ipsum is the single greatest threat. We are not - we are not
            keeping up with other websites. Lorem Ipsum best not make any more
            threats to your website. It will be met with fire and fury like the
            world has never seen. Does everybody know that pig named Lorem
            Ipsum?
          </p>
        </div>

        <div className="w-full flex flex-row justify-center">
          <button className="px-[6rem] py-[1rem] rounded-[2rem] text-[2.8rem] bg-sign-up-button">
            CREATE BRAKET
          </button>
        </div>
      </div>
    </div>
  );
}
