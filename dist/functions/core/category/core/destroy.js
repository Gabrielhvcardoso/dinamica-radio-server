"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const destroy = async categoryId => {
  if (!categoryId) return {
    code: 'error'
  };
  const destroyed = await (0, _database.default)('category').where({
    categoryId
  }).del().then(() => ({
    code: 'success'
  })).catch(() => ({
    code: 'error'
  }));
  return destroyed;
};

var _default = destroy;
exports.default = _default;