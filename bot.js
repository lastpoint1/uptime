require("dotenv").config();

const { getConfig, checkConfig } = require("./functions/config");
checkConfig();
const { token } = getConfig();
const { client } = require("./client");

require("moment-duration-format");

process
  .on("uncaughtException", console.error)
  .on("unhandledRejection", console.error);
client.login(token);