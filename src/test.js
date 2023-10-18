const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Slingo",
  "Antwoman",
  "Mask",
  "Tiger",
  "Cap Shield",
  "Catwoman",
  "Fish",
  "Hulk",
  "Deadpool",
  "Black Panther",
  "Doctor Strange",
  "Thor",
  "Manhunter",
  "Yellowjacket",
  "Thanos",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  players.forEach((player, index) => {
      detailedPlayers.push({
          name: player,
          strength: getRandomStrength(),
          image: 'images/super-' + (index + 1) + '.png',
          type: index % 2 == 0 ? 'hero' : 'villain',
          id: index + 1,
      });
  });
  return detailedPlayers;
  // console.log(initPlayers);
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.ceil(Math.random() * 100);
};
console.log(getRandomStrength())


// Loop through players and accumulate HTML template
// depending of type of player(hero|villain)
// Type your code here

const see = (playerObject) => {
  let player = document.createElement("div");
  player.classList.add("player");

  let name = document.createElement('div');
  name.className = 'name';
  name.textContent = playerObject.name;

  let strength = document.createElement('div');
  strength.textContent = playerObject.strength;
  strength.className = 'strength';

  let image = document.createElement("img");
  image.setAttribute("src", playerObject.image);
  image.setAttribute('alt', '');

  player.append(image, name, strength);
  return player;
}



const buildPlayers = (players, type) => {
  let fragment = document.createElement('div');
  players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(see(player)));
  return fragment.innerHTML;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
  document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
console.log(PLAYERS)