// notas e testes não utilizados

"use strict";

let form1 = ["Opções do Direito Previdenciário"];
let form1Options = ["Previdenciário", "Cível", "Tributário", "Administrativo"];
let form1Skeleton = function (header) {
  `<h1>${header}</h1>`
};
let startingPoint = document.getElementById("starting");
var radioSelect = document.getElementsByName("action");

// for each
for(let item of form1)
  startingPoint.insertAdjacentHTML('afterend', form1Skeleton(form1));

// for normal
// quando importante índice
// inicio ; verdadeiro-falso; incremento/decr
for(var indice = 0; indice < radioSelect.length; indice++) {
  if(radioSelect[indice].checked){
    if(radioSelect[indice].value == 'prev'){
      startingPoint.insertAdjacentHTML('afterend', "<h1>header test</h1>");
    }
  }
}


// ver o buraco 
// dif. display none etc 

let form1 = ["Opções do Direito Previdenciário"];
let form1Options = ["Previdenciário", "Cível", "Tributário", "Administrativo"];
let form1Skeleton = function (header) {
  `<h1>${header}</h1>`
};
let startingPoint = document.getElementById("starting");

// for each
for(let item of form1)
  startingPoint.insertAdjacentHTML('afterend', form1Skeleton(form1));


// Ver Boostrap 5.1
//
