import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import projectOneImage from '../images/portfolio.png';
import projectTwoImage from '../images/clashgame.png';
import projectThreeImage from '../images/calendar.png';
import projectFourImage from '../images/thefastestfood.png';

export const projects = [
  {
    id: 'project1',
    image: projectOneImage,
    imageDescription: 'image of portfolio website',
    title: 'My Portfolio',
    description: (
      <span>
        This is my portfolio website, developed using React and plain CSS, focusing on clean design and functionality.
        Check out the code on GitHub by clicking the icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        The portfolio features original designs and graphics by{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/nekoteknk/'>
          nekotekNK
        </a>
        . The contact form is powered by{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://formspree.io'>
          Formspree
        </a>
        , and{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://fontawesome.com/'>
          Font Awesome
        </a>{' '}
        icons enhance the visual appeal.
      </span>
    ),
    link: 'http://mateuszgomolka.com',
    githubLink: 'https://github.com/MatGom/portfolio',
  },
  {
    id: 'project2',
    image: projectTwoImage,
    imageDescription: 'image of clash game application',
    title: 'Clash Game',
    description: (
      <span>
        Clash Game is a two-player strategy game built with React and SCSS. Check out the code on GitHub by clicking the
        icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        I developed Clash Game using React, useState for local state, and React Redux for global state. The game uses
        free icons from{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://fontawesome.com/'>
          Font Awesome
        </a>
        .
      </span>
    ),
    link: 'https://riseclashgame.netlify.app/',
    githubLink: 'https://github.com/MatGom/clash-game',
  },
  {
    id: 'project3',
    image: projectThreeImage,
    imageDescription: 'image of calendar planner application',
    title: 'Calendar Planner',
    description: (
      <span>
        This interactive calendar app allows users to plan activities and view the current local weather. Developed with
        React and plain CSS. Check out the code on GitHub by clicking the icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        I developed this project using React, with useState for local state and React Context for global state. The app
        features icons from{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://fontawesome.com/'>
          Font Awesome
        </a>{' '}
        and uses the{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://openweathermap.org/api'>
          OpenWeather API
        </a>{' '}
        for weather information.
      </span>
    ),
    link: 'https://risecalendar.netlify.app/',
    githubLink: 'https://github.com/MatGom/calendar',
  },
  {
    id: 'project4',
    image: projectFourImage,
    imageDescription: 'image of the fastest food page',
    title: 'The Fastest Food',
    description: (
      <span>
        This food ordering app is built with React, TypeScript, and plain CSS. Check out the code on GitHub by clicking
        the icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        Developed using React and TypeScript, this app uses useState for local state and React Context for global state.
        The app features icons from{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://fontawesome.com/'>
          Font Awesome
        </a>{' '}
        and images from{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://pixabay.com/'>
          Pixabay
        </a>
        . Special thanks to Pixabay contributors:{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://pixabay.com/users/vika_glitter-6314823/'>
          Vika_Glitter
        </a>{' '}
        for background images,{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://pixabay.com/users/alexas_fotos-686414/'>
          Alexas_Fotos
        </a>{' '}
        for desserts and drinks images,{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://pixabay.com/users/jandersnunes-43519400/'>
          JanderSNunes
        </a>{' '}
        for burger images, and{' '}
        <a target='_blank' rel='noopener noreferrer' href='https://pixabay.com/users/colibrie-15745216/'>
          Colibrie
        </a>{' '}
        for pizza images.
      </span>
    ),
    link: 'https://risethefastestfood.netlify.app/',
    githubLink: 'https://github.com/MatGom/the-fastest-food',
  },
];
