"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const update = async (scheduleProgramId, startAt, duration) => {
  if (!scheduleProgramId || !startAt && !duration) return {
    code: 'error'
  };
  const scheduleProgram = { ...(() => startAt && duration ? {
      startAt,
      duration
    } : startAt && !duration ? {
      startAt
    } : {
      duration
    })()
  };
  const updating = await (0, _database.default)('scheduleProgram').update(scheduleProgram).where({
    scheduleProgramId
  }).then(() => ({
    code: 'success'
  })).catch(() => ({
    code: 'error'
  }));
  return updating;
};

var _default = update;
exports.default = _default;