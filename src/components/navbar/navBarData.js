import home from '../../assets/nav-home-icon.svg';
import star from '../../assets/nav-star-icon.svg';
import profile from '../../assets/nav-profile-icon.svg';
import settings from '../../assets/nav-settings-icon.svg';

const navBarData = [
  {
    icon: {
      src: home,
      alt: 'home-icon',
    },
    title: 'Home',
    options: [
      {
        name: 'Usuarios',
        sendTo: 'users',
      },
      {
        name: 'Roles',
        sendTo: 'roles',
      },
    ],
  },
  {
    icon: {
      src: star,
      alt: 'star-icon',
    },
    title: 'Favoritos',
    options: [
      {
        name: ' ',
        sendTo: ' ',
      },
      {
        name: ' ',
        sendTo: ' ',
      },
    ],
  },
  {
    icon: {
      src: profile,
      alt: 'profile-icon',
    },
    title: 'Proovedores',
    options: [
      {
        name: ' ',
        sendTo: ' ',
      },
      {
        name: ' ',
        sendTo: ' ',
      },
    ],
  },
  {
    icon: {
      src: settings,
      alt: 'settings-icon',
    },
    title: 'Ajustes',
    options: [
      {
        name: ' ',
        sendTo: ' ',
      },
      {
        name: ' ',
        sendTo: ' ',
      },
    ],
  },
];

export default navBarData;
