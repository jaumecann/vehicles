"use strict";
function createCar() {
    var texto = document.getElementsByTagName('p')[1];
    while (texto.firstChild) {
        texto.removeChild(texto.firstChild);
    }
    var a = document.getElementsByName('plate')[0].value;
    var b = document.getElementsByName('color')[0].value;
    var c = document.getElementsByName('brand')[0].value;
    var car = new Car(a, b, c);
    var regExp = /(?=[A-Za-z]{3}\d{4})/.test(a);
    if (!regExp) {
        document.getElementsByTagName('p')[0].innerHTML = "La matrícula debe constar de 3 letras seguidas por 4 números";
    }
    else {
        document.getElementsByTagName('p')[0].innerHTML = "CAR:<br> PLATE: " + car.plate
            + "<br> COLOR: " + car.color + "<br> BRAND: " + car.brand;
    }
    // add wheels
    var w1 = document.getElementsByName('rueda1')[0].value;
    var w2 = document.getElementsByName('rueda2')[0].value;
    var w3 = document.getElementsByName('rueda3')[0].value;
    var w4 = document.getElementsByName('rueda4')[0].value;
    var d1 = document.getElementsByName('diam1')[0].value;
    var d2 = document.getElementsByName('diam2')[0].value;
    var d3 = document.getElementsByName('diam3')[0].value;
    var d4 = document.getElementsByName('diam4')[0].value;
    car.addWheel(new Wheel(d1, w1));
    car.addWheel(new Wheel(d2, w2));
    car.addWheel(new Wheel(d3, w3));
    car.addWheel(new Wheel(d4, w4));
    //getter
    var allWheels = car.four_wheels;
    for (var i = 0; i < allWheels.length; i++) {
        if (allWheels[i].diameter && allWheels[i].diameter < 0.4 || allWheels[i].diameter > 2) {
            texto.innerHTML += "<span style=\"color:red;\">El diametro de la rueda Rueda " + (i + 1) + " debe ser superior a 0.4 e inferior a 2 --> </span>";
        }
        texto.innerHTML += "Rueda " + (i + 1) + ": diametro (" + allWheels[i].diameter + "), marca (" + allWheels[i].brand + ")<br>";
    }
}
/*
function createWheel(){

    var texto = document.getElementsByTagName('p')[1];

    while (texto.firstChild) {
        texto.removeChild(texto.firstChild);
      }


    let w1 = document.getElementsByName('rueda1')[0].value;
    let w2 = document.getElementsByName('rueda2')[0].value;
    let w3 = document.getElementsByName('rueda3')[0].value;
    let w4 = document.getElementsByName('rueda4')[0].value;
    
    let d1 = document.getElementsByName('diam1')[0].value;
    let d2 = document.getElementsByName('diam2')[0].value;
    let d3 = document.getElementsByName('diam3')[0].value;
    let d4 = document.getElementsByName('diam4')[0].value;

    let car=new Car();

    car.addWheel(new Wheel(d1,w1));
    car.addWheel(new Wheel(d2,w2));
    car.addWheel(new Wheel(d3,w3));
    car.addWheel(new Wheel(d4,w4));

    
    var allWheels = car.four_wheels;
    

    for (let i=0; i<allWheels.length; i++){
        texto.innerHTML += `Rueda ${i+1}: diametro (${allWheels[i].diameter}), marca (${allWheels[i].brand})<br>`
    }





    
}


*/
