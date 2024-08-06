import { useRef } from 'react';

import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

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
        {/* <MainNavigation {...sectionRefs} /> */}
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
