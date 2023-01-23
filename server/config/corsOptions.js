const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            // allowedOrigins.indexIf(origin) !== -1 allows us to access our rest api and || !origin allows postman(ect.) req to access also
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // sets the access control allow credentials header
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
