"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (programId, categoryId) => {
  if (!programId || !categoryId) return {
    code: 'error'
  };
  const tag = {
    programId,
    categoryId
  };
  const insert = await (0, _database.default)('tag').insert(tag).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;