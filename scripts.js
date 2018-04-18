
console.log("this works");

//prompt("Hello");


//     var mood = prompt("How are you"), {
//         prompt = ("How are you?");
//         console.log("I am " + mood + " too!");     
// }
var greeting = hi;

function hi(){
    var mood = prompt("How are you?");
    // prompt("How are you?")
    alert ("I am " + mood + " too!");

}

function tonight(){
   var action = prompt("what are you doing tonight?")
    alert (action + " must be fun!")
}

function response(){
    if (hi === "good"){
        tonight();
    }
    else ("Have a good day!");
}
hi();
response();
