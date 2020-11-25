"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const index = async () => {
  return await (0, _database.default)('user').then(response => {
    return response;
  });
};

var _default = index;
exports.default = _default;