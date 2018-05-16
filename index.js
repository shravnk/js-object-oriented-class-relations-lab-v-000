let driverId = 0
let passengerId = 0
let tripId = 0

let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(self)
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(self)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return store.drivers.filter(driver: {
      return trip.driverId === this.id
    })
  }
}

class Trip {
  constructor(name, driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(self)
  }

  driver() {
    return store.drivers.find(driver: {
      return trip.driverId === this.id
    })
  }

  passenger() {
    return store.passengers.filter(passenger: {
      return passenger.driverId === this.id
    })
  }
}
