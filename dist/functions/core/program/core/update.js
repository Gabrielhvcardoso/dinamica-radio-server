"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const update = async (programId, title, image) => {
  if (!programId || !title || !image) return {
    code: 'error'
  };
  const program = { ...(() => title && image ? {
      title,
      image
    } : title && !image ? {
      title
    } : {
      image
    })()
  };
  const updating = await (0, _database.default)('program').update(program).where({
    programId
  }).then(() => ({
    code: 'sucess'
  })).catch(() => ({
    code: 'error'
  }));
  return updating;
};

var _default = update;
exports.default = _default;