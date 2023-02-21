import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            {" "}
            <>
              Linkedin <FaLinkedin />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
