const starWars = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

let isCharactersVisible = false;

function toggleCharacters() {
  const container = document.getElementById("characters-container");
  container.classList.add("container");
  const button = document.getElementById("toggleButton");

  if (isCharactersVisible) {
    container.innerHTML = "";
    button.textContent = "Karakterleri Göster";
    isCharactersVisible = false;
  } else {
    for (let i = 0; i < starWars.length; i++) {
      const character = starWars[i];

      const characterDiv = document.createElement("div");
      characterDiv.classList.add("character");

      const imgElement = document.createElement("img");
      imgElement.src = character.pic;

      const nameElement = document.createElement("h1");
      nameElement.textContent = `Name: ${character.name}`;

      const homeworldElement = document.createElement("p");
      homeworldElement.textContent = `${character.homeworld}`;

      characterDiv.appendChild(imgElement);
      characterDiv.appendChild(nameElement);
      characterDiv.appendChild(homeworldElement);

      container.appendChild(characterDiv);
    }
    button.textContent = "Karakterleri Gizle";
    isCharactersVisible = true;
  }
}

function color() {
  const colorbtn = document.getElementById("toggleButton");
  if (colorbtn.textContent === "Karakterleri Gizle") {
    colorbtn.style.color = "red";
  } else {
    colorbtn.style.color = "black";
  }
}

// 2. BÖLÜM

const homeworlds = starWars.map((character) => character.homeworld);

//console.log(homeworlds);

for (let i = 0; i < homeworlds.length; i++) {
  if (homeworlds[i] === undefined) {
    homeworlds[i] = "other";
  }
}

const homeworldsUnique = [...new Set(homeworlds)];

//console.log(homeworldsUnique);

const lowerCased = homeworldsUnique.map((word) => word.toLowerCase());

//console.log(lowerCased);

const homeWorldEarth = lowerCased;

function radioHomeworld() {
  const divRadio = document.getElementById("divsRadio");

  for (let i = 0; i < homeWorldEarth.length; i++) {
    const arraysHomeWorld = homeWorldEarth[i];

    const radioDiv = document.createElement("div");
    radioDiv.classList.add("character" );

    const radioInput = document.createElement("input");
    radioInput.classList.add("form-check");
    radioInput.value = arraysHomeWorld;
    radioInput.type = "radio";
    radioInput.name = "homeworld";
    radioInput.addEventListener('click', function () {
      filterSelection(c); // Call toggleCharacters with selected homeworld
    });

    const radioLabel = document.createElement("label");
    radioLabel.classList.add("label");
    radioLabel.textContent = `${arraysHomeWorld}`;
    radioLabel.htmlFor = "homeworld - " + `${arraysHomeWorld}`;

    radioDiv.appendChild(radioLabel);
    radioDiv.appendChild(radioInput);

    divRadio.appendChild(radioDiv);
  }
}

radioHomeworld();

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("character");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


