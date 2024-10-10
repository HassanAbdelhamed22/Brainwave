import Section from "./ui/Section";
import Heading from "./ui/Heading";
import { benefits } from "../constants";
import Arrow from "./../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "./../assets/svg/ClipPath";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cardVariants, headingVariants } from "../constants/AnimationVariants";

const Benefits = () => {
  // Set up intersection observer
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="features">
      <div className="container relative z-2">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl md:text-center"
            title="Chat Smarter, Not Harder with Brainwave"
          />
        </motion.div>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              ref={cardRef}
              variants={cardVariants}
              initial="hidden"
              animate={cardInView ? "visible" : "hidden"}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-15 overflow-hidden">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
