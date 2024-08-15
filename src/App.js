import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  let content;

  if (window.location.pathname === '/') {
    content = (
      <>
        <MainNavigation />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  } else {
    content = <NotFound />;
  }

  return <div className='container'>{content}</div>;
}

export default App;
