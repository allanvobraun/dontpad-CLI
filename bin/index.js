#!/usr/bin/env node

const chalk = require("chalk"); // text styling lib
const yargs = require("yargs"); // get cli args
const boxen = require('boxen'); // prompt box
const Confirm = require('prompt-confirm'); // confirmation lib
const os = require("os");
const clipboardy = require('clipboardy');
const root = require("app-root-path");

const DontPad = require(root + "/app/DontPad"); // dontpad class
const user_name = os.userInfo().username; // os user name


const options = yargs
.scriptName("dontpad").usage("$0 <cmd> [args] or $0 'text' [args]")
.command('get', 'Read content from a repository', yargs => {
  return yargs.option('c', {
    alias: 'copy',
    describe:'Copy the last line from the repository to the clipboard',
    boolean: true,
    type: 'boolean',
    default: false
  })
})
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
.option('o', {
  alias: 'overwrite',
  describe:'Overwite all content of repository',
  boolean: true,
  type: 'boolean',
  default: false
})
.argv;


const command = options._[0]; // gets the command

let dontpad = new DontPad(options.repository);
dontpad.separator = `\n${options.separator}\n`; //separador between each msg

if (command === 'get') { // handles get command
  
  boldMsg(`Lendo do repositório 'dontpad.com/${options.repository}'...`);
  dontpad.read().then(res => {
    console.log(boxen(res, {padding: 1, float:'center', borderStyle: 'round'}));
    if (options.copy) copyLastLine(res);
  });  
  
} else { // no command 

  if (options.overwrite) { //overwrite option

    const prompt = new Confirm('Tem certeza que deseja sobreescrever todo o texto do repositório?');
    prompt.ask(answer => { // ask user confirmation

      if (answer) { // if yes
        boldMsg('Sobreescrevendo o texto...');
        dontpad.write(command).then(res => {
          sucessMsg('sucesso!!!');
          console.log(res.config.url);
        });
      } else { // else exit
        process.exit();
      }
    
    });

  } else { // normal append

    boldMsg('Inserindo texto...');
    dontpad.append(command).then(res => {
      sucessMsg('sucesso!!!');
      console.log(res.config.url);
    });

  }
  
}

function boldMsg(msg) {
  const greeting = chalk.white.bold(msg);
  console.log(greeting);
}

function sucessMsg(msg) {
  const text = chalk.black.bgGreen(msg);
  console.log(text);
}

function copyLastLine(text) {
  const regex = /(.*$)/g; 
  const last_line = regex.exec(text);
  clipboardy.writeSync(last_line[1]);
  boldMsg(`"${last_line[1]}" copied to clipboard`)
  
  
}

