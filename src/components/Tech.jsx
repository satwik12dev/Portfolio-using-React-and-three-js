import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // ✅ make sure styles file exists
import { textVariant } from "../utils/motion"; // ✅ motion helper

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center w-28 h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-center text-sm mt-2 font-medium text-white">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
