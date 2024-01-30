import cardOneImage from '../images/skills.svg';
import cardTwoImage from '../images/design_goals.svg';
import cardThreeImage from '../images/personal_goals.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';

export const cards = [
  {
    id: 'card1',
    image: cardOneImage,
    imageDescription: 'Picture of two graphs',
    title: 'Skills',
    infos: [
      {
        id: 'info1',
        icon: <FontAwesomeIcon icon={faHtml5} />,
        info: 'HTML',
      },
      {
        id: 'info2',
        icon: <FontAwesomeIcon icon={faCss3Alt} />,
        info: 'CSS',
      },
      {
        id: 'info3',
        icon: <FontAwesomeIcon icon={faSquareJs} />,
        info: 'JavaScript',
      },
      {
        id: 'info4',
        icon: <FontAwesomeIcon icon={faReact} />,
        info: 'React',
      },
    ],
  },
  {
    id: 'card2',
    image: cardTwoImage,
    imageDescription: 'Picture of code',
    title: 'Design goals',
    infos: [
      {
        id: 'info1',
        info: 'Functionality',
      },
      {
        id: 'info2',
        info: 'Legibility',
      },
      {
        id: 'info3',
        info: 'Fast loading',
      },
      {
        id: 'info4',
        info: 'Aesthetic',
      },
    ],
  },
  {
    id: 'card3',
    image: cardThreeImage,
    imageDescription: 'Picture of graphs and first place on podium',
    title: 'Personal goals',
    infos: [
      {
        id: 'info1',
        info: 'Continous improvement',
      },
      {
        id: 'info2',
        info: 'Open to communication',
      },
      {
        id: 'info3',
        info: 'Focused on success',
      },
      {
        id: 'info4',
        info: 'Reliable',
      },
    ],
  },
];
