"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const find = async clientId => {
  if (!clientId) return {
    code: 'error'
  };
  const found = await (0, _database.default)('client').where({
    clientId
  });
  return found;
};

var _default = find;
exports.default = _default;