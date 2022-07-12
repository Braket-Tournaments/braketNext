import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import DecorLine from "../items/decor-line";

export default function PitchDeck() {
  /* function Carousel() {
    const img1 = useRef<HTMLDivElement>(null);
    const img2 = useRef<HTMLDivElement>(null);
    const img3 = useRef<HTMLDivElement>(null);

    img1.current?.classList.add("group-hover:translate-x-full");

    return (
      <div className="h-4/6 w-[50%] bg-white relative group">
        <div className="h-1/2 w-full absolute bottom-10">
          <button className="w-20 h-20 float-left">
            <AiOutlineArrowLeft className="h-20 w-20" />
          </button>
          <button className="w-20 h-20 float-right">
            <AiOutlineArrowRight className="h-20 w-20" />
          </button>
        </div>

        <div className="w-full h-10 bottom-0 absolute flex flex-row justify-center space-x-10">
          <span className="h-3 w-10 bg-slate-800"></span>
          <span className="h-3 w-10 bg-slate-800"></span>
          <span className="h-3 w-10 bg-slate-800"></span>
        </div>

        <div
          ref={img1}
          className="bg-red-900 h-full w-full translate-x-full absolute  group-hover:translate-x-full"
        ></div>
        <div
          ref={img2}
          className="bg-blue-900 h-full w-full -translate-x-full absolute group-hover:translate-x-full"
        ></div>
        <div
          ref={img3}
          className="bg-orange-900 h-full w-full absolute group-hover:translate-x-full"
        ></div>
      </div>
    );
  } */
  return (
    <div className="bg-main-background h-[calc(100vh-var(--navbar-height))] w-full flex items-center justify-between">
      <div className="bg-white w-[var(--home-carousel-width)] h-[var(--home-carousel-height)] ml-[calc(1.5rem+6vw)]"></div>
      <div className="bg-pink-400 w-[calc(var(--home-carousel-width)*0.85)] h-[var(--home-carousel-height)] flex flex-col justify-between">
        <div className="inline-block">
          <h1 className="text-white text-[3rem]">HEADER</h1>
          <div className="flex drop-shadow-arrowsvg">
            <DecorLine className="w-0 flex-grow-[1]" width={51.5} />
          </div>
        </div>

        <ul className="ml-32 text-white space-y-1 text-[2em] mb-36 list-disc">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>

        <div className="h-[8%] w-full flex flex-row justify-center">
          <div className="h-full w-9/12 bg-white mr-10"></div>
        </div>
      </div>
    </div>
  );
}
