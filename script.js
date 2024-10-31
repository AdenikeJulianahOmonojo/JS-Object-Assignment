// Circle object definition
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Get user input for radius
const r = Number(prompt("Enter the circle radius:"));
const circle = new Circle(r); // Create a Circle object

// Output the results
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


// Account object definition
const account = {
    name: "Alex",
    balance: 0,
    
    // Method to credit or debit the account
    credit(value) {
        this.balance += value;
    },
    
    // Method to describe the account
    describe() {
        return `Account Name: ${this.name}, Balance: $${this.balance}`;
    }
};

// Show initial account description
console.log(account.describe());

// Credit 250
account.credit(250);
console.log("After crediting $250:");
console.log(account.describe());

// Debit 80
account.credit(-80);
console.log("After debiting $80:");
console.log(account.describe());