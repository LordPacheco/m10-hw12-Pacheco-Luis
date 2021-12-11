mocha.setup("bdd")
const expect = chai.expect

describe('ES6 Classes Assignment', () => {
  describe('Your Sweet \'88 chevy cobra', () => {
    after(() => logSpy.restore())
    it('should have been declared as "myMuscleCar"', () => {
      expect(myMuscleCar).to.exist
    })
    it('should come from Car class', () => {
      expect(myMuscleCar instanceof Car).to.be.true
    })
    it('should have "make" property', () => {
      expect(myMuscleCar).to.have.property('make')
    })
    it('should have "make" property of "chevy"', () => {
      expect(myMuscleCar.make.toLowerCase()).to.eq('chevy')
    })
    it('should have "model" property', () => {
      expect(myMuscleCar).to.have.property('model')
    })
    it('should have "model" property of "cobra"', () => {
      expect(myMuscleCar.model.toLowerCase()).to.eq('cobra')
    })
    it('should have "year" property', () => {
      expect(myMuscleCar).to.have.property('year')
    })
    it('should have "year" property of 1969', () => {
      expect(myMuscleCar.year).to.eq(1969)
    })
    it('should be a 1969 chevy cobra', () => {
      expect(myMuscleCar.make.toLowerCase()).to.eq('chevy')
      expect(myMuscleCar.model.toLowerCase()).to.eq('cobra')
      expect(myMuscleCar.year).to.eq(1969)
    })
    it('should have been honked once before maintenance', () => {
      expect(logSpy.firstCall.args[0].toLowerCase()).to.eq('honk!')
    })
    it('should have had a 3 second maintenance and log "where does this goes?" after honking', () => {
      expect(logSpy.secondCall).to.be.null
      clock.tick(3000)
      expect(logSpy.secondCall.args[0].toLowerCase()).to.eq('where does this goes?')
      clock.restore()
    })
  })

  describe('Car Class', () => {
    let car
    let logStub
    before(() => {
      car = new Car('Toyota', 'Supra', 2001)
    })
    beforeEach(() => {
      logStub = sinon.stub(console, 'log')
    })
    afterEach(() => sinon.restore())
    it('should create an object that is an instance of the Car class', function () {
      expect(car instanceof Car).to.be.true
    })
    it('should have "make" property', () => {
      expect(car).to.have.property('make')
    })
    it('should have "make" property equal to constructor value', () => {
      expect(car.make.toLowerCase()).to.eq('toyota')
    })
    it('should have "model" property', () => {
      expect(car).to.have.property('model')
    })
    it('should have "model" property equal to constructor value', () => {
      expect(car.model.toLowerCase()).to.eq('supra')
    })
    it('should have "year" property', () => {
      expect(car).to.have.property('year')
    })
    it('should have "year" property equal to constructor value', () => {
      expect(car.year).to.eq(2001)
    })
    it('should not have hard-coded properties', () => {
      car2 = new Car('Lambo', 'Aventador', 2010)
      expect(car2.make).to.eq('Lambo')
      expect(car2.model).to.eq('Aventador')
      expect(car2.year).to.eq(2010)
    })
    it('should have honk method that logs "honk!"', () => {
      car.honk()
      expect(logStub.called).to.be.true
      expect(logStub.firstCall.args[0].toLowerCase()).to.eq('honk!')
    })
    it('should have "performMaintenance" method that logs "where does this goes?" after 3 seconds', () => {
      const clock = sinon.useFakeTimers()
      car.performMaintenance()
      expect(logStub.called).to.be.false
      clock.tick(3000)
      expect(logStub.called).to.be.true
      expect(logStub.firstCall.args[0].toLowerCase()).to.eq('where does this goes?')
    })
  })
})

mocha.run()