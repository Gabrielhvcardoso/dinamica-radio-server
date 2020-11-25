"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const update = async (userId, notificationToken, platform) => {
  if (!notificationToken && !platform) return {
    code: 'error'
  };
  const user = { ...(() => notificationToken && platform ? {
      notificationToken,
      platform
    } : notificationToken && !platform ? {
      notificationToken
    } : {
      platform
    })()
  };
  const updating = await (0, _database.default)('user').update(user).where({
    userId
  }).then(() => ({
    code: 'sucess'
  })).catch(() => ({
    code: 'error'
  }));
  return updating;
};

var _default = update;
exports.default = _default;