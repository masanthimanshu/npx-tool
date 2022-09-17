#!/usr/bin/env node

const shell = require("shelljs");

const args = process.argv;
const dirName = args[args.length - 1];

console.log("UXDLAB Create React App Starts");

shell.mkdir("-p", `./${dirName}`);
shell.exec(
  "git clone https://github.com/masanthimanshu/react-firebase-mui-starter.git"
);
shell.cd("react-firebase-mui-starter");

shell.mv("./public", `../${dirName}`);
shell.mv("./src", `../${dirName}`);
shell.mv(".gitignore", `../${dirName}`);
shell.mv("package.json", `../${dirName}`);
shell.mv("package-lock.json", `../${dirName}`);

shell.cd("../");
shell.rm("-rf", "react-firebase-mui-starter");

shell.cd(`${dirName}`);
shell.exec("npm i");
