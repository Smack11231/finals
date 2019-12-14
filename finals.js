document.getElementById('money').value = "$";
function sub() {
    var money = document.getElementById("money").value;
    var healthy = document.getElementById("healthy");
    var tasty = document.getElementById("tasty");
    
    if(healthy.checked==true)
        alert("you have selected healthy");
    else if(tasty.checked==true)
        alert("you have selected tasty");
    else
        alert("Please select a healthy or tasty Option.");
}

// function ready() {
//     submit.onclick = function() {

//         // let elem = document.createElement('p');
//         // elem.innerHTML= "Huzzah";
//         // button.append(elem);
//     }
// }

// document.addEventListener("DOMContentLoaded", ready);