import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { embroidery } from "../constants";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";


const EmbrCard = ({ index, image, handleButtonClick }) => {
  return (
    <div className='text-purple5 text-center' style={{ borderRadius: '10px' }}>
      <motion.div
        className='justify-center flex mb-3'
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        whileInView={{ scale: [1.05, 1] }}
        whileHover={{ scale: [1, 1.05], cursor: 'pointer' }}
        transition={{ duration: 0.25 }}
      >
        <div className='relative w-auto'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            onClick={() => handleButtonClick(index)}
          />
        </div>
      </motion.div>
      No.{index + 1} — {embroidery[index].name}
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div
    onClick={props.onClick}
    style={{ color: '#21015C', cursor: 'pointer' }}
  >
    <MdNavigateBefore style={{ height: '50px', width: 'auto' }} />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    onClick={props.onClick}
    style={{ color: '#21015C', cursor: 'pointer' }}
  >
    <MdNavigateNext style={{ height: '50px', width: 'auto' }} />
  </div>
);

const Blog = () => {

  const [display, setDisplay] = useState(-1);

  const handleButtonClick = (display) => {
    setDisplay(display);
  };

  return (
    <>
      <div className="px-10 pt-20 mt-20 mb-10 max-w-6xl mx-auto" id='blog'>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hobbies & Miscellaneous Fun
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Life's better with side quests
        </p>
        <div className='bg-white p-6 mt-16 mx-0 md:mx-16' style={{ borderRadius: '15px' }}>
          <div className='flex flex-row justify-between'>
            <h2 className={`${styles.hobbyHeadText}`}> 01. My Embroidery Projects </h2>
            <h2 className={`${styles.hobbyHeadText} mr-2`}> {'\u{1FAA1}'} </h2>
          </div>
          <hr className="my-2 border-t border-purple6" />

          {display === -1 && ( // gallery page
            <div>
              <div className='mx-5 mt-8 grid grid-cols-2 md:grid-cols-3 gap-7'>
                {embroidery.map((project, index) => (
                  <EmbrCard key={`project-${index}`} index={index} {...project} handleButtonClick={handleButtonClick} />
                ))}
              </div>
            </div>
          )}

          {display !== -1 && ( // individual projects
            <div>
              <button className='text-purple6' onClick={() => handleButtonClick(-1)}> Back </button>
              <h2 className={`${styles.hobbyHeadText} text-center`}>
                No.{display + 1} — {embroidery[display].name}
              </h2>
              <div className='relative flex justify-center mt-3 mb-12'>
                <div className="slider-container" style={{ width: '90%' }}>
                  <Slider
                    className='flex-row flex items-center'
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    prevArrow={<CustomPrevArrow />}
                    nextArrow={<CustomNextArrow />}
                  >
                    {embroidery[display].imgArr.map((item, index) => (
                      <div key={index}>
                        <div className='flex justify-center items-center' >
                          <img
                            src={item}
                            alt={`project_image_${index}`}
                            className='w-full h-full object-cover rounded-2xl'
                            style={{ maxHeight: '400px', width: 'auto' }}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className='mx-16 mb-2'>
                <ul className='list-disc ml-5 space-y-2'>
                  {embroidery[display].points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-purple6 text-[16px] pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className='bg-white p-6 mt-6 mb-16 mx-0 md:mx-16' style={{ borderRadius: '15px' }}>
          <div className='flex flex-row justify-between'>
            <h2 className={`${styles.hobbyHeadText}`}> 02. More Coming Soon! </h2>
            <h2 className={`${styles.hobbyHeadText} mr-2`}> {'\u{1F3D7}'} </h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default Blog