const character = {
  name: "Shadow Knight",
  level: 4,
  health: 100,
  weapon: "Dark Sword"
}

character.level = character.level + 1
character.isAlive = true;
character.health = character.health - 20;

console.log(character)



const player = {
  username: "Neo",
  level: 12,
  weapon: "Plasma Gun",
  rank: "Diamond"
};

function describePlayer(player) {
  const {
    username,
    level,
    weapon
  } = player;
  return `Player ${username} is level ${level} and uses ${weapon}.`;
}

describePlayer(player)


const inventory = [
  { name: "Health Potion", price: 10, quantity: 5 },
  { name: "Mana Potion", price: 15, quantity: 3 },
  { name: "Iron Sword", price: 100, quantity: 1 },
  { name: "Shield", price: 80, quantity: 1 }
];

const totalValue = inventory.reduce((total, item) => {
  return total + item.price * item.quantity
}, 0)

console.log(totalValue)

const items = [
  { name: "Wooden Stick", rarity: "common" },
  { name: "Dragon Blade", rarity: "legendary" },
  { name: "Silver Bow", rarity: "rare" },
  { name: "Old Boots", rarity: "common" },
  { name: "Phoenix Ring", rarity: "legendary" }
];

const names = items.filter((item) => {
  const { rarity } = item;
  if (rarity === "rare" || rarity === "legendary") {
    return true;
  }
  return false;
}).map((item) => {
  return item.name
})

console.log(names)