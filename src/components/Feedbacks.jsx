import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// Feedback Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 1)}
    whileHover={{
      scale: 1.08,
      rotate: 1,
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    }}
    className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl p-8 sm:p-10 rounded-3xl xs:w-[320px] w-full transition-all duration-500"
  >
    {/* Glow Accent */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-70" />

    <div className="relative z-10">
      <p className="text-white font-extrabold text-5xl leading-none">“</p>

      <p className="mt-4 text-white/90 tracking-wide text-[16px] sm:text-[18px] leading-relaxed italic">
        {testimonial}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gradient-to-r from-blue-400 to-purple-500"
          loading="lazy"
        />
        <div>
          <p className="text-white font-semibold text-[16px] sm:text-[17px]">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              @{name}
            </span>
          </p>
          <p className="mt-1 text-secondary text-[13px] sm:text-[14px]">
            {designation} • {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Feedbacks Section
const Feedbacks = () => {
  return (
    <section className="relative mt-16 sm:mt-20 bg-gradient-to-br from-black-100 to-black-200 rounded-[24px] overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-blue-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Section Header */}
      <div
        className={`relative z-10 bg-tertiary/90 backdrop-blur-md rounded-t-2xl ${styles.padding} min-h-[260px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-blue-300`}>
            What others say
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="mt-3 text-secondary text-[15px] sm:text-[16px] max-w-2xl">
            Honest feedback from clients, partners, and collaborators.
          </p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div
        className={`relative z-10 -mt-16 sm:-mt-20 pb-12 sm:pb-16 ${styles.paddingX} flex flex-wrap justify-center gap-8`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
