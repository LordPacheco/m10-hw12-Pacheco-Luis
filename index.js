// YOUR CODE HERE

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    honk() {
        console.log("honk!")
    }
    performMaintenance() {
        setTimeout(function() {
            console.log("where does this goes?")
        }, 3000)
    }
 
}

var myMuscleCar = new Car('chevy', 'cobra', 1969)

myMuscleCar.honk()

myMuscleCar.performMaintenance()