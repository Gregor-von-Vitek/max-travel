class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Hello there " + this.name + " hahaha " + this.favoriteColor + " ohoho");
    }
}

export default Person