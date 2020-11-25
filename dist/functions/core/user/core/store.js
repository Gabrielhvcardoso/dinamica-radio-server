"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (clientId, notificationToken, platform) => {
  if (!clientId || !notificationToken || !platform) return {
    code: 'error'
  };
  const user = {
    clientId,
    notificationToken,
    platform
  };
  const insert = await (0, _database.default)('user').insert(user).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;