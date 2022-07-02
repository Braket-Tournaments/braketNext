import { motion } from "framer-motion";

    export default function Features() {
        return(
            <div className="flex flex-col h-screen bg-inherit bg-zinc-900"> 

            {/* Title Bar */}
                    <div className="text text-5xl ml-6 mt-2 text-right text-white">FEATURES</div>
                        <svg
                        viewBox="0 0 560 100"
                        width="100%"
                        height="100px"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMaxYMin meet"
                        >
                        <rect
                        height="0.33333"
                        width="560"
                        y="20"
                        x="0"
                        stroke="#904E55"
                        fill="#904E55"
                        /> 
                        <ellipse
                        ry="5"
                        rx="5"
                        id="svg_4"
                        cy="20"
                        cx="0"
                        stroke="#904E55"
                        fill="#904E55"
                        /> 
                        </svg>

                    {/* Categories */}
                        <div className="h-full w-full flex flex-row mb-20 relative">
                                <div className="w-5%"></div>
                                <div className="relative w-80%/3 h-[65%]"> 
                                    <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full h-full absolute max-w-full max-h-full" src="/images/Organizations.png"/>
                                </div>
                                <div className="w-5%"></div>
                                    <div className="relative w-80%/3 h-[65%]"> 
                                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full h-full absolute max-w-full max-h-full" src="/images/Organizations.png"/>
                                    </div>
                                <div className="w-5%"></div>
                                    <div className="relative w-80%/3 h-[65%]"> 
                                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full h-full absolute max-w-full max-h-full" src="/images/Organizations.png"/>
                                    </div>
                                <div className="w-5%"></div>
                                    <div className="relative w-80%/3 h-[65%]"> 
                                        <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="w-full h-full absolute max-w-full max-h-full" src="/images/Organizations.png"/>
                                    </div>
                                <div className="w-5%"></div>

                        </div>
                </div>
        )  
    };
