class LegoMan{
    constructor(name,age,weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    hello(){
        console.log(`Hello, ${this.name}!`);
    }
    bmi(){
        let ans = this.weight/this.height**2;
        console.log(`Your bmi: ${Math.round(ans)} `);
    }
}

const roma = new LegoMan('Roma', 18, 77, 1.77);

roma.hello();
roma.bmi();
