import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume, resumeSW } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#ffffff',
      color: '#292929',
      boxShadow:
        experience.shadow,
    }}
    contentArrowStyle={{
      borderRight: '7px solid #ffffff',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-poppins">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg, color: experience.iconColor}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-poppins uppercase tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-black font-poppins tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vl-custom vertical-timeline-custom-line" lineColor={ 'white' }>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#ffffff',
              color: '#292929',
              boxShadow:
                '#F9D7D7 0px 10px 15px -3px, #F9D7D7 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #ffffff',
            }}
            iconStyle={{ background: '#ef6b89' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="resume-button live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-white 
              font-bold font-poppins items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1  sm:h-[58px] 
               h-[46px] rounded-[10px] bg-pink 
              sm:mt-[22px] mt-[16px] transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  'src/files/resume.pdf', //paste the link to your resume here
                  '_blank'
                )
              }
             
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              {/* <a href="../files/resume.pdf" />  */}
              Download My Résumé
              {/* <img
                src={download}
                alt="download"
                className="download-btn text-white sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              /> */}
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
