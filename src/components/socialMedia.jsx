import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/arjen-andeweg-178a1aa4/"
      target="_blank"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/ArjenAndeweg" target="_blank">
      <BsGithub />
    </a>
  </div>
);

export default SocialMedia;
