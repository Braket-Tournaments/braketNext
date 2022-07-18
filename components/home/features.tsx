import { motion } from "framer-motion"

const parent = {
  onScreen: {
    transition: {
      staggerChildren: 1.4,
      delayChildren: 1,
    },
  },
}

const transitionLeft = {
  offScreen: {
    x: -500,
  },
  onScreen: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

const transitionRight = {
  offScreen: {
    x: 500,
  },
  onScreen: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
}

const transitionMid = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export default function Features() {
  return (
    <div className="flex flex-col h-screen bg-inherit bg-zinc-900">
      {/* Title Bar */}
      <div className="text text-5xl ml-6 mt-r5 text-right mr-r5 text-white">
        FEATURES
      </div>
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
      <motion.div
        variants={parent}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true, amount: 0.2 }}
        className="h-full w-full flex flex-row mb-20 relative"
      >
        <div className="w-5%"></div>
        <div className="relative w-80%/3 h-[65%]">
          {/* <motion.img initial={{ opacity: 0 }} whileHover={{ opacity: 1, transition: { duration: 1.2}}} className="w-full h-full absolute max-w-full max-h-full x" src="/images/brandon.png"/> */}
          <motion.img
            variants={transitionLeft}
            whileHover={{
              rotateY: 170,
              transition: { duration: 1.2 },
              opacity: [1, 1, 0],
            }}
            className="w-full h-full absolute max-w-full max-h-full x"
            src="/images/Organizations.png"
          />
        </div>
        <div className="w-5%"></div>
        <div className="relative w-80%/3 h-[65%]">
          <motion.img
            variants={transitionMid}
            whileHover={{
              rotateY: 170,
              transition: { duration: 1.2 },
              opacity: [1, 1, 0],
            }}
            className="w-full h-full absolute max-w-full max-h-full x"
            src="/images/Organizations.png"
          />
        </div>
        <div className="w-5%"></div>
        <div className="relative w-80%/3 h-[65%]">
          <motion.img
            variants={transitionMid}
            whileHover={{
              rotateY: 170,
              transition: { duration: 1.2 },
              opacity: [1, 1, 0],
            }}
            className="w-full h-full absolute max-w-full max-h-full x"
            src="/images/Organizations.png"
          />
        </div>
        <div className="w-5%"></div>
        <div className="relative w-80%/3 h-[65%]">
          <motion.img
            variants={transitionRight}
            whileHover={{
              rotateY: 170,
              transition: { duration: 1.2 },
              opacity: [1, 1, 0],
            }}
            className="w-full h-full absolute max-w-full max-h-full x"
            src="/images/Organizations.png"
          />
        </div>
        <div className="w-5%"></div>
      </motion.div>
    </div>
  )
}
