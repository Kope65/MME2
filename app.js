/**
 * Main app for server to start. (Exercise 2)
 *
 *
 * @author Toni Kluth
 * @licence MIT
 *
 */

"use strict";

// ***** Node module imports *****
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Main app
var app = express();

// ***** Middleware - Gets called at every request *****
// Prints a line in console
app.use(function (req, res, next) {
    console.log('Middleware is working!');
    next();
});

// Prints a line in console
app.use(function (req, res, next) {
    console.log('Middleware is working! Twice!');
    next();
});

// ***** Routes *****
// GET request prints a line in console
app.get('/', function (req, res) {
        res.send('Hello World!');
    })

    // POST request prints a line in console
    .post('/', function (req, res) {
        res.send('Hello World!');
    })

    // PUT request prints a line in console
    .put('/', function (req, res) {
        res.send('Hello World!');
    })

    // DELETE request prints a line in console
    .delete('/', function (req, res) {
        res.send('Hello World!');
    });

// GET request gets index.html
app.get('/public', function (req, res) {
    fs.open('/index.html');
});


// ***** Server *****
// Starts the server listening on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});