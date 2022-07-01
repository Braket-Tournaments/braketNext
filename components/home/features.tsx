export default function Features() {
  return(
   <div className="flex flex-col h-screen bg-inherit bg-zinc-900"> 
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

            <div className="h-full w-full flex flex-row mb-20 relative">
                    <div className="w-5%"></div>
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Organization</text>
                        </svg>
                    <div className="w-5%"></div>
                        <svg>
                            <rect height="100%"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Participation</text>
                        </svg>
                    <div className="w-5%"></div>
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Presentation</text>
                        </svg>
                    <div className="w-5%"></div>
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Custom Integration</text>
                        </svg>
                    <div className="w-5%"></div>

            </div>
    </div>
  )  
};
