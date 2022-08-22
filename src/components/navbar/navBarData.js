import home from "../../assets/nav-home-icon.svg";
import star from "../../assets/nav-star-icon.svg";
import profile from "../../assets/nav-profile-icon.svg";
import settings from "../../assets/nav-settings-icon.svg";

const navBarData = [
  {
    icon: {
      src: home,
      alt: "home-icon",
    },
    title: "Home",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    icon: {
      src: star,
      alt: "star-icon",
    },
    title: "Favoritos",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    icon: {
      src: profile,
      alt: "profile-icon",
    },
    title: "Proovedores",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    icon: {
      src: settings,
      alt: "settings-icon",
    },
    title: "Ajustes",
    options: ["option1", "option2", "option3", "option4"],
  },
];

export default navBarData;
