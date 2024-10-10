console.clear();

let inputs = document.querySelectorAll("input")
let answers = document.querySelectorAll(".answer")

function task1(){
    let f = inputs[0].value;
    let c = (f - 32) * 5/9;
    answers[0].innerHTML = c.toFixed(1) + "&deg;" + "C"
}


console.log("Температура по цельсію рівна ${celsium.toFixed(2)}")





function task2(){
    let d = inputs[1].value;
    let h = d * 24
    let m = h * 60
    answers[1].textContent = h + " годин " + m + " хвилин"
}


let health = 100
let energy = 100

function task3(){
    health = health - 10
    energy = energy - 10
    answers[2].textContent = `Здоровя - ${health}. Енергія - ${energy}.`
    if (health == 0 ){
      inputs[2].value = "Герой загинув"
    }
}


function task4(){
   let sum = inputs[3].value;
   answers[3].textContent = sum - (sum / 100 * 10) + " грн."
}


function task5(){
    let number = inputs[4].value;
    answers[4].textContent = Math.floor(number) 
 }

 function task6(){
    let number = inputs[5].value;
    answers[5].textContent = parseFloat(number) 
 }

 function task7(){
    let number = inputs[6].value;
    answers[6].textContent = parseInt(number) 
 }

 function task8(){
    let number = inputs[7].value;
    answers[7].textContent = Math.sqrt(number) 
 }

 function task9(){
    let number = parseInt(inputs[8].value);
    let line = inputs[8].value;
    answers[8].textContent = "сума = " + (number + number) + " конкатенація = " + line + line
 }
