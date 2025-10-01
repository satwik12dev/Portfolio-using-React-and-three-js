import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ReactTyped } from "react-typed"; // ✅ use named import

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Left accent + Intro text */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6`}
      >
        {/* Accent line */}
        <div className="flex flex-col justify-center items-center mt-5 relative">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_20px_#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient animate-pulse" />
        </div>

        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#15B3EC] via-[#6E54EF] to-[#E054FF] bg-clip-text text-transparent animate-gradient-x">
                Satwik Saxena
              </span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className={`${styles.heroSubText} mt-3 text-white-100 leading-relaxed max-w-lg`}
          >
            <ReactTyped
              strings={[
                'I craft <span class="text-cyan-300">3D visuals</span>',
                'I build <span class="text-purple-300">interactive interfaces</span>',
                'I develop <span class="text-green-300">web applications</span>',
                'I design <span class="text-pink-300">CLI tools</span>',
                'A <span class="text-cyan-300">DSA</span> Learner',
              ]}
              typeSpeed={100}
              backSpeed={70}
              backDelay={1000}
              loop
              smartBackspace
              showCursor={true}
              cursorChar="|"
            />
          </motion.p>
        </div>
      </div>

      {/* Background 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-[38px] h-[68px] rounded-3xl border-4 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-[2px] shadow-[0_0_20px_rgba(56,189,248,0.7)]"
          >
            <div className="w-full h-full rounded-2xl bg-black flex justify-center items-start">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-1 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
              />
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
