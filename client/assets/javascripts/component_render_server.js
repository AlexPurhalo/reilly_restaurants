require('babel-core/register')({experimental: true});

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var React = require('react');

function toUnderscore(str){
    return str.replace(/([A-Z])/g, function($1) { return "_" + $1.toLowerCase(); }).slice(1);
}

function renderToString(component, props, callback) {
    var component = require('./components/' + toUnderscore(component));
    callback(React.renderToString(React.createElement(component, props)));
}

app.post('/', function( req, res) {
    // return res.end(req.body.props.toString());
    renderToString(req.body.component, req.body.props, function(str) {
        res.end(str);
    });
});

app.listen(3001);