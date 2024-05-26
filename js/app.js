// Homework #1
function getAlert() {
  let colors = ["Red", "Yellow", "Green"];
  alert(colors[1]);
}

// Homework #2
let actors = [
  {
    firstName: "Hugh",
    lastName: "Jackman",
    age: 2024 - 1968,
    movieName: "Les Misérables (2012)",
  },
  {
    firstName: "Leonardo",
    lastName: "DiCaprio",
    age: 2024 - 1974,
    movieName: "Inception (2010)",
  },
  {
    firstName: "Gerard",
    lastName: "Butler",
    age: 2024 - 1969,
    movieName: "300 (2006)",
  },
  {
    firstName: "Brad",
    lastName: "Pitt",
    age: 2024 - 1963,
    movieName: "Fight Club (1999)",
  },
  {
    firstName: "Johnny",
    lastName: "Depp",
    age: 2024 - 1963,
    movieName: "Pirates of the Caribbean (2003)",
  },
  {
    firstName: "Robert",
    lastName: "Downey Jr.",
    age: 2024 - 1965,
    movieName: "Iron Man (2008)",
  },
  {
    firstName: "Taylor",
    lastName: "Lautner",
    age: 2024 - 1992,
    movieName: "Twilight (2008)",
  },
  {
    firstName: "Dylan",
    lastName: "O'Brien",
    age: 2024 - 1991,
    movieName: "Teen Wolf (2011)",
  },
  {
    firstName: "Ian",
    lastName: "Nelson",
    age: 2024 - 1995,
    movieName: "The Boy Next Door (2015)",
  },
  {
    firstName: "Liam",
    lastName: "Hemsworth",
    age: 2024 - 1990,
    movieName: "The Hunger Games (2012)",
  },
];

function getCheck_1(params) {
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].age <= params) {
      console.log(actors[i].firstName, actors[i].lastName);
    }
  }
}

function getCheck_2(params) {
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].age > params) {
      console.log(actors[i].firstName, actors[i].lastName, actors[i].age);
    }
  }
}
