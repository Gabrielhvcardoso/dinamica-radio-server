"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const routes = (0, _express.Router)(); // use

routes.get('/', (req, res) => {
  res.send({
    hello: 'world'
  });
});
var _default = routes;
exports.default = _default;