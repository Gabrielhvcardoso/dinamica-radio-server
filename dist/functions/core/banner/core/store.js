"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (clientId, title, description, image, link, targetProgram, targetCategory, expiresAt) => {
  if (!clientId || !title) return {
    code: 'error'
  };
  const now = new Date().getTime();
  const banner = {
    clientId,
    title,
    createdAt: now,
    description,
    image,
    link,
    targetProgram,
    targetCategory,
    expiresAt
  };
  const insert = await (0, _database.default)('banner').insert(banner).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;