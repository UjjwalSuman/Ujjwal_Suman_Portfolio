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
          title="StudyNotion"
          des=" It is a website in which students can learn and here we can have the log-in and sign-in 
          functionality to the website and we can access courses"
          src={projectOne}
        />
        <ProjectsCard
          title="Blogs"
          des=" Here You can write your blog and you can also edit and remove the blogs as per the requirements"
          src={projectTwo}
        />
        <ProjectsCard
          title="Render-Gif-Generator"
          des=" We can render gifs by searching what we want to search."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects