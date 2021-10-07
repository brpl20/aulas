"use strict";

let form1 = "Formulário de TESTE";
let form1Options = ["Previdenciário", "Cível", "Tributário", "Administrativo"];
let form1Skeleton = function (header) {
  `<h1>${header}</h1>`
};
let startingPoint = document.getElementById("starting");


for(let item of form1)
  startingPoint.insertAdjacentHTML('afterend', form1Skeleton(form1));


// Duvida 03 : Porque ele volta Undefined?
// Se colocar return antes da function funciona...
// Creio que deveria usar outra função aqui, tipo arrow?
