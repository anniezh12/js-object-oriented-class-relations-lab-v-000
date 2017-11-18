let driver_id = 0,passenger_id = 0,trip_id = 0;
let store = {drivers: [],passengers: [],trips: []};

class Driver
{

  constructor(name)
  {
    this.id = ++driver_id;
    this.name = name;
    store.drivers.push(this);
   }

   trips()
   {
   return store.trips.filter((trip) => {return trip.driverId == this.id});
   }

   passengers()
   {
    return  this.trips().map((trip) => {return trip.passenger();});//calling method passenger() in Trip class
   }


  }

class Passenger
{
   constructor(name)
   {
     this.name = name;
     this.id = ++passenger_id;
     store.passengers.push(this);
   }

   trips()
   {
     return store.trips.filter((trip) => {return trip.passengerId == this.id;});

   }

   drivers()
   {
    return  this.trips().map((trip) => {return trip.driver();});
   }

}


class Trip
{
   constructor(driver,passenger) {
     this.id = ++trip_id
     this.driverId = driver_id;
     this.passengerId = passenger_id;
     store.trips.push(this);

   }

   driver()
   {
    return store.drivers.find((d) =>{return d.id == this.driverId;});
   }

   passenger()
   {
     return store.passengers.find((p) => {return p.id==this.passengerId;});
   }

}
