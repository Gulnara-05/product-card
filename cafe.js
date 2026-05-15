export class Cafe {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    showWelcome() {
        console.log(`--- Добро пожаловать в "${this.name}"! ---`);
        console.log(`Адрес: ${this.address}`);
    }

    order(drink) {
        console.log(`--- Новый заказ: ${drink.name} ---`);
        console.log(drink.getInfo());
        drink.setTemperature(90);
        drink.serve();
    }
}
