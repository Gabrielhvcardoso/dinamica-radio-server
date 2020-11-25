"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _database = _interopRequireDefault(require("../../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const create = async (programId, weekday, startAt, duration) => {
  if (!programId || !weekday || !startAt || !duration) return {
    code: 'error'
  };
  const scheduleProgram = {
    programId,
    weekday,
    startAt,
    duration
  };
  const insert = await (0, _database.default)('scheduleProgram').insert(scheduleProgram).then(response => response[0]).catch(() => ({
    code: 'error'
  }));
  return insert;
};

var _default = create;
exports.default = _default;