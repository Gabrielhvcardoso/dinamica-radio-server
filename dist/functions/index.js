"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _banner = _interopRequireDefault(require("./core/banner"));

var _category = _interopRequireDefault(require("./core/category"));

var _client = _interopRequireDefault(require("./core/client"));

var _program = _interopRequireDefault(require("./core/program"));

var _scheduleProgram = _interopRequireDefault(require("./core/scheduleProgram"));

var _tag = _interopRequireDefault(require("./core/tag"));

var _user = _interopRequireDefault(require("./core/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const functions = {
  banner: _banner.default,
  category: _category.default,
  client: _client.default,
  program: _program.default,
  scheduleProgram: _scheduleProgram.default,
  tag: _tag.default,
  user: _user.default
};
var _default = functions;
exports.default = _default;