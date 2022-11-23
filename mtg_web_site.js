"use strict";

// import users from "./temp2.json" assert{type:'json'}; 
// console.log(users); 


fetch("./temp2.json").then(function(resp){
    return resp.json();
}).then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = ""; 
    var output = document.getElementById('outpt'); 
    console.log(data);
})






// const btn= document.querySelector(".btn"); 
// const output =document.querySelector(".output"); 

// btn.onclick = ()=>{
//     getData(); 
// }

// function getData(){
//     fetch("./temp2.json").then(function(resp){
//         return resp.json();
//     })

// }


// fetch("./temp2.json").then(function(resp){
//     return resp.json();
// }).then(function(data){
//     console.log(data);
// })

// function appendData(data){
// var mainContainter=document.getElementById("myData");
// var div = document.createElement("div");
// for(var i=0; i<data.length;i++){

//     div.innerHTML = "Mana Cost: " + data[i].manaCost + "\n"
//     + "Power: "+data[i].power+ "\n";
//     mainContainter.appendChild(div);   
//     //append each item to our page
// }
// }