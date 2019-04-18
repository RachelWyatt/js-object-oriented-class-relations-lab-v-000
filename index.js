let driverId = 0
let passengerId = 0
let tripId = 0
let store = { drivers: [], passengers: [], trips: [] };
class Driver {
    constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name ;
    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passender) {
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    this.id = ++tripId;
    store.trips.push(this);
  }
}