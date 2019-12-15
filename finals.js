function sub() {
    var money = document.getElementById("money").value;
    var healthy = document.getElementById("healthy");
    var tasty = document.getElementById("tasty");
    let elem = document.createElement('p');
    // let random = [taste1,taste2];
    let tasty2 = [" a burger for $2.50!"," a hotdog for $2.50!"," a slice of pizza for $2.50!"," a tray of chicken nuggets for $2.50!"];
    var taste2 = tasty2[Math.floor(Math.random()*tasty2.length)];
    let tasty375 = [" a burger for $2.50"," a hotdog for $2.50"," a slice of pizza for $2.50"," a tray of chicken nuggets for $2.50"," a bag of breadsticks from pizza hut for $3.50"];
    var taste375 = tasty375[Math.floor(Math.random()*tasty375.length)];
    let sides = [" a bag of chips for $1.25!"," a cookie for $0.75!"];
    var side = sides[Math.floor(Math.random()*sides.length)];
    // var tasty2 = ["Pizza Hut Breadsticks", "stuff"];
    if(healthy.checked==true)
        if (money>3.99)
            elem.innerHTML= "Try a small salad or fruit tray from the bar for $2.00, or a large one for $4.00!";
        else if(money>=2 && money<4)
            elem.innerHTML= "Try a small salad or fruit from the bar for $2.00!";
        else if(money<2 && money>0.01)
            elem.innerHTML="Sorry you can't afford anything healthy. Not sorry.";
        else 
            alert("please enter a positive numerical value into the field.")
    else if(tasty.checked==true)
        if(money==2.5)
            elem.innerHTML="Try"+taste2;
        else if (money>=3.75  && money<4.5)
            elem.innerHTML="Try"+taste375+" and "+side;
        else
            alert("nope");
    else
        alert("Please select a healthy or tasty option.");
    ;
    event.preventDefault();
    result.append(elem);
}