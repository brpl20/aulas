function myFunction() {
  // CONFIG INITI 
  var FILE = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Plv-jX3URkMm50IGWdmEPM7tBY6HoPhdkllnL9vpV3o/edit#gid=1461330122");
  var CONTENT = FILE.getSheetByName("r2--tests");
  
  // CONFIG GETRANGE
  var value = CONTENT.getRange("H11").getValue();

  // ToDO: Criar uma proteção para celular já trabalhadas se não tiver espaço   
  var splited = value.split(" ");

  // Lógica para ver o "D e C" e alterar a célula
  if (splited[1] === "D"){
    splited = `-${splited[0]}`
    console.log(splited);
    let x = CONTENT.getRange("H11").setValue(splited);
  } else {
    splited = splited[0].toString();
    console.log(splited);
    let x = CONTENT.getRange("H11").setValue(splited);
  }


};


// dificuldade => fazer com que funcione em toda a coluna e não só no H11 por exemplo 
