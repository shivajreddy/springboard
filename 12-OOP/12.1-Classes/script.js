
// Part 1

class Vehicle{
    // properties
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };

    // methods
    honk(){
        return `${this.make} made in ${this.year} says Beep`
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }

};

// Part 2

class Car extends Vehicle{
    // properties
    constructor(ma,mo,yr){
        super(ma, mo, yr);
        this.numWheels = 4;
    }

}

// Part 3

class Motorcycle extends Vehicle{
    // properties
    constructor(ma, mo, yr) {
        super(ma,mo,yr);
        this.numWheels = 2;
    }

    // methods
    revEngine(){
        return 'VROOM!!!'
    }

}

// Part 4

class Garage{
    // properties
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    // methods
    add(veh){
        if (veh.constructor.name == 'Vehicle'){
            if(this.capacity > this.vehicles.length){
                this.vehicles.push(veh);
                return `vehicle is added`
            }
            else{return 'Sorry, we are full'}
        }
        else{
            return 'Only vehicles are allowed in here!'
        }
    }
};
