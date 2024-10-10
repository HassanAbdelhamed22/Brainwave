import { motion } from "framer-motion";
import { curve, heroBackground, robot } from "../assets";
import Button from "./ui/Button";
import Section from "./ui/Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./ui/Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import {
  buttonVariants,
  headingVariants,
  imageVariants,
} from "../constants/AnimationVariants";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <motion.div
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="h1 mb-6" variants={headingVariants}>
            Explore the Possibilities of AI Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                alt="Curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </motion.h1>
          <motion.p
            className="body-1 max-w-3xl mx-auto text-n-2 lg:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Button href="/pricing" white className="mt-5 md:mt-0">
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 "
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative z-20 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] z-20" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] z-20">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Generating className="absolute left-16 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} alt={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="Hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </motion.div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
