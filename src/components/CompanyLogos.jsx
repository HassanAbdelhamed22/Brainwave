import React from "react";
import { companyLogos } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { headingVariants, logoVariants } from "../constants/AnimationVariants";

const CompanyLogos = ({ className }) => {
  // Intersection observers
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: logoRef, inView: logosInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={className}>
      <motion.h5
        className="tagline mb-6 text-center text-n-1/50"
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        Helping people create beautiful content at
      </motion.h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            ref={logoRef}
            initial="hidden"
            animate={logosInView ? "visible" : "hidden"}
            variants={logoVariants}
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
