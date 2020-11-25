"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (mail, password) => {
  if (!mail || !password) return {
    code: 'error'
  };
  const now = new Date().getTime();
  const client = {
    mail,
    password,
    createdAt: now,
    updatedAt: now
  };
  const insert = await (0, _database.default)('client').insert(client).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;