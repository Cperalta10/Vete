const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
    // (^ = at the beginning of the string only) ($ = at the end of the string only) // ^/$ will only match if the req route is only a "/", for the root
    // |index = req more than just the "/" and (.html) = makes html optional

    res.sendFile(path.join(__dirname, "..", "views", "index.html")); // __dirname is a global variable that nodeJS understands and says look at the folder we're in. After you tell it the location. ../views/index.html
});

module.exports = router;
