import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow project-card`}
      onClick={() => handleClick(id)}>
      {/* <div
        className="absolute top-0 left-0 z-10  
      h-full w-full opacity-[0.5] rounded-[24px]"></div> */}

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-poppins w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[1px] text-jet tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(255,255,255,0.5)] rounded-b-[24px] z-20">
            {/* <div className="absolute inset-0 flex justify-end m-3"> */}
              {/* <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div> */}
            {/* </div> */}

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-jet font-poppins sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-battleGray sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            {/* <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button> */}
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-3');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      {/* <div class="projects-feed cf">
                        <article class="project cf">
                            <a href="portfolio-1.html" target="_blank" title="See the Journey">
                                <div class="thumb">
                                    <div data-picture data-alt="">
                                        <div data-src="img/portfolio-1.png"></div>                                            
                                    
                                            
                                            <noscript>
                                                <img src="img/portfolio-1.png" alt="" />
                                            </noscript>
                                        </div>
                                    </div>
            
                                    <div class="project-content-container">
                                        <div class="project-content">
                                            <div class="table">
                                                <div class="table-cell dp-1">
                                                    <h2 class="thumbnail-title">Calender</h2>
                                                    <p class="thumbnail-description">System App Design for a Dual-Screen Phone</p>
                                                    <p class="thumbnail-description">Product, Interface, Interaction Design</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="overlay"></div>
                                </a>
                            </article>
                            <article class="project cf">
                                <a href="portfolio-2.html" target="_blank" title="See the Journey">
                                    <div class="thumb">
                                        <div data-picture data-alt="">
                                            <div data-src="img/portfolio-2.png"></div>

                                            
                                            <noscript>
                                                <img src="img/portfolio-2.png" alt="" />
                                            </noscript>
                                        </div>
                                    </div>
            
                                    <div class="project-content-container">
                                        <div class="project-content">
                                            <div class="table">
                                                <div class="table-cell dp-2">
                                                    <h2 class="thumbnail-title">Arcode</h2>
                                                    <p class="thumbnail-description">A Game Web-App Using React</p>
                                                    <p class="thumbnail-description">Web Design, Graphic Design & Front-end Development</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="overlay"></div>
                                </a>
                            </article>
                            <article class="project cf">
                                <a href="portfolio-3.html" target="_blank" title="See the Journey">
                                    <div class="thumb">
                                        <div data-picture data-alt="">
                                            <div data-src="img/portfolio-3.png"></div>
                                            
                                            <noscript>
                                                <img src="img/portfolio-3.png" alt="" />
                                            </noscript>
                                        </div>
                                    </div>
            
                                    <div class="project-content-container">
                                        <div class="project-content">
                                            <div class="table">
                                                <div class="table-cell dp-3">
                                                    <h2 class="thumbnail-title">Everthing About Hamburger</h2>
                                                    <p class="thumbnail-description">Infographic, Visual Information Design & Data Visualization</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="overlay"></div>
                                </a>
                            </article>
                            <article class="project cf">
                                <a href="https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/melon/" target="_blank" title="See the Journey">
                                    <div class="thumb">
                                        <div data-picture data-alt="">
                                            <div data-src="img/portfolio-4.png"></div>                                            

                                                
                                                <noscript>
                                                    <img src="img/portfolio-4.png" alt="" />
                                                </noscript>
                                            </div>
                                        </div>
                
                                        <div class="project-content-container">
                                            <div class="project-content">
                                                <div class="table">
                                                    <div class="table-cell dp-4">
                                                        <h2 class="thumbnail-title">Melon</h2>
                                                        <p class="thumbnail-description">A smartwatch to-do app for procrastinators</p>
                                                        <p class="thumbnail-description">UI/UX App & Interaction Design</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="overlay"></div>
                                    </a>
                                </article>
                                <article class="project cf">
                                    <a href="portfolio-5.html" target="_blank" title="See the Journey">
                                        <div class="thumb">
                                            <div data-picture data-alt="">
                                                <div data-src="img/portfolio-5.png"></div>

                                                
                                                <noscript>
                                                    <img src="img/portfolio-5.png" alt="" />
                                                </noscript>
                                            </div>
                                        </div>
                
                                        <div class="project-content-container">
                                            <div class="project-content">
                                                <div class="table">
                                                    <div class="table-cell dp-5">
                                                        <h2 class="thumbnail-title">Empathy</h2>
                                                        <p class="thumbnail-description">A keyboard app helps express emotions</p>
                                                        <p class="thumbnail-description">Emotion Problem-Solving App Design</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="overlay"></div>
                                    </a>
                                </article>
                                <article class="project cf">
                                    <a href="resume.html" target="_blank" title="See the Journey">
                                        <div class="thumb">
                                            <div data-picture data-alt="">
                                                <div data-src="img/portfolio-6.png"></div>
                                                
                                                
                                                <noscript>
                                                    <img src="img/portfolio-6.png" alt="" />
                                                </noscript>
                                            </div>
                                        </div>
                
                                        <div class="project-content-container">
                                            <div class="project-content">
                                                <div class="table">
                                                    <div class="table-cell dp-6">
                                                        <h2 class="thumbnail-title">My Résumé & Portfolio</h2>
                                                        
                                                        <p class="thumbnail-description">Brading, Logo, Layout & Graphic Design, & Web Development</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div class="overlay"></div>
                                    </a>
                                </article>
                        </div>  */}
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
