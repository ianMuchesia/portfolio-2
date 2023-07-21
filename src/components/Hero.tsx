import { heroImg } from "../assets";
import Typewriter from "typewriter-effect";
import Dotgrid from "../assets/dotgrid";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <h2 className="title"> My name is Ian Muchesia</h2>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["Hello,", "I am a Fullstack Developer"],
              loop: true,
              autoStart: true,
              wrapperClassName: "typeWriterText title",
            }}
          />
        </div>

        <p className="title">
          A passionate full-stack developer with a focus on creating functional
          and visually appealing web and mobile applications. With 18 months of
          experience under my belt, I have a proven track record of delivering
          high-quality projects that exceed expectations. Let's build something
          great together!
        </p>
        <button className="btn hero-btn">Download Resume</button>
      </motion.div>
      <motion.div
        className="hero__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      >
        <div className="first-grid">
          <Dotgrid />
        </div>

        <img src={heroImg} alt="" />
        <div className="second-grid">
          <Dotgrid />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
