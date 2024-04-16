import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import projectOneImage from '../images/portfolio.png';
import projectTwoImage from '../images/clashgame.png';
import projectThreeImage from '../images/calendar.png';

export const projects = [
  {
    id: 'project1',
    image: projectOneImage,
    imageDescription: 'image of portfolio website',
    title: 'My Portfolio',
    description: (
      <span>
        This is my portfolio website, developed by myself using React and plain CSS. I aimed for simplicity in the code,
        emphasizing clean design and functionality. Check out the project's code by clicking the GitHub icon. For more
        details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        This portfolio is brought to life with the original designs and graphics by{' '}
        <a href='https://www.instagram.com/nekoteknk/'>nekotekNK</a>, whose artistic contributions have been invaluable.
        The contact form submission is seamlessly managed thanks to <a href='https://formspree.io'>Formspree</a>,
        ensuring every message reaches me directly. Additionally, the visual appeal is enhanced by the use of{' '}
        <a href='https://fontawesome.com/'>Font Awesome</a>'s free icons, adding that extra touch of clarity and
        engagement to the user experience.
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
        Clash Game is a strategy turn based game for two players. This project was developed using React and SCSS. Check
        out the project's code by clicking the GitHub icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        I designed, coded, and developed the game logic for Clash Game entirely on my own, utilizing useState for local
        state management and React Redux for global state management. The game features{' '}
        <a href='https://fontawesome.com/'>Font Awesome</a>'s free icons to enhance its visual appeal.
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
        This interactive calendar app allows the user to plan activities or add notes for events and shows the current
        local weather. This project was developed using React and plain CSS. Check out the project's code by clicking
        the GitHub icon. For more details, flip this card.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: (
      <span>
        This project was designed and programmed by myself. It uses useState for managing local state and React Context
        for managing global state. The application's look is improved with free icons from{' '}
        <a href='https://fontawesome.com/'>Font Awesome</a>, and it uses the{' '}
        <a href='https://openweathermap.org/api'>OpenWeather API</a> to fetch and display the user's local weather
        information.
      </span>
    ),
    link: 'https://risecalendar.netlify.app/',
    githubLink: 'https://github.com/MatGom/calendar',
  },
  {
    id: 'project4',
    image: '',
    imageDescription: '',
    title: 'TBA',
    description: <span>'Coming soon...'</span>,
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: <span>'Coming soon...'</span>,
    link: '',
    githubLink: '',
  },
];
