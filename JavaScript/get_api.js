let buttons = document.getElementsByClassName("buttons");

let api2 = "http://localhost/API-Assignment/PHP/api2.php?";
let api3 = "http://localhost/API-Assignment/PHP/api3.php?";
let api4 = "http://localhost/API-Assignment/PHP/api4.php?";

buttons[0].addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let api1 = "http://localhost/API-Assignment/PHP/api1.php?";
    document.getElementById("x_value").textContent = "X is equal to: ";
    document.getElementById("y_value").textContent = "Y is equal to: ";
    api1 += "x=" + x + "&y="  + y;
    getAPI1(api1);
});

async function getAPI1(url){
    const response = await fetch(url);
    const json_object = await response.json();
    document.getElementById("x_value").textContent += json_object.x;
    document.getElementById("y_value").textContent += json_object.y;
}