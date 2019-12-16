function sub() {
    var money = document.getElementById("money").value;
    var healthy = document.getElementById("healthy");
    var tasty = document.getElementById("tasty");
    let elem = document.createElement('h3');
    // let random = [taste1,taste2];
    let tasty2 = [" a burger for $2.50!"," a slice of pizza for $2.50!"," a tray of chicken nuggets for $2.50!"];
    var taste2 = tasty2[Math.floor(Math.random()*tasty2.length)];
    let tasty2b = [" a burger for $2.50"," a slice of pizza for $2.50"," a tray of chicken nuggets for $2.50"];
    var taste2b = tasty2b[Math.floor(Math.random()*tasty2b.length)];
    let sides = [" a bag of chips for $1.25!"," a cookie for $0.75!"];
    var side = sides[Math.floor(Math.random()*sides.length)];
    let sides2 = [" a bag of chips for $1.25!"," a cookie for $0.75!", "a cup of fries for $1.50!"];
    var side2 = sides2[Math.floor(Math.random()*sides2.length)];
    let choices = [taste2b +" and "+ side2, "a bag of bosco sticks for $2.75 " + side2, taste2b+" and "+side2, "a bag of breadsticks for $3.50 and a cookie for $0.75!", "a container of Mac & Cheese for $3.00!"]
    var choice = choices[Math.floor(Math.random()*choices.length)];
    let choices2 = [taste2b +" and "+ side2, "a bag of bosco sticks for $2.75 and " + side2, taste2b+" and "+side2, "a bag of breadsticks for $3.50 and a cookie for $0.75!", "a container of Mac & Cheese for $3.00 "+side2, "a subway sandwich for $4.50!", taste2b+" and "+side2]
    var choice2 = choices2[Math.floor(Math.random()*choices2.length)];
    if(healthy.checked==true)
        if (money>3.99) {
            elem.innerHTML= "Try a small salad or fruit tray from the bar for $2.00, or a large one for $4.00!";
        } else if(money>=2 && money<4) {
            elem.innerHTML= "Try a small salad or fruit from the bar for $2.00!";
        } else if(money<2 && money>0.01) {
            elem.innerHTML="Sorry you can't afford anything healthy. Try a bag of chips for $1.25 or a cookie for $0.75.";
        } else {
            alert("please enter a positive numerical value into the field.")
        }
    else if(tasty.checked==true)
        if (money>=0.75 && money<1.25)
            elem.innerHTML= "Sorry, the only thing you can afford here is a $0.75 cookie.";
        else if (money<2.5 && money >= 1.25)
            elem.innerHTML= "Try a cookie for $0.75, bag of chips for $1.25, or a cup of fries for $1.50!";
        else if(money>=2.5 && money <3.75)
            elem.innerHTML="Try"+taste2+"<br> Or if you're feeling the need for sugar, try a pack of three cookies for $2.00!";
        else if (money>=3.75  && money<4)
            elem.innerHTML="Try"+taste2+" and "+side;
        else if (money>=4 && money<4.5)
            elem.innerHTML="Try "+choice;
        else if (money>=4.5)
            elem.innerHTML="Try "+choice2; 
        else
            alert("Sorry, there was an error completing your request.");
    else
        alert("Please select a healthy or tasty option.");
    ;
    event.preventDefault();
    result.append(elem);
}