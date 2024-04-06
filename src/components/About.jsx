import React from 'react';
import Wave from 'react-wavify';
import { styles } from "../styles";

import profile from '../assets/intro-pic.png';

const About = () => {
  return (
    <>
      <div className="bg-purple6" id='about' style={{ height: '145px', marginTop: "-2px" }}>
        <Wave
          fill="#eeebf5"
          paused={false}
          options={{ height: 80, amplitude: 35, speed: 0.2, points: 5 }}
        />
      </div>
      <div className="px-10 mt-20 mb-24 max-w-7xl mx-auto" >
        <h1 className={`${styles.sectionHeadText} mb-4 lg:mb-8 text-center`}> About Me </h1>
        <div className='items-center flex flex-col lg:flex-row gap-8'>
          <img className='w-72 sm:w-96 h-auto rounded-full border border-purple6' style={{boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)'}}
            src={profile}
          />
          <p className={`${styles.sectionSubText} text-left`}>
            Hey there! My name is{' '}
            <span className="font-bold">Jonathan Feng</span>
            {'.'} I'm a Computer Engineering student at the University of Waterloo. {'\u{1F527}'}
            <br /> <br />
            I'm also a software developer looking to make an impact with meaningful projects. {'\u{1F4BB}'}
            <br /> <br />
            In my free time, you can catch me baking new recipes {'\u{1F36A}'}, travelling to new places {'\u{1F30D}'},
            and attempting needlessly complex embroidery projects! {'\u{1F9F5}'}
          </p>
        </div>
      </div>

    </>
  )
}

export default About