const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'C3xAzbiB#s9GaDGwyGhAB83kC53L4WCg7s4UeVXXWxkCxUAGmR8k', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://tharux:tharux@cluster0.xxrdh.mongodb.net/',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94743660613',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94743660613'    // Enter Your Bot Number
};
