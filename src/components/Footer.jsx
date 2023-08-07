import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="" alt="Owner" />
        <h2>Anukalp Parihar</h2>
        <p>Nice</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/your__harsh" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AnukalpParihar" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
