"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const destroy = async userId => {
  if (!userId) return {
    code: 'error'
  };
  const destroyed = await (0, _database.default)('user').where({
    userId
  }).del().then(() => ({
    code: 'success'
  })).catch(() => ({
    code: 'error'
  }));
  return destroyed;
};

var _default = destroy;
exports.default = _default;