import { useRef } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export default function PitchDeck() {
    function Carousel() {

        const img1 = useRef<HTMLDivElement>(null)
        const img2 = useRef<HTMLDivElement>(null)
        const img3 = useRef<HTMLDivElement>(null)

        img1.current?.classList.add("group-hover:translate-x-full")

        return (
            <div className="h-4/6 w-[85%] bg-white relative group">
                <div className="h-1/2 w-full absolute bottom-10">
                    <button className="w-20 h-20 float-left"><AiOutlineArrowLeft className="h-20 w-20"/></button>
                    <button className="w-20 h-20 float-right"><AiOutlineArrowRight className="h-20 w-20"/></button>
                </div>

                <div className="w-full h-10 bottom-0 absolute flex flex-row justify-center space-x-10">
                    <span className="h-3 w-10 bg-slate-800"></span>
                    <span className="h-3 w-10 bg-slate-800"></span>
                    <span className="h-3 w-10 bg-slate-800"></span>
                </div>
                
                <div ref={img1} className="bg-red-900 h-full w-full translate-x-full absolute  group-hover:translate-x-full"></div>
                <div ref={img2} className="bg-blue-900 h-full w-full -translate-x-full absolute group-hover:translate-x-full"></div>
                <div ref={img3} className="bg-orange-900 h-full w-full absolute group-hover:translate-x-full"></div>
            </div>
        )
    } 
    return (
        <div className="bg-main-background h-[52.04rem] w-[118.96rem] flex flex-row">
            <div className="h-full w-3/5 flex justify-center items-center">
                <Carousel />
                {/* <div className="bg-white h-4/6 w-[85%]"></div> */}
            </div>
            <div className="h-full w-2/5 flex flex-col justify-center"> 
            <div>
                <h1 className="float-right text-white text-7xl mr-20">TEXT HERE</h1>
                <svg
                className="drop-shadow-arrowsvg"
                width="47.5rem"
                height="3rem"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                height="0.33333"
                width="520"
                y="20"
                x="250"
                stroke="#904E55"
                fill="#904E55"
                />
                <ellipse
                ry="5"
                rx="5"
                id="svg_4"
                cy="20"
                cx="246"
                stroke="#904E55"
                fill="#904E55"
                />
                </svg>
            </div>

            <ul className="ml-32 text-white space-y-1 text-2xl mb-36 list-disc">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>

            <div className="h-[8%] w-full flex flex-row justify-center">
                <div className="h-full w-9/12 bg-white mr-10"></div>
            </div>

            </div>
        </div>
    )
}