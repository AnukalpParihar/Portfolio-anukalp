import React from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { useRef } from "react";

// import my from "../assets/hello..jpeg";
const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 8, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi,I am <br />
            Anukalp Parihar
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A React Developer", "A Full-Stack Devloper"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:anukalpsingh86047@gmail.com">Hire me</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                + 8
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    8
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-spacial>
              <p>Contact</p>
              <span>anukalpsingh86047@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src="" alt="Anukalp" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
