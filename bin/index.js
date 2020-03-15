#!/usr/bin/env node

const chalk = require("chalk"); // biblioteca de estilzação de texto
const yargs = require("yargs"); // pega args do cli
const boxen = require('boxen');
const os = require("os");
const root = require("app-root-path");

const DontPad = require(root + "/app/DontPad"); // classe do dontpad
const user_name = os.userInfo().username; // nome do usuario do sistema



// requer 1 argumento sem parametro
// e 1 argumento -r
const options = yargs
.scriptName("dontpad").usage('$0 <cmd> [args]')
.command('get', 'Read content from a repository')
.option("r", {
  alias: "repository",
  describe: "Repository name in dontpad. \nExample: dontpad.com/repository",
  type: "string",
  default: user_name
})
.option("s", {
  alias: "separator",
  describe: "Add a custom separator betwen appends",
  type: "string",
  default: ""
})
.argv;


const command = options._[0]; // pega o argumento sem parametro

let dontpad = new DontPad(options.repository);
dontpad.separator = `\n${options.separator}\n`;

if (command === 'get') {
  boldMsg(`Lendo do repositório 'dontpad.com/${options.repository}'...`);
    dontpad.read().then(res => {
    console.log(boxen(res, {padding: 1, float:'center', borderStyle: 'round'}));
  });  
  
} else {
  boldMsg('Inserindo texto...');
  dontpad.append(command).then(res => {
    sucessMsg('sucesso!!!');
    console.log(res.config.url);
  });
  
}

function boldMsg(msg) {
  const greeting = chalk.white.bold(msg);
  console.log(greeting);
}

function sucessMsg(msg) {
  const text = chalk.black.bgGreen(msg);
  console.log(text);
}


