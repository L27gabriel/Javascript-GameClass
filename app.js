class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;
    switch (this.type) {
      case "mago":
        attack = "magia";
        break;
      case "guerreiro":
        attack = "espada";
        break;
      case "monge":
        attack = "artes marciais";
        break;
      case "ninja":
        attack = "shuriken";
        break;
      default:
        attack = "sem ataque definido";
    }

    console.log(`O ${this.type} atacou usando ${attack}`);
  }
}

const hero1 = new Hero("Heroi 1", 45, "mago");
const hero2 = new Hero("Heroi 1", 37, "ninja");

hero1.attack();
hero2.attack();
