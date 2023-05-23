import { motion } from 'framer-motion';
// import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const TechCanvas = ({ icon }) => {
  return (
    <div><img src={icon}></img></div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <TechCanvas icon={technology.icon} />
            
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
