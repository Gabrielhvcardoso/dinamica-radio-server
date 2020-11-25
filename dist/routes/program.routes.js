"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); // pro

routes.post('/', _api.default.program.index);
var _default = routes;
exports.default = _default;