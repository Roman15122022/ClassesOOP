
class Car {
    constructor(brand,color) {
        this.brand = brand;
        this.color = color;
    }
    start(){
        console.log(`${this.brand} -${this.color}- start!`);
    }
    stop(){
        console.log(`${this.brand} -${this.color}- STOP!`);
    }
    static discount(){
        console.log('Sale - 10%');
    }
    set rating(value){
        this.score = value.toUpperCase();
    }
    get rating(){
        return this.score;
    }
}
class Cars{
    constructor(brand) {
        this.brand = brand;
        this.gasTank = 100;
        this.refueling = [];
    }
    getGas(){
        this.gasTank +=10;
        const  stamp = Date.now();
        const time = new Date(stamp);
        this.refueling.push(time.toString());
        return this.gasTank;
    }
    drive(){
        this.gasTank -=10;
        return this.gasTank;
    }
}
class HybridCar extends Cars{
    constructor(brand,model){
        super(brand);
        this.model = model;


    }
}
const lexus = new HybridCar('Lexus', "RX");

const nissans = new Cars('Nissan');

const nissan = new Car('Nissan', 'yellow');

const tesla = new Car('Tesla', 'red');


