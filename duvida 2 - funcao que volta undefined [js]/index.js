"use strict";

var radioSelect = document.getElementsByName("action");
var radioSelectPrev = document.getElementsByName("prev-options");


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

for(var indice = 0; indice < radioSelectPrev.length; indice++) {
  radioSelectPrev[indice].addEventListener('change', function () {
    if (this.checked) {
      console.log(`Checkbox ON = ${this.checked} ${this.value}`);
    }
    switch (this.value) {
      case 'atc':  document.getElementById('prev-options-atc-form-group').style.cssText = 'display: block;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'ppm':  document.getElementById('prev-options-atc-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: block;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'inc':  document.getElementById('prev-options-atc-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: block;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'aac':  document.getElementById('prev-options-atc-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: block;';
      break;
      case 'cons': window.location.href = "https://calendly.com/brpl"
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

