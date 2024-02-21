import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Apnaasiyana"
          des=" Explore Apnaasiyana.com for secure authentication, CRUD operations, user-friendly features, and advanced search functionalities. Find your dream property today!"
          src={projectTwo}
          showGlobeIcon ={true}
          repositoryLink="https://github.com/UjjwalSuman/Real-Estate"
          repositoryWebsiteLink="https://apnaasiyana.onrender.com/"
        />
        <ProjectsCard
          title="StudyNotion"
          des=" It is a website in which students can learn and here we can have the log-in and sign-in 
          functionality to the website and we can access courses"
          src={projectOne}
          repositoryLink="https://github.com/UjjwalSuman/StudyNotionWithUjjwalSuman"
          showGlobeIcon={false}
        />
        <ProjectsCard
          title="Render-Gif-Generator"
          des=" We can render gifs by searching what we want to search."
          src={projectThree}
          repositoryLink="https://github.com/UjjwalSuman/Render_Gif_Generator"
          showGlobeIcon={false}
        />
      </div>
    </section>
  );
}

export default Projects