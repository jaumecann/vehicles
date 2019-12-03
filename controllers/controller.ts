

function createCar(){


    let a = document.getElementsByName('plate')[0].value;
    let b = document.getElementsByName('color')[0].value;
    let c = document.getElementsByName('brand')[0].value; 
    
    let w1 = document.getElementsByName('rueda1')[0].value; 
    let w2 = document.getElementsByName('rueda2')[0].value; 
    let w3 = document.getElementsByName('rueda3')[0].value; 
    let w4 = document.getElementsByName('rueda4')[0].value; 
    
    let d1 = document.getElementsByName('diam1')[0].value; 
    let d2 = document.getElementsByName('diam2')[0].value; 
    let d3 = document.getElementsByName('diam3')[0].value; 
    let d4 = document.getElementsByName('diam4')[0].value;
    
    let car=new Car(a, b, c);

    document.getElementsByTagName('p')[0].innerHTML="CAR:<br> PLATE: " + car.plate
    + "<br> COLOR: " +car.color + "<br> BRAND: " + car.brand; 

    car.addWheel(new Wheel(d1,w1));
    car.addWheel(new Wheel(d2,w2));
    car.addWheel(new Wheel(d3,w3));
    car.addWheel(new Wheel(d4,w4));

    
    var brandTest = car.four_wheels[0].brand;
    document.getElementById('wheel_text').onclick = function () {
    document.getElementsByTagName('p')[1].innerHTML = brandTest;
    };
    

    //var all = car.four_wheels;




    //+ "<br> WHEELS: " + JSON.stringify(car.wheels); 

    //document.getElementsByTagName('p')[1].innerHTML=  all[0].brand;  

  
   
   /*"WHEELS:<br> Rueda 1, marca:" + car.wheels[0].brand + ", diámetro:" + car.wheels[0].diameter*/
   
}





