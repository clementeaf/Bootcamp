class Animal {
    constructor(name, Number_of_legs, food){
        this.name = name;
        this.Number_of_legs = Number_of_legs; 
        this.food = food;
    }
    
    sendToEat(){
        console.log(`This animal is ${this.name} has ${this.Number_of_legs} legs and eats ${this.food}`);
    }
}

const ani = new Animal("cat", "4", "fish");
const ani2 = new Animal("Dog", "4", "Pellet");
const ani3 = new Animal("fish", "none", "plants");
ani2.sendToEat();

