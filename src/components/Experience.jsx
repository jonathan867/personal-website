import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "white",
        color: "#21015C",
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)'
      }}
      contentArrowStyle={{ borderRight: "7px solid #21015C" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div className=''>
        <h3 className='text-purple6 text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-purple5 text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className='text-purple6' style={{ marginTop: 20, fontSize: 14, fontWeight: 'normal' }}>
          {experience.description}
        </p>
      </div>

      <ul className='mt-2 mb-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-purple6 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div className='mt-8' variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Follow my career path
        </p>
      </motion.div>

      <div className='my-16 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      
    </>
  );
};

export default SectionWrapper(Experience, "work");