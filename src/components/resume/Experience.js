import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
              title="System Engineer"
              subTitle="TCS - (2021 - Present)"
              result="Ahmedabad"
              des="Develop and maintain web applications using React-JS, ensuring high performance and scalability. Implement state management with redux to enhance application efficiency and maintainability"
            />
            <ResumeCard
              title="Frontend Developer Intern"
              subTitle="Accuments - (2021 - 2021)"
              result="WFH"
              des="We have developed responsive web interfaces with HTML, CSS, JavaScript, and React."
            />
            <ResumeCard
              title="Data Analyst Trainee "
              subTitle="Tata Steel Ltd - (2019 - 2019)"
              result="Jharkhand"
              des="We conducted data analysis using tools like Python, R, or Excel.
                  Collaborated with cross-functional teams to understand data requirements.
                  "
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
