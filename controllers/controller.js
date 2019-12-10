"use strict";
var car;
function createCar() {
    var p1 = document.getElementsByTagName('p')[0];
    var a = document.getElementsByName('plate')[0].value;
    var b = document.getElementsByName('color')[0].value;
    var c = document.getElementsByName('brand')[0].value;
    car = new Car(a, b, c);
    var regExp = /(?=[A-Za-z]{3}\d{4})/.test(a);
    if (a.length == 0 || b.length == 0 || c.length == 0) {
        p1.innerHTML = "Por favor, completa toda la información";
    }
    else if (!regExp) {
        p1.innerHTML = "La matrícula debe constar de 3 letras seguidas por 4 números";
    }
    else {
        p1.innerHTML = "CAR:<br> PLATE: " + car.plate
            + "<br> COLOR: " + car.color + "<br> BRAND: " + car.brand;
    }
}
;
function addWheels() {
    var p2 = document.getElementsByTagName('p')[1];
    while (p2.firstChild) {
        p2.removeChild(p2.firstChild);
    }
    // add wheels
    car.addWheel(new Wheel);
    car.addWheel(new Wheel);
    car.addWheel(new Wheel);
    car.addWheel(new Wheel);
    //getter de car
    var allWheels = car.four_wheels;
    for (var i = 0; i < allWheels.length; i++) {
        allWheels[i].diameter = document.getElementsByName("diam" + (i + 1))[0].value;
        allWheels[i].brand = document.getElementsByName("rueda" + (i + 1))[0].value;
        if (allWheels[i].diameter.toString().length == 0 && allWheels[i].brand.length == 0) {
            p2.innerHTML += "";
        }
        else if (allWheels[i].diameter && allWheels[i].diameter < 0.4 || allWheels[i].diameter > 2 || isNaN(allWheels[i].diameter)) {
            p2.innerHTML += "<span style=\"background-color:yellow; color:#800000; padding: 1px; margin:5px 0;\">El diametro de la rueda Rueda " + (i + 1) + " debe ser superior a 0.4 e inferior a 2 <br> </span>";
        }
        else {
            p2.innerHTML += "Rueda " + (i + 1) + ": diametro (" + allWheels[i].diameter + "), marca (" + allWheels[i].brand + ")<br>";
        }
    }
}
