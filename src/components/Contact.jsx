import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaMedium } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://leetcode.com/u/ashishmadeshiya17/" target="_blank" className="items">

            <SiLeetcode className="icons" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/alpha7518/" target="_blank" className="items">

            <SiGeeksforgeeks className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/ashish-maddhesiya-8795b5243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://medium.com/@ashishmadeshiya17" target="_blank" className="items">
            <FaMedium className="icons" />
          </a>
          <a href="https://github.com/ashishgupta7518" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:ashishmadeshiya17@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
