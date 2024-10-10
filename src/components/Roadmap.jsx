import React from "react";
import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Tagline } from "./ui/Tagline";
import { Gradient } from "./design/Roadmap";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import {
  buttonVariants,
  headingVariants,
} from "../constants/AnimationVariants";

// Animation variants for roadmap items
const roadmapVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: out of view
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Animate into view
};

export const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Heading
            tag="Ready to get started"
            title="What we're working on"
            className="md:text-center"
          />
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item, index) => {
            const status = item.status === "done" ? "Done" : "In Progress";

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible" // Trigger animation when in view
                viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% of the item is in view
                variants={roadmapVariants}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="Grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full"
                        width={630}
                        height={420}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <Gradient />
        </div>

        <motion.div
          className="flex justify-center mt-12 md:mt-15 xl:mt-20"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Button href="/roadmap">Our roadmap</Button>
        </motion.div>
      </div>
    </Section>
  );
};
