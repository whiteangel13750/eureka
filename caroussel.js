console.log("Hello World");

var carousel = document.querySelector(".carousel");
console.log(carousel);

var position = 0;
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")



prev.addEventListener("click", function (){
   rotate(60)
})
next.addEventListener("click", function (){
   rotate(-60)   
})


function rotate(direction){
    position+= direction
    carousel.style.transform ="RotateY("+ position + "deg)";
}

 


// function moyenne(notes) {
//     var somme = 0;
//     var len = notes.length;
//     for(var i =0; i<len; i++) {
//        somme += parseInt(notes[i]);
// }
//     return somme/len;
// }
// var notesAlice = [16,12,15];
// var notesBob = [7,8,10,19];
// var moyenneAlice = moyenne(notesAlice);
// var moyenneBob = moyenne(notesBob);

// console.log(moyenneAlice);
// console.log(moyenneBob);