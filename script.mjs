class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        console.log(`Rectangle Area: ${this.calculateArea()}`);
        console.log(`Rectangle Perimeter: ${this.calculatePerimeter()}`);
    }
}
const myRectangle = new Rectangle(5, 8);
myRectangle.displayInfo();