// YOUR CODE HERE
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    
    honk() {
        console.log("LOUD HONK")
    }
@@ -26,15 +18,8 @@ class Car {

}
var myMuscleCar = new Car('Pontiac', 'Fiero', 1988)
myMuscleCar.performMaintenance() 