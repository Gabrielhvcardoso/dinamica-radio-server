"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (bannerId, title, description, image, link, targetProgram, targetCategory, expiresAt) => {
  if (!bannerId) return {
    code: 'error'
  };
  if (!title && !description && !image && !link && !targetProgram && !targetCategory && !expiresAt) return {
    code: 'error'
  };
  const banner = { ...(() => {
      const obj = {
        title,
        description,
        image,
        link,
        targetProgram,
        targetCategory,
        expiresAt
      };
      Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
      return obj;
    })()
  };
  const updating = await (0, _database.default)('banner').update(banner).where({
    bannerId
  }).then(() => ({
    code: 'success'
  })).catch(() => ({
    code: 'error'
  }));
  return updating;
};

var _default = create;
exports.default = _default;