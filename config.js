const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "3ZdWlJrQ#4jJM05vs7A87-Sbj2mCzUaLILbqrpW1pVC4iBTx_HwE",
  OWNER_NUM: process.env.OWNER_NUM || "94756599952",
  PREFIX: process.env.PREFIX || ".",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
};
