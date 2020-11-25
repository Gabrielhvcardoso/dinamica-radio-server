"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = index;

var _database = _interopRequireDefault(require("../../../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function index(req, res) {
  const {
    clientId
  } = req.body;
  if (!clientId) return res.sendStatus(404);
  const response = await (0, _database.default)('category').where({
    clientId
  }).select('categoryId', 'name');
  res.send(response);
}