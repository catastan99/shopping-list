import React from "react";
import "../style/Footer.css";
import { ReactComponent as EmailIcon } from "../assets/icons/EmailIcon.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/GithubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/LinkedinIcon.svg";

function Footer() {
  return (
    <div className="Footer">
      <p>&copy; Catalin Stan</p>
      <p>
        <LinkedinIcon />{" "}
        <a href="https://www.linkedin.com/in/catalinstan99/">LinkedIn</a>
      </p>
      <p>
        <GithubIcon /> <a href="https://github.com/catastan99"> GitHub</a>
      </p>
      <p>
        <EmailIcon />{" "}
        <a href="mailto:catalin.stan7@yahoo.com">catalin.stan7@yahoo.com</a>
      </p>
    </div>
  );
}

export default Footer;
