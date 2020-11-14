const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
// const { errorHandler } = require('../utils')

module.exports = (app) => {
    app.use(express.json());

    app.use(cookieParser(process.env.COOKIESECRET));

    app.use(session({
        secret: process.env.COOKIESECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            secure: true,
            // 30 minutes
            maxAge: 30 * 60 * 1000,
            httpOnly: true,
        },
    }));

    app.use(express.static(path.resolve(__basedir, 'static')));

    // app.use(errorHandler(err, req, res, next));
};
