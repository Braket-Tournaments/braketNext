import { RiTwitterLine, RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/Bs';

export default function Footer() {

    return (
        <div className="bg-main-red h-96 w-[118.96rem] flex flex-row">
            <div className="h-full w-2/5">
            <div className="flex flex-row">
                <div className="bg-black rounded-full w-24 h-24 mt-5 ml-5"></div>
                <div className="flex flex-col justify-center ml-5 mt-10">
                    <h1 className="text-5xl tracking-wider">BRAKET</h1>
                    <p className="text-lg ml-5">@2022 FTW Corp.</p>
                </div>
            </div>
            <svg
                className="drop-shadow-arrowsvg"
                width="560"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                id="svg_3"
                height="0.33333"
                width="350"
                y="20"
                x="0"
                stroke="#252627"
                fill="#252627"
                />
                <ellipse
                ry="5"
                rx="5"
                id="svg_4"
                cy="20"
                cx="355"
                stroke="#252627"
                fill="#252627"
                />
            </svg>
                <div className="flex flex-row">
                    <a href="" className="flex justify-center ml-[8.75rem] rounded-full bg-white w-12 h-12 shadow-md">
                        <RiLinkedinFill className="w-8 h-8 mt-2 fill-main-red"/>
                    </a>
                    <a href="" className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md">
                        <RiTwitterLine className="w-8 h-8 mt-2 fill-main-red"/>
                    </a>
                    <a href="" className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md">
                        <AiOutlineGithub className="w-8 h-8 mt-2 fill-main-red"/>
                    </a>
                    <a href="" className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md">
                        <BsDiscord className="w-8 h-8 mt-[.65rem] fill-main-red"/>
                    </a>
                </div>
            </div>
            <div className="h-full w-3/5 flex flex-col text-white">
                <div className="flex flex-row w-full h-4/6 space-x-64">
                    <div>
                        <h1 className="mt-16 text-xl tracking-wider">Resources</h1>
                        <hr className="w-32 mt-1 mb-3"/>
                        <div className="flex flex-col space-y-1">
                            <a href="">Developer</a>
                            <a href="">Support</a>
                            <a href="">About</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-16 text-xl tracking-wider">Terms & Policies</h1>
                        <hr className="w-48 mt-1 mb-3"/>
                        <div className="flex flex-col space-y-1">
                            <a href="">Terms of use</a>
                            <a href="">Privacy policy</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-16 text-xl tracking-wider">Contact Us</h1>
                        <hr className="w-36 mt-1 mb-3"/>
                        <div className="flex flex-col space-y-1">
                            <a href="">Business Inquiries</a>
                            <a href="">Contact</a>
                            <a href="">Partners</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-2/6">
                    <h1 className="text-xl tracking-wider">Choose your language</h1>
                    <hr className="w-60 mt-1"/>
                    <div className="flex flex-row space-x-14 mt-5">
                        <a href="">English</a>
                        <a href="">French</a>
                        <a href="">Chinese</a>
                        <a href="">Spanish</a>
                        <a href="">Russian</a>
                        <a href="">Korean</a>
                    </div>
                </div>
            </div>
        </div>
    )
}