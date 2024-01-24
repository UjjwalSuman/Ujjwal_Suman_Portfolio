import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux  } from "react-icons/si";

const Media = () => {

  const handleButtonClickLD = () => {
  const linkedInProfileUrl = 'https://www.linkedin.com/in/ujjwalsuman/';
  window.open(linkedInProfileUrl, '_blank');
  }

  const handleButtonClickGH = () => {
    const GitHubProfileUrl = 'https://github.com/UjjwalSuman';
    window.open(GitHubProfileUrl, '_blank');
  }

  const handleButtonClickIG = () => {
    const InstagramProfileUrl = 'https://www.instagram.com/ujjwal_suman/';
    window.open(InstagramProfileUrl, '_blank');
  }

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <button onClick={handleButtonClickGH} className="bannerIcon">
              <FaGithub />
            </button>
            <button onClick={handleButtonClickLD} className="bannerIcon">
              <FaLinkedinIn />
            </button>
            <button onClick={handleButtonClickIG} className="bannerIcon">
              <FaInstagram />
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media 