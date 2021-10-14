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
      case 'prev': document.getElementById('prev-options').style.cssText = 'visibility: visible;';
                   document.getElementById('prev-options').style.cssText = 'visibility: visible;';
                   document.getElementById('prev-options').style.cssText = 'visibility: visible;';
                   document.getElementById('prev-options').style.cssText = 'visibility: visible;';
      break;
      case 'prev': document.getElementById('prev-options').style.cssText = 'visibility: visible;';
      break;
      case 'prev': document.getElementById('prev-options').style.cssText = 'visibility: visible;';
      break;
      case 'prev': document.getElementById('prev-options').style.cssText = 'visibility: visible;';
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

