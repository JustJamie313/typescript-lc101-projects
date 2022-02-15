import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string,totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]):number{
        let totalMass: number = 0;
        if(items){
            for(let a=0;a<items.length;a++){
                totalMass += items[a].massKg;
            }
        }
        return totalMass;
    }
    currentMassKg():number{
        let cargoMass = this.sumMass(this.cargoItems);
        let astronautMass = this.sumMass(this.astronauts);
        return cargoMass+astronautMass;
    }
    canAdd(item: Payload): boolean{
        return this.currentMassKg()+item.massKg<=this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean{
        let hasCapacity = this.canAdd(cargo);
        if(hasCapacity){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean{
        let hasCapacity = this.canAdd(astronaut);
        if(hasCapacity){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}