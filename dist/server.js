"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _banner = _interopRequireDefault(require("./routes/banner.routes"));

var _category = _interopRequireDefault(require("./routes/category.routes"));

var _client = _interopRequireDefault(require("./routes/client.routes"));

var _program = _interopRequireDefault(require("./routes/program.routes"));

var _scheduleProgram = _interopRequireDefault(require("./routes/scheduleProgram.routes"));

var _tag = _interopRequireDefault(require("./routes/tag.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use('/ban', _banner.default);
app.use('/cat', _category.default);
app.use('/cli', _client.default);
app.use('/pro', _program.default);
app.use('/sch', _scheduleProgram.default);
app.use('/tag', _tag.default);
app.use('/use', _user.default);
var _default = app;
exports.default = _default;