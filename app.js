//console.log("Hello Mah Boi");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var rsp1 = document.getElementById("response1");
var rsp2 = document.getElementById("response2");
var rsp3 = document.getElementById("response3");

var favoriteDesserts = ["Apple Pie", "Cookie", "Pound Cake"];
var favoriteFoods = ["Macaroni & Cheese", "Chicken", "Carbohydrates"];
var favoriteGames = ["Destiny 1", "PUBG", "Overwatch"];

btn1.addEventListener("click", function(){
    rsp1.innerHTML = "Look in the console!"
    for(i=0; i<favoriteDesserts.length; i++) {
        console.log(favoriteDesserts[i])
    };
});

btn2.addEventListener("click", function(){
    rsp2.innerHTML = "Look in the console!"
    for(i=0; i<favoriteFoods.length; i++) {
        console.log(favoriteFoods[i])
    };
});

btn3.addEventListener("click", function(){
    rsp3.innerHTML = "Look in the console!"
    for(i=0; i<favoriteGames.length; i++) {
        console.log(favoriteGames[i])
    };
});