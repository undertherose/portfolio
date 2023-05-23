import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, id }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient rounded-[20px]">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        id={id}
        className={'rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'}>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        As a UI/UX Developer, I specialize in creating seamless and engaging user experiences through intuitive interfaces. 
        With a strong foundation in user-centered design principles, I excel at translating complex requirements into visually appealing and functional digital products. 
        I possess expertise in front-end development technologies and have a keen eye for detail, ensuring pixel-perfect designs and smooth interactions across various devices and platforms.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
