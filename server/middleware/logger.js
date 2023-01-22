const { format } = require("date-fns");
const { v4: uuid } = require("uuid"); // renaming v4 to uuid
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logFileName) => {
    const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss"); // formats the date and time
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`; // takes the dateTime variable and gives it a unique id and message. each log file gets its own line '\n'

    try {
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "..", "logs")); // this path is if no logs folder exist then it creates it
        }
        await fsPromises.appendFile(
            path.join(__dirname, "..", "logs", logFileName),
            logItem
        ); // it appends the formatted logItem file to the logs folder
    } catch (error) {
        console.log(error);
    }
};

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
    console.log(`${req.method} ${req.path}`);
    next();
};

module.exports = { logEvents, logger };