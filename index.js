#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:pandey.piyus@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Go to my ${chalk.magentaBright.bold("Profile")}?`,
        value: () => {
          open("https://linkedin.com/in/zephyrus21");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Thank you!!!\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("                  Piyush Pandey"),
  handle: chalk.white("@zephyrus21"),
  work: `${chalk.white("Full Stack Developer")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("zephyrus_io"),
  github: chalk.gray("https://github.com/") + chalk.green("zephyrus21"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("zephyrus21"),
  instagram: chalk.gray("https://instagram.com/") + chalk.red("zephyrus.io"),
  web: chalk.cyan("https://p2.piyushpandey.tech"),
  npx: chalk.red("npx") + " " + chalk.white("piyush-pandey"),

  labelWork: chalk.white.bold("   My Stack:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelInstagram: chalk.white.bold("  Instagram:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("           I code and live in space.")}`,
    `${chalk.italic(" If you want to know more about me and want to")}`,
    `${chalk.italic("     connect please visit any links above.")}`,
    `${chalk.italic("      I will be very happy to interact :)")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);

prompt(questions).then((answer) => answer.action());
