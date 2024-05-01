import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from "framer-motion";

import { styles } from "../styles";

import Typewriter from 'typewriter-effect';

import forest1 from '../assets/forest1.png';
import forest2 from '../assets/forest2.png';
import forest3 from '../assets/forest3.png';
import forest4 from '../assets/forest4.png';
import forest5 from '../assets/forest5.png';
import birds1 from '../assets/birds1.png';
import birds2 from '../assets/birds2.png';

import { LinkedinFilled, GithubFilled, InstagramFilled, MailFilled } from '@ant-design/icons';

const Hero = () => {
  return (

    <section className={`relative w-full h-screen mx-auto bg-purple6`}>
      <Parallax pages={1.5} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div style={{ height: '30px', backgroundColor: '#C6ABFA', marginBottom: '-1px' }} />
          <div className="bg-sun-background bg-cover bg-no-repeat bg-center h-full" ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.33} speed={0.1}>
          <img className='' style={{ width: '100%', minHeight: '450px', objectFit: 'cover' }}
            src={forest1}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.39} speed={0.2}>
          <img className='' style={{ width: '100%', minHeight: '380px', objectFit: 'cover' }}
            src={forest2}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.52} speed={0.4}>
          <img className='' style={{ width: '100%', minHeight: '375px', objectFit: 'cover' }}
            src={forest3}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.75}>
          <img className='' style={{ width: '100%', minHeight: '570px', objectFit: 'cover' }}
            src={forest4}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={1} style={{ zIndex: 1 }}>
          <img className='' style={{ width: '100%', minHeight: '600px', objectFit: 'cover', marginBottom: '-1px' }}
            src={forest5}
          />
          <div className='text-center bg-purple6' style={{ height: '400px' }}>
            <h1 className={`${styles.heroHeadText} text-white m-0`}>
              Welcome to my <br className='xs:inline sm:hidden'/> web portfolio
            </h1>
            <div className='mt-5'>
              <a className='m-5' style={{ fontSize: "40px" }} href="https://www.linkedin.com/in/jonathanfeng/" target="_blank" rel="noopener noreferrer">
                <LinkedinFilled />
              </a>
              <a className='m-5' style={{ fontSize: "40px" }} href="https://github.com/jonathan867" target="_blank" rel="noopener noreferrer">
                <GithubFilled />
              </a>
              <a className='m-5' style={{ fontSize: "40px" }} href="https://www.instagram.com/jonathan_feng_4/" target="_blank" rel="noopener noreferrer">
                <InstagramFilled />
              </a>
              <a className='m-5' style={{ fontSize: "40px" }} href="mailto:jonathanfeng5@gmail.com" target="_blank" rel="noopener noreferrer">
                <MailFilled />
              </a>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.85}>
          <img className='' style={{ width: '', height: '200px', marginLeft: '55%' }}
            src={birds1}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={0.5}>
          <img className='' style={{ width: '', height: '150px', marginLeft: '12%' }}
            src={birds2}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.4}>
          <div className='text-center' style={{ color: '#540EDB' }}>
            <h1 className={`${styles.heroHeadText}`}>
              Jonathan Feng
            </h1>
            <Typewriter
              options={{
                strings: ['Software Developer', 'Traveller', 'Computer Engineering Student'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                pauseFor: 2000,
                cursor: ''
              }}
            />
          </div>
        </ParallaxLayer>
      </Parallax>

    </section>
  );
};

export default Hero;