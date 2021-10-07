"use strict";

let form1 = ["Formulário de TESTE"];
let form1Options = ["Previdenciário", "Cível", "Tributário", "Administrativo"];
let form1Skeleton = function (header) {
  return `<h1>${header}</h1>`
};

let form1SkeletonOptions = function (item, tipe) {
  let itemId = item.toLowerCase.substring(0, 4)
  return `
      <input type="${tipe}" id="${itemId}" name="${itemId}-options" value="atc" />
      <label for="aposentadoria">Aposentadoria</label><br />
  `
};


let startingPoint = document.getElementById("starting");
let formInsert = document.getElementById("adm");


for(let item of form1)
  //startingPoint.insertAdjacentHTML('afterend', form1Skeleton(form1));
  formInsert.insertAdjacentHTML('afterend', form1SkeletonOptions(form1Options[0], 'radio'));


// Duvida
// Uncaught TypeError: item.toLowerCase.substring is not a function
// Não é função ? 