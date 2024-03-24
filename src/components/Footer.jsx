import React from 'react'
import { motion } from 'framer-motion';
import { styles } from "../styles";

import Wave from 'react-wavify';

import boat from '../assets/boat.png';
import { LinkedinFilled, GithubFilled, InstagramFilled, MailFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <>
      <div className="" id='contacts' style={{ height: '145px' }}>
        <Wave fill="#C6ABFA" paused={false} options={{ height: 80, amplitude: 12, speed: 0.4, points: 3 }} />
      </div>
      <div className="" style={{ height: '145px', marginTop: '-105px' }}>
        <Wave fill="#9769ED" paused={false} options={{ height: 80, amplitude: 12, speed: 0.3, points: 4 }} />
      </div>
      <div className="" style={{ height: '145px', marginTop: '-105px' }}>
        <Wave fill="#7236E1" paused={false} options={{ height: 80, amplitude: 12, speed: 0.2, points: 3 }} />
      </div>
      <motion.div className="relative">
        <motion.img
          className='boat'
          style={{ height: '120px', marginLeft: '15%', marginTop: '-125px' }}
          src={boat}
          alt="Boat"
          animate={{
            y: [4, -6, 4],
          }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="" style={{ height: '145px', marginTop: '-100px' }}>
        <Wave fill="#540EDB" paused={false} options={{ height: 80, amplitude: 12, speed: 0.4, points: 4 }} />
      </div>
      <div className="" style={{ height: '145px', marginTop: '-105px' }}>
        <Wave fill="#350199" paused={false} options={{ height: 80, amplitude: 12, speed: 0.3, points: 3 }} />
      </div>
      <div className="" style={{ height: '145px', marginTop: '-105px' }}>
        <Wave fill="#21015C" paused={false} options={{ height: 80, amplitude: 18, speed: 0.2, points: 4 }} />
      </div>

      <div className='text-center bg-purple6'>
            <h1 className={`${styles.heroHeadText} text-white m-0`}>
            Want to see where I go next? <br/>  Let's get in touch!
            </h1>
            <div className='mt-5 pb-16'>
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
            <div className='flex flex-row justify-between mx-10'>
            <h3 className='pb-8'>
              © Jonathan Feng 2024
            </h3>
            <h3 className='pb-5'>
              Made with love + Canva Pro free trial {'\u{1F49C}'}
            </h3>
            </div>
          </div>

    </>
  )
}

export default Footer