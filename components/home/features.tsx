import styles from "../../styles/Home.module.css";

export default function Features() {
  return(
   <div className="flex flex-col h-screen bg-inherit bg-zinc-900"> 
        <div className="text text-5xl ml-6 mt-2 text-right text-white">FEATURES</div>
            <svg
            className={styles.arrowSVG}
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
        <svg>
            <g>
                <rect 
                className="hover:animate-spin"
                x="calc(((100%/6) * 0) + 100)"
                y="20"
                height="300"
                width="300"
                fill="#288BA8"
                />
                <text x="1" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
            </g>
        </svg>
    </div>
  )  
};
