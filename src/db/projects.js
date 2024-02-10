import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import projectOneImage from '../images/portfolio.png';

export const projects = [
  {
    id: 'project1',
    image: projectOneImage,
    imageDescription: '',
    title: 'My Portfolio',
    description: (
      <span>
        This is my portfolio website, developed by myself using React and plain CSS. I aimed for simplicity in the code,
        emphasizing clean design and functionality. Check out the project's code by clicking the GitHub icon. For
        details on its tools and creation, flip this card.
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
  {
    id: 'project3',
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
