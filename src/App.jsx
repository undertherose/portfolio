import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-hero-normal bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech-normal bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        {/* <Projects /> */}
      <div className="bg-lightblue">
        <div
          className="bg-about bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className=" relative z-0">
          <Contact />
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
