const fs = require("fs");
const path = require("path");

// criar uma pasta

/*fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error){
     return   console.log("Erro: " + error)
    }

    console.log('Pasta criada com sucesso')
})*/

fs.writeFile(
  path.join(__dirname, "test", "test.html"),
  "<h1>Ola mundo!</h1>",
  (error) => {
    if (error) {
      return console.log("Error: " + error);
    }
    console.log("Arquivo criado com sucesso!");
    //adiciona conteudo no arquivo existente sem sobrescrever
    fs.appendFile(
      path.join(__dirname, "test", "test.html"),
      " Hello world",
      (error) => {
        if (error) {
          return console.log("Error: " + error);
        }
        console.log("Arquivo adicionado com sucesso!");
      }
    );
    fs.readFile(
      path.join(__dirname, "/test", "test.html"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Error: " + error);
        }
        console.log(data);
      }
    );
  }
);
