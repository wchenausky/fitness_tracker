const router = require('express').Router();
const path = require('path');



    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../pblic/exercise.html"));
    });

    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
module.exports = router;