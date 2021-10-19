"use strict";

var radioSelect = document.getElementsByName("action");
var radioSelectPrev = document.getElementsByName("prev-options");
var radioSelectPrevAposenta = document.getElementsByName("prev-options-aposenta");

// confirmacao

function confirm()
{
var x;
var r=confirm("Escolha um valor!");
if (r==true)
  {
  x="você pressionou OK!";
  }
else
  {
  x="Você pressionou Cancelar!";
  }
}

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
      case 'aposenta':  document.getElementById('prev-options-aposenta-form-group').style.cssText = 'display: block;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'ppm':  document.getElementById('prev-options-aposenta-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: block;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'inc':  document.getElementById('prev-options-aposenta-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: block;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      break;

      case 'aac':  document.getElementById('prev-options-aposenta-form-group').style.cssText = 'display: none;';
                   document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                   document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: block;';
      break;
                  document.getElementById('prev-options-aposenta-form-group').style.cssText = 'display: none;';
                  document.getElementById('prev-options-pm').style.cssText = 'display: none;';
                  document.getElementById('prev-options-inc-ai').style.cssText = 'display: none;';
                  document.getElementById('prev-options-aac').style.cssText = 'display: none;';
      case 'cons': alert("Você será redirecionado a página de atendimento"); window.location.href = "https://calendly.com/brpl"
      break;
    }
  })
}


for(var indice = 0; indice < radioSelectPrevAposenta.length; indice++) {
  radioSelectPrevAposenta[indice].addEventListener('change', function () {
    if (this.checked) {
      console.log(`Checkbox ON = ${this.checked} ${this.value}`);
    }
    switch (this.value) {
      case 'aposenta-atc':  document.getElementById('prev-options-atc-tc').style.cssText = 'display: block;';
                   document.getElementById('prev-options-atc-aid').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
                   document.getElementById('aposenta-esp-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposenta-rur-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposentaservidor').style.cssText = 'display: none;';
      break;

      case 'aposenta-aid':  document.getElementById('prev-options-atc-tc').style.cssText = 'display: none;';
                   document.getElementById('prev-options-atc-aid').style.cssText = 'display: block;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
                   document.getElementById('aposenta-esp-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposenta-rur-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposentaservidor').style.cssText = 'display: none;';
      break;

      case 'aposenta-esp':  document.getElementById('prev-options-atc-tc').style.cssText = 'display: none;';
                   document.getElementById('prev-options-atc-aid').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
                   document.getElementById('aposenta-esp-div').style.cssText = 'display: block;';
                   document.getElementById('prev-options-aposenta-rur-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposentaservidor').style.cssText = 'display: none;';
      break;

      case 'aposenta-rur':  document.getElementById('prev-options-atc-tc').style.cssText = 'display: none;';
                   document.getElementById('prev-options-atc-aid').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
                   document.getElementById('aposenta-esp-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposenta-rur-div').style.cssText = 'display: block;';
                   document.getElementById('prev-options-aposentaservidor').style.cssText = 'display: none;';
      break;

      case 'aposenta-servidor':  document.getElementById('prev-options-atc-tc').style.cssText = 'display: none;';
                   document.getElementById('prev-options-atc-aid').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aac').style.cssText = 'display: none;';
                   document.getElementById('aposenta-esp-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposenta-rur-div').style.cssText = 'display: none;';
                   document.getElementById('prev-options-aposentaservidor').style.cssText = 'display: block;';
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

