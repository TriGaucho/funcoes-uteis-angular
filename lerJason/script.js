// //função recebe o caminho de um arquivo JSON local e uma função de callback
// function leArquivoJSON(arquivo, funcaoCallback) {
//   var arquivoImportado = new XMLHttpRequest();
//   arquivoImportado.overrideMimeType("application/json");
//   arquivoImportado.open("GET", arquivo, true);
//   arquivoImportado.onreadystatechange = function() {
//       if (arquivoImportado.readyState === 4 && arquivoImportado.status == "200") {
//           funcaoCallback(arquivoImportado.responseText);
//       }
//   }
//   arquivoImportado.send(null);
// }

// //usabilidade
// leArquivoJSON("arquivo.json", function(text){
//   var dados = JSON.parse(text);
//   console.log(dados.sistemas[2]);
// });


//Forma limpa de importar os dados de um JSON
var leArquivo = new XMLHttpRequest();

leArquivo.open("GET", "arquivo.json", true);

leArquivo.addEventListener("load", function() {
  var arquivoJSON = leArquivo.responseText;
  console.log(arquivoJSON);

  var arquivoLido = JSON.parse(arquivoJSON);
  console.log(arquivoLido.relatorios[4].nomerelatorio);
});

leArquivo.send();
