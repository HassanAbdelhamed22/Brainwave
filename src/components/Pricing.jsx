import React from "react";
import Section from "./ui/Section";
import { smallSphere, stars } from "../assets";
import Heading from "./ui/Heading";
import { PricingList } from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { motion } from "framer-motion";
import {
  buttonVariants,
  cardVariants,
  headingVariants,
  imageVariants,
} from "../constants/AnimationVariants";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <motion.div
          className="hidden relative justify-center mb-[6.5rem] lg:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <motion.img
            src={smallSphere}
            alt="Small Sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
            <motion.img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <Heading
            title="Pay once, use forever"
            tag="Get started with Brainwave"
            className="md:text-center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative"
        >
          <PricingList />
          <LeftLine />
          <RightLine />
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider border-b hover:border-none duration-300"
          >
            See the full details
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Pricing;
