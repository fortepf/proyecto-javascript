class personaje {
    constructor(nombre, vida, mana, damage, pocion) {
    this.name = nombre;
    this.health = vida;
    this.mana = mana;
    this.damage = damage;
    this.pocion = pocion;
    }
    usarCurar () {
        if (this.pocion === true) {
            return "Puedes usar una poción curativa"
        } if (this.pocion === false) {
            return "No tienes ninguna poción curativa"
        }
    }
}

let berserker = new personaje("Berserker", 700, 300, 50, false)
let sorcerer = new personaje("Sorcerer", 580, 800, 65, true)
let gunslinger = new personaje("Gunslinger", 400, 500, 90, true)


console.table(berserker)
console.table(sorcerer)
console.table(gunslinger)

console.log(berserker.usarCurar())
console.log(sorcerer.usarCurar())
console.log(gunslinger.usarCurar())

