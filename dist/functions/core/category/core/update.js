"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const update = async (categoryId, name) => {
  if (!categoryId || !name) return {
    code: 'error'
  };
  const category = {
    name
  };
  const updating = await (0, _database.default)('category').update(category).where({
    categoryId
  }).then(() => ({
    code: 'success'
  })).catch(() => ({
    code: 'error'
  }));
  return updating;
};

var _default = update;
exports.default = _default;