import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import projectOneImage from '../images/clashgame.jpg';
import projectTwoImage from '../images/calendar.jpg';
import projectThreeImage from '../images/thefastestfood.jpg';

export const projects = [
  {
    id: 'project1',
    image: projectOneImage,
    imageDescription: 'Image of clash game application',
    title: 'Clash Game',
    description: (
      <span>
        Clash Game is a turn-based, two-player strategy game. Each player needs to carefully consider their choices.
        Challenge your friends or family and find out who is the better strategist!
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    link: 'https://riseclashgame.netlify.app/',
    githubLink: 'https://github.com/MatGom/clash-game',
  },
  {
    id: 'project2',
    image: projectTwoImage,
    imageDescription: 'Image of your planner application',
    title: 'Your Planner',
    description: (
      <span>
        Your Planner is an easy-to-use application designed to help users better manage their planned activities. It
        offers a simple interface to efficiently organise and track tasks.
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    link: 'https://risecalendar.netlify.app/',
    githubLink: 'https://github.com/MatGom/calendar',
  },
  {
    id: 'project3',
    image: projectThreeImage,
    imageDescription: 'Image of the fastest food page',
    title: 'The Fastest Food',
    description: (
      <span>
        The Fastest Food is a food ordering application with a friendly user interface that makes it easy to browse.
        Simply exploring the app will boost your appetite!
      </span>
    ),
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    link: 'https://risethefastestfood.netlify.app/',
    githubLink: 'https://github.com/MatGom/the-fastest-food',
  },
];
