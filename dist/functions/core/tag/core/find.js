"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const find = async tagId => {
  if (!tagId) return {
    code: 'error'
  };
  const found = await (0, _database.default)('tag').where({
    tagId
  });
  return found;
};

var _default = find;
exports.default = _default;