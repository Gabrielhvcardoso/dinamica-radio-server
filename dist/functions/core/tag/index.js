"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("./core"));

var _destroy = _interopRequireDefault(require("./core/destroy"));

var _find = _interopRequireDefault(require("./core/find"));

var _findWhere = _interopRequireDefault(require("./core/findWhere"));

var _store = _interopRequireDefault(require("./core/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  index: _core.default,
  find: _find.default,
  findWhere: _findWhere.default,
  store: _store.default,
  destroy: _destroy.default
};
exports.default = _default;