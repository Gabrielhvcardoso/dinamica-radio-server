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
  const response = Object.values((await (0, _database.default)('program').where({
    'program.clientId': clientId
  }).leftJoin('tag', 'program.programId', 'tag.programId').leftJoin('category', 'tag.categoryId', 'category.categoryId').select('program.programId', 'program.clientId', 'category.categoryId', 'tag.tagId as tagId', 'program.title as programTitle', 'program.image as programImage', 'category.name as categoryTitle')).reduce((acc, item) => {
    const project = {
      programId: item.programId,
      title: item.programTitle,
      image: item.programImage,
      tags: item.categoryId ? [item.categoryId] : []
    };

    if (acc[item.programId]) {
      if (item.categoryId) {
        acc[item.programId].tags.push(item.categoryId);
      }
    } else {
      acc[item.programId] = project;
    }

    return acc;
  }, []));
  res.send(response);
}