export interface Person {
  id: string;
  name: string;
  role: string;
}

const people = [
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
  {
    id: "garret",
    name: "Garret Leising",
    role: "",
  },
  {
    id: "bijay",
    name: "Bijay Khadja",
    role: "Officer",
  },
  {
    id: "sean",
    name: "Sean Breckenridge",
    role: "Officer, Web Development Officer",
  },
  {
    id: "ryan",
    name: "Ryan Darling",
    role: "Former President",
  },
];

export default people;
