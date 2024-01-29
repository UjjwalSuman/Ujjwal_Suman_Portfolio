import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from "./ResumeCard";


const Skills = () => {
  return (
      <div className="w-full cent lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">HTML 5</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">CSS</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
          </div>
          <div className="overflow-x-hidden">
            <h2 className="text-sm uppercase font-medium">Tailwind CSS</h2>
          </div>
          <div className="overflow-x-hidden">
            <h2 className="text-sm uppercase font-medium">React-Redux</h2>
          </div>
          <div className="overflow-x-hidden">
            <h2 className="text-sm uppercase font-medium">DOM manupulation</h2>
          </div>
        </div>
      </div>
  );
}

export default Skills