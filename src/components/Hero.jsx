import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { sketch, shaq, bwmap, worldmap } from '../assets';
// import Text from './Text.js'

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        bg-about overflow-hidden">
           {/* <div className="row align-items-center flex-row-reverse">
                <div className="me col-sm-6 col-sm-push-6">
                <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={sketch}
            alt="sketch"
          />
            </div>
                <div className="col-sm-6 col-sm-pull-6">
                    <p className="introduction">Hello  My name is <strong class="pink">Sylvia Wu</strong>. I'm a <strong class="serenity">UX/UI Designer</strong> and <strong class="serenity">Developer</strong>. 
                        Right now, I'm a student at the <strong class="purple">University of Washington iSchool</strong> studying <strong class="pink">HCI</strong>.</p>
                </div>
            </div> */}
        <div
          className={`absolute inset-0 sm:top-[150px] top-[150px] 
          lg:top-[150px] xl:top-[150px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#FFDCE9] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} serenity`}>
              Hi, this is{' '}
              <span
                className="sm:text-[90px] 
                pink text-[50px]
                font-extrabold">
                Sylvia Wu
              </span>
            </h1>
            {/* <Text /> */}
            <p className={`${styles.heroSubText} mt-2  text-eerieBlack`}>
              I am a UI/UX Developer. <br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={sketch}
            alt="sketch"
          />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
