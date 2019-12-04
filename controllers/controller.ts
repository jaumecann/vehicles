

function createCar(){


    let a = document.getElementsByName('plate')[0].value;
    let b = document.getElementsByName('color')[0].value;
    let c = document.getElementsByName('brand')[0].value; 
    
    let car=new Car(a, b, c);

    document.getElementsByTagName('p')[0].innerHTML="CAR:<br> PLATE: " + car.plate
    + "<br> COLOR: " +car.color + "<br> BRAND: " + car.brand; 
   
}

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




