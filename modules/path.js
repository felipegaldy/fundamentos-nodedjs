const path = require('path')

// basename
//__filename = nome do arquivo, nesse caso (path)
console.log(path.basename(__filename))

//nome do diretorio atual (local onde o arquivo esta salvo)
console.log(path.dirname(__filename))

// saber o tipo do arquivo (extensão)
console.log(path.extname(__filename))

// criar um objeto path
console.log(path.parse(__filename))

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'))