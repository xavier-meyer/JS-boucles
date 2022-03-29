/* afficher les fruits grace à une boucle en HTML*/

let fruits =["banane", "framboise", "pomme", "fraise", "poire","orange","melon","pasteque"];

//exemple boucle forEach
let i = 0;
fruits.forEach(fruit => {
    console.log(fruit[i]);
   document.getElementById("fruits").innerHTML += fruit[i];
});

//boucle for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
    document.getElementById("fruits").innerHTML += fruits[i];
}

/*afficher avec une boucle les nombres jusqu'a la valeur de numbers en HTML*/

let numbers = 25;

for ( let i = 0; i < numbers; i++){
    console.log(i);
    document.getElementById("nombres").innerHTML += i + " ";
}

/* afficher les chiffres jusqu'à la valeur de stop en HTML*/
let stop = 100;
for( let i = 0; i <= stop; i++){
    console.log(i);
    document.getElementById("variables").innerHTML += i + " ";
}

/* faire boucle de 0 à 10 et afficher victory*/
let numbersTotal = 10;

for( let i = 0; i <= 10; i++){
    console.log(i);
    document.body.innerHTML += i + " ";
    if(i == 7){
        console.log("victory");
    }else{
        console.log("defaite");
    }
}

/* afficher la liste de 0 à 72 à chaque appui sur le bouton*/
let button = document.getElementById("button");
let div = document.createElement("div");
document.body.appendChild(div);

let nbMax = 72;
//opérateur ternaire => afficher nombre pair
function countNumber(){
    for( let i = 0; i <= nbMax; i++){
        if((i%2) == 0){
        div.innerHTML += i + " ";
        }
    }
}
button.addEventListener("click", function(){
    countNumber();
})

/* afficher les éléments du tableau en liste*/
let courses = ["savon", "éponge", "dentifrice", "sopalin", "farine", "oeuf", "miel", "pain"];
let liste = document.getElementById("list");

for( let i = 0; i < courses.length; i++){
   liste.innerHTML += "<li>" + courses[i] + "</li>";
}