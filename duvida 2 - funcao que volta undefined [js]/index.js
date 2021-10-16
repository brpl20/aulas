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
  radioSelect[indice].addEventListener('change', function () {
    if (this.checked) {
      console.log(`Checkbox ON = ${this.checked} ${this.value}`);
    }
    switch (this.value) {
      case 'prev': document.getElementById('prev-options').style.cssText = 'display: block;';
                   document.getElementById('civ-options').style.cssText = 'display: none;';
                   document.getElementById('tri-options').style.cssText = 'display: none;';
                   document.getElementById('adm-options').style.cssText = 'display: none;';
      break;

      case 'civ': document.getElementById('prev-options').style.cssText = 'display: none;';
                  document.getElementById('civ-options').style.cssText = 'display: block';
                  document.getElementById('tri-options').style.cssText = 'display: none;';
                  document.getElementById('adm-options').style.cssText = 'display: none;';
      break;

      case 'tri': document.getElementById('prev-options').style.cssText = 'display: none;';
                  document.getElementById('civ-options').style.cssText = 'display: none';
                  document.getElementById('tri-options').style.cssText = 'display: block;';
                  document.getElementById('adm-options').style.cssText = 'display: none;';
      break;

      case 'adm': document.getElementById('prev-options').style.cssText = 'display: none;';
                  document.getElementById('civ-options').style.cssText = 'display: none';
                  document.getElementById('tri-options').style.cssText = 'display: none;';
                  document.getElementById('adm-options').style.cssText = 'display: block;';
      break;
    }
  })
}



/*

item.addEventListener('change', function() {
  if (this.checked) {
    console.log(`Checkbox ON ${this.checked} ${this.value}`);
      // find ids PREV
        // split "-" if atc-mas-ms(-1) remove class
          // repetir WHILE
      } else {
    console.log(`Checkbox OFF ${this.checked} ${this.value}`);
  }
});*/

// Duvida 03 : Porque ele volta Undefined?
// Se colocar return antes da function funciona...
// Creio que deveria usar outra função aqui, tipo arrow?

