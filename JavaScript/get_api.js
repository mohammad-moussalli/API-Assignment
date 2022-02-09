let buttons = document.getElementsByClassName("buttons");

buttons[0].addEventListener("click", function(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let api1 = "http://localhost/API-Assignment/PHP/api1.php?";
    document.getElementById("Value1").textContent = "The equation is: ";
    api1 += "x=" + x + "&y="  + y;
    getAPI1(api1);
});

async function getAPI1(url){
    const response = await fetch(url);
    const json_object = await response.json();
    document.getElementById("Value1").textContent += "2 * "+ json_object.x +" + " + json_object.y + " % 2";
    
}

buttons[1].addEventListener("click", function(){
    let palindrome = document.getElementById("palindrome").value;
    let api2 = "http://localhost/API-Assignment/PHP/api2.php?";
    document.getElementById("palindrome_value").textContent = "The string inputed is";
    api2 += "original_string="+palindrome;
    getAPI2(api2);
});

async function getAPI2(url){
    const response = await fetch(url);
    const json_object = await response.json();
    if(json_object.palindrome == true){
        document.getElementById("palindrome_value").textContent += " a palindrome.";
    }else{
        document.getElementById("palindrome_value").textContent += " not a palindrome.";
    }
}

buttons[2].addEventListener("click", function(){
    let white_spaces = document.getElementById("white_spaces").value;
    let api3 = "http://localhost/API-Assignment/PHP/api3.php?";
    document.getElementById("white_spaces_value").textContent = "The clean string is: ";
    api3 += "original_str=" + white_spaces;
    getAPI3(api3); 
});

async function getAPI3(url){
    const response = await fetch(url);
    const json_object = await response.json();
    document.getElementById("white_spaces_value").textContent += json_object.clean_str;
}

buttons[3].addEventListener("click", function(){
    let password = document.getElementById("password").value;
    let api4 = "http://localhost/API-Assignment/PHP/api4.php?";
    document.getElementById("password_value").textContent = "The password is ";
    api4 += "password=" + password;
    getAPI4(api4); 
});

async function getAPI4(url){
    const response = await fetch(url);
    const json_object = await response.json();
    if(json_object.password_validity == true){
        document.getElementById("password_value").textContent += "valid.";
    }else{
        document.getElementById("password_value").textContent += "not valid.";
    }
}