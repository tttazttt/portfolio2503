import { easeIn } from "framer-motion/dom";
import bg from "../img/bg.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Home"
      className="absolute w-[100%] h-screen grid place-items-center"
    >
      <video
        src={bg}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
      ></video>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{
          ease: easeIn,
          duration: 1,
          delay: 0.3,
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] 
      bg-[#624e79] text-[16vw] text-center leading-[100vh]
       font-[Impact] mix-blend-screen font-[Press Start 2P]"
      >
        My Portfolio
      </motion.h1>
    </section>
  );
};

export default Hero;
