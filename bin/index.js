#!/usr/bin/env node

const chalk = require("chalk"); // biblioteca de estilzação de texto
const yargs = require("yargs"); // pega args do cli
const os = require("os");

const root = require("app-root-path");
const DontPad = require(root + "/app/DontPad"); // classe do dontpad
var repository = "";

// requer 1 argumento sem parametro
// e 1 argumento -r
const options = yargs.demandCommand(1).option("r", {
  alias: "repository",
  describe: "Repository name in dontpad. Example: dontpad.com/repository",
  type: "string"
}).argv;

const user_name = os.userInfo().username; // nome do usuario do sistema
const text = options._[0]; // pega o argumento
const greeting = chalk.white.bold("Inserindo texto....");

console.log(greeting);

// checa se o argumento foi passado
if (typeof options.repository === 'undefined') {
    repository = user_name;

} else {
    repository = options.repository;
}

var dontpad = new DontPad(repository);

// substitui todo o texto da pagina do dontpad
dontpad.write(text).then(res => {
  console.log(res.config.url);
});
