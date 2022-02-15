"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        if (items) {
            for (var a = 0; a < items.length; a++) {
                totalMass += items[a].massKg;
            }
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoMass = this.sumMass(this.cargoItems);
        var astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var hasCapacity = this.canAdd(cargo);
        if (hasCapacity) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var hasCapacity = this.canAdd(astronaut);
        if (hasCapacity) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
