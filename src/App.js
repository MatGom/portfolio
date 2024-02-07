import { useRef } from 'react';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MainNavigation from './components/MainNavigation';

function App() {
  const sectionRefs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
  };

  return (
    <div className='container'>
      <MainNavigation {...sectionRefs} />
      <Home ref={sectionRefs.homeRef} />
      <About ref={sectionRefs.aboutRef} />
      <Projects ref={sectionRefs.projectsRef} />
      <Contact ref={sectionRefs.contactRef} />
      <Footer />
    </div>
  );
}

export default App;
