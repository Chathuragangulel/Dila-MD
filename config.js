const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mNUW0SQQ#mdH9UgsJZUC-vPm1kgIZiBLSTkMVOVd9SX5KBkTmCC4",
MONGODB: process.env.MONGODB || "",
};
