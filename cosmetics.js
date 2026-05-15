class CosmeticProduct {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  showInfo() {
    console.log(`${this.brand} - ${this.name}`);
  }
}

class Lipstick extends CosmeticProduct {
  constructor(name, brand, color) {
    super(name, brand);
    this.color = color;
  }

  showColor() {
    console.log(`${this.brand} - ${this.name} is in color ${this.color}`);
  }
}

const redLipstick = new Lipstick('Test', 'Brand', 'Red');
redLipstick.showInfo();
redLipstick.showColor();
