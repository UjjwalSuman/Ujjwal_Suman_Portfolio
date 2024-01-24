import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {

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
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ujjwal Suman</h3>
        <p className="text-lg font-normal text-gray-400">
          FrontEnd Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Experienced and dedicated Frontend Developer with 2.2 years of experience. 
        Proficient in JavaScript, ReactJs, ReduxJs, Tailwinds CSS, and Virtual DOM. 
        I'm committed to creating user-centric web designs
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 123456789</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ujjwalsuman007@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft