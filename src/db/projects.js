import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import projectOneImage from '../images/project.png';

export const projects = [
  {
    id: 'project1',
    image: projectOneImage,
    imageDescription: '',
    title: 'Title1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor leo. Donec placerat nec quam vitae congue. Quisque congue magna lorem, non consequat magna porttitor non. Curabitur faucibus lacinia magna id scelerisque. Nam ante ligula, consequat semper aliquet eget, pharetra vel nisi. Donec auctor imperdiet commodo. Aenean sollicitudin tortor metus.',
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor leo. Donec placerat nec quam vitae congue. Quisque congue magna lorem, non consequat magna porttitor non. Curabitur faucibus lacinia magna id scelerisque. Nam ante ligula, consequat semper aliquet eget, pharetra vel nisi. Donec auctor imperdiet commodo. Aenean sollicitudin tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id porttitor leo. Donec placerat nec quam vitae congue. Quisque congue magna lorem, non consequat magna porttitor non. Curabitur faucibus lacinia magna id scelerisque. Nam ante ligula, consequat semper aliquet eget, pharetra vel nisi. Donec auctor imperdiet commodo. Aenean sollicitudin tortor metus.',
    link: 'http://google.com',
    githubLink: 'http://github.com',
  },
  {
    id: 'project2',
    image: '',
    imageDescription: '',
    title: 'TBA',
    description: 'Coming soon...',
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: 'Coming soon...',
    link: '',
    githubLink: '',
  },
  {
    id: 'project3',
    image: '',
    imageDescription: '',
    title: 'TBA',
    description: 'Coming soon...',
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: 'Coming soon...',
    link: '',
    githubLink: '',
  },
  {
    id: 'project4',
    image: '',
    imageDescription: '',
    title: 'Title4',
    description: 'Coming soon...',
    linkIcon: <FontAwesomeIcon icon={faGithub} />,
    arrowIcon: <FontAwesomeIcon icon={faChevronRight} />,
    backDescription: 'Coming soon...',
    link: '',
    githubLink: '',
  },
];
