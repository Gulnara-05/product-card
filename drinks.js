export class Drink {
    #temperature; 

    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} руб.`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(newTemp) {
        this.#temperature = newTemp;
    }

    #prepare() {
        console.log(`>>> Готовим ${this.name}...`);
    }

    serve() {
        this.#prepare();
        console.log(`>>> ${this.name} подан! Температура: ${this.#temperature}°C`);
    }
}

export class Coffee extends Drink {
    constructor(name, size, price, temperature, beans) {
        super(name, size, price, temperature);
        this.beans = beans;
    }
    getInfo() {
        return `${super.getInfo()} [Зерна: ${this.beans}]`;
    }
}

export class Tea extends Drink {
    constructor(name, size, price, temperature, type) {
        super(name, size, price, temperature);
        this.type = type;
    }
}
