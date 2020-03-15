#!/usr/bin/env node

const chalk = require("chalk"); // biblioteca de estilzação de texto
const yargs = require("yargs"); // pega args do cli
const os = require("os");
const root = require("app-root-path");


class Main {
  constructor(params) {
  const DontPad = require(root + "/app/DontPad"); // classe do dontpad
  const user_name = os.userInfo().username; // nome do usuario do sistema

  read(argv) {
    dontpad.read().then(res => {
    console.log(res);
    
  });


    
  }
}


function 

  
  
}
// requer 1 argumento sem parametro
// e 1 argumento -r
const options = yargs
.scriptName("dontpad").usage('$0 <cmd> [args]')
.command('get', 'Read content from a repository', () => {}, read)
.option("r", {
  alias: "repository",
  describe: "Repository name in dontpad. \nExample: dontpad.com/repository",
  type: "string",
  default: user_name
}).argv;



// console.log(options);

//const batata = yargs.scriptName("pirate-parser").usage('batatata').argv;

const text = options._[0]; // pega o argumento sem parametro
const greeting = chalk.white.bold("Inserindo texto....");
console.log(greeting);


var dontpad = new DontPad(options.repository);

if (text) {
  dontpad.write(text).then(res => {
    console.log(res.config.url);
  });
} 
// substitui todo o texto da pagina do dontpad


// dontpad.read().then(res => {
//   console.log(res);
  
// });

