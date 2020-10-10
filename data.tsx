export interface Person {
  id: string;
  name: string;
  role: string;
}

export interface FooterLink {
  href: string;
  linkText: string;
}

export const footerLinks = [
  {
    href: "https://github.com/datascienceucsc",
    linkText: "Github",
  },
  {
    href: "https://www.instagram.com/datascienceucsc/?igshid=1kwj608v894a5",
    linkText: "Instagram",
  },

  {
    href: "https://www.linkedin.com/company/datascienceucsc/",
    linkText: "LinkedIn",
  },

  {
    href: "mailto:ucscdatascience@gmail.com",
    linkText: "Email Us!",
  },
];

export const people = [
  {
    id: "anders",
    name: "Anders Poirel",
    role: "President",
  },
  {
    id: "julian",
    name: "Julian Lehrer",
    role: "Vice-President",
  },
  {
    id: "oasys",
    name: "Oasys Okubo",
    role: "Officer",
  },
  /*  {
    id: "garret",
    name: "Garret Leising",
    role: "",
  }, */
  {
    id: "bijay",
    name: "Bijay Khadja",
    role: "Officer",
  },
  {
    id: "sean",
    name: "Sean Breckenridge",
    role: "Officer, Webmaster",
  },
  {
    id: "ryan",
    name: "Ryan Darling",
    role: "Officer, Former President",
  },
];

export default people;
