#!/usr/bin/env node

//libs
const yargs = require("yargs"); // get cli args
const boxen = require('boxen'); // prompt box
const Confirm = require('prompt-confirm'); // confirmation lib
const os = require("os");
const root = require("app-root-path");
const fs = require('fs');
const helper = require(root + "/app/helperFunctions"); 

//

// env and user variables
const user_name = os.userInfo().username; // os user name
const env = process.env;
const language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;
// string translation file
let rawdata = fs.readFileSync(root + '/app/strings.json');
let strings = JSON.parse(rawdata);
let t_string = helper.is_ptbr(language) ? strings.pt_br : strings.en_us;
//

const DontPad = require(root + "/app/DontPad"); // dontpad class

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
  
  helper.boldMsg(`${t_string.reading} 'dontpad.com/${options.repository}'...`);
  dontpad.read().then(res => {
    console.log(boxen(res, {padding: 1, float:'center', borderStyle: 'round'}));

    if (options.copy) {
      const line = helper.copyLastLine(res);
      helper.boldMsg(`"${line}" ${t_string.clipboard}`);
    }
  });  
  
} else { // no command 

  if (options.overwrite) { //overwrite option

    const prompt = new Confirm(t_string.ask_overwrite);
    prompt.ask(answer => { // ask user confirmation

      if (answer) { // if yes
        helper.boldMsg(t_string.overwrite);
        dontpad.write(command).then(res => {
          helper.sucessMsg(t_string.success);
          console.log(res.config.url);
        });
      } else { // else exit
        process.exit();
      }
    
    });

  } else { // normal append

    helper.boldMsg(t_string.inserting);
    dontpad.append(command).then(res => {
      helper.sucessMsg(t_string.success);
      console.log(res.config.url);
    });

  }
  
}

