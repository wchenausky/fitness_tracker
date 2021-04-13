const router = require('express').Router();
const path = require('path');

modue.exports = app => {

    app.get("/", (req, res) => {
        res.sednFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/", (req, res) => {
        res.sednFile(path.join(__dirname, "../pblic/excerise.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};