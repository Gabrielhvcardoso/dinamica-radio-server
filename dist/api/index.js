"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _banner = _interopRequireDefault(require("./banner"));

var _category = _interopRequireDefault(require("./category"));

var _program = _interopRequireDefault(require("./program"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = {
  banner: _banner.default,
  category: _category.default,
  program: _program.default
};
var _default = api;
exports.default = _default;