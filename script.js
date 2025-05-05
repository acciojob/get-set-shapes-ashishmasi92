//complete this code
class Rectangle {

	constructor(width,height){
		this.width=width
		this.height = height
		
	}

	getArea(){
		return this.width*this.height
	}
}

class Square extends Rectangle {

	constructor(side){
		super(side,side)
	}

	getPerimeter(){
		return 4*this.width
	}
}

let rect = new Rectangle(5,10)
console.log(rect.width)
console.log(rect.height)
console.log(rect.getArea())

const square = new Square(7)
console.log(this.width)
console.log(this.height)
console.log(this.getArea())
console.log(this.getperimeter())


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
