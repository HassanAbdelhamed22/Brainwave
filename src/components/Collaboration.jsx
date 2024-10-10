import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./ui/Button";
import Section from "./ui/Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  buttonVariants,
  headingVariants,
  itemVariants,
} from "../constants/AnimationVariants";

const Collaboration = () => {
  // Intersection observers
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section crosses>
      <div className="container lg:flex">
        <motion.div
          className="max-w-[25rem]"
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <motion.li
                key={item.id}
                className="mb-3 py-3"
                initial="hidden"
                animate={headingInView ? "visible" : "hidden"}
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check icon" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div
            ref={buttonRef}
            initial="hidden"
            animate={buttonInView ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            <Button>Try it now</Button>
          </motion.div>
        </motion.div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4 lg:mt-2">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="Brainwave Symbol"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={item.icon}
                      width={item.width}
                      height={item.height}
                      alt={item.title}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
