import knex from '../../../database'

export default async function index (req, res) {
  const { clientId } = req.body

  if (!clientId) return res.sendStatus(404)

  const response = await knex('banner').where({ 'banner.clientId': clientId })
    .leftJoin('program', 'banner.targetProgram', 'program.programId')
    .leftJoin('category', 'banner.targetCategory', 'category.categoryId')
    .select(
      'banner.targetProgram as programId',
      'program.title as programTitle',
      'program.image as programImage',

      'banner.targetCategory as categoryId',
      'category.name as categoryName',

      'banner.bannerId',
      'banner.title',
      'banner.description',
      'banner.image',
      'banner.link',
      'banner.createdAt',
      'banner.expiresAt'
    )

  const reduced = response.reduce((acc, item) => {
    const banner = {
      bannerId: item.bannerId,
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link,
      createdAt: parseInt(item.createdAt),
      expiresAt: item.expiresAt ? parseInt(item.expiresAt) : null,

      program: item.programId ? { programId: item.programId, programTitle: item.programTitle, programImage: item.programImage } : null,
      category: item.categoryId ? { categoryId: item.categoryId, categoryName: item.categoryName } : null
    }

    return [...acc, banner]
  }, [])

  res.send(reduced)
}
