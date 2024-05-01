import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo,
}) => {
  return (
    <motion.div className='justify-center flex' variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450, }}
        className='bg-white p-5 rounded-2xl sm:w-[550px] w-full'
        style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)' }}
      >
        <div className='relative w-full h-[330px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex m-3 justify-between card-img_hover'>
            <a href={source_code_link} target="_blank" rel="noreferrer">
              <motion.div
                whileInView={{ scale: [0.9, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                style={{ width: '30px', height: '30px' }}
              >
                <AiFillGithub style={{ width: '100%', height: '100%' }} />
              </motion.div>
            </a>
            {demo !== "" && (
              <a href={demo} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0.9, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                  style={{ width: '30px', height: '30px' }}
                >
                  <AiOutlineLink style={{ width: '100%', height: '100%' }} />
                </motion.div>
              </a>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-purple6 font-bold text-[24px]'>{name}</h3>
          {/* <p className='mt-2 text-purple6 text-[14px]'>{description}</p> */}
          <div className='mt-2 text-purple6 text-[14px]' dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} w-full`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id='projects'>
        <motion.div className='mt-8' variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}> Projects </h2>
          <p className={`${styles.sectionSubText} text-center`}> Check out demos + code </p>
        </motion.div>

        <div className='my-16 grid grid-cols-1 lg:grid-cols-2 gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

// export default SectionWrapper(Works, "projects");
export default Works;