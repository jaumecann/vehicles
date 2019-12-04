"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    Object.defineProperty(Car.prototype, "four_wheels", {
        get: function () {
            return this.wheels;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
