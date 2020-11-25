"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const knexfile = require("../../knexfile.js");

const knex = require('knex')(knexfile);

var _default = knex;
exports.default = _default;