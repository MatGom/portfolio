import { useRef } from 'react';

import MainNavigation from './components/MainNavigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  const sectionRefs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
  };

  let content;

  if (window.location.pathname === '/') {
    content = (
      <>
        <MainNavigation {...sectionRefs} />
        <Home ref={sectionRefs.homeRef} />
        <About ref={sectionRefs.aboutRef} />
        <Projects ref={sectionRefs.projectsRef} />
        <Contact ref={sectionRefs.contactRef} />
        <Footer />
      </>
    );
  } else {
    content = <NotFound />;
  }

  return <div className='container'>{content}</div>;
}

export default App;
