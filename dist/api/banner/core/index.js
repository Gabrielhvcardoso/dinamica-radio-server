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
  const response = await (0, _database.default)('banner').where({
    'banner.clientId': clientId
  }).leftJoin('program', 'banner.targetProgram', 'program.programId').leftJoin('category', 'banner.targetCategory', 'category.categoryId').select('banner.targetProgram as programId', 'program.title as programTitle', 'program.image as programImage', 'banner.targetCategory as categoryid', 'category.name as categoryName', 'banner.bannerId', 'banner.title', 'banner.description', 'banner.image', 'banner.link', 'banner.createdAt', 'banner.expiresAt');
  const reduced = response.reduce((acc, item) => {
    const banner = {
      bannerId: item.bannerId,
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link,
      createdAt: parseInt(item.createdAt),
      expiresAt: item.expiresAt ? parseInt(item.expiresAt) : null,
      program: item.programId ? {
        programId: item.programId,
        programTitle: item.programTitle,
        programImage: item.programImage
      } : null,
      category: item.categoryId ? {
        categoryId: item.categoryId,
        categoryName: item.categoryName
      } : null
    };
    return [...acc, banner];
  }, []);
  res.send(reduced);
}