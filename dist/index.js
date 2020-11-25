"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const port = process.env.PORT;

_server.default.listen(port, () => {
  console.log(`Listening https://localhost:${port}`);
});