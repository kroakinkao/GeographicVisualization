
var express = require('express');
var http = require('http');
var fs = require('fs');
var io = require('socket.io');

//setup server
var app = express();
var server = http.Server(app);
var socket = io(server);