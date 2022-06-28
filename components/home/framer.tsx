import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const MyComponent = ({ isVisible }: {isVisible: boolean}) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        }  else {
            control.start("hidden");
          }
      }, [control, inView]);

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: {duration: 0.5} },
        hidden: { opacity: 0, scale: 0 },
      }
    return (
        <motion.div
            ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="w-10 h-10 bg-slate-900"
        />
      );
    }