import knex from '../../../../database'

interface UserToInsert {
  notificationToken?: string,
  platform?: string,
}

const update = async (userId: number, notificationToken: string | null, platform: string | null) => {
  if (!notificationToken && !platform) return ({ code: 'error' })

  const user: UserToInsert = {
    ...(() => notificationToken && platform ? ({ notificationToken, platform }) : notificationToken && !platform ? ({ notificationToken }) : ({ platform }))()
  }

  const updating: { code: string } = await knex('user')
    .update(user)
    .where({ userId })
    .then(() => ({ code: 'sucess' }))
    .catch(() => ({ code: 'error' }))

  return updating
}

export default update
