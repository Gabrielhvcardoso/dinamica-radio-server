"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (clientId, title, image) => {
  if (!clientId || !title || !image) return {
    code: 'error'
  };
  const program = {
    clientId,
    title,
    image
  };
  const insert = await (0, _database.default)('program').insert(program).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;