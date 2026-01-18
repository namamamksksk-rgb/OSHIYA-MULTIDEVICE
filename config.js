const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "7F8EDZiR#9DNP7cMb2doaDI48QMQX1T9J3-ZaALOtkVyn72nFyBo",
  OWNER_NUM: process.env.OWNER_NUM || "94712849964",
  OWNER_NAME: process.env.OWNER_NAME || "Chandani",
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
};
