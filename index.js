let driverId = 0
let passengerId = 0
let tripId = 0

let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
  }
}

class Trip {
  constructor(name, driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
  }


}
