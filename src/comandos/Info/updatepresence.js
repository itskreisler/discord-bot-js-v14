const { abbreviateNumber } = require('../../helpers/helpers')
const GuildDB = require('../../database/schemas/Guild.db')
module.exports = {
  DESCRIPTION: 'Actualiza la Presencia del bot',
  execute (client, message, args, prefix, GUILD_DATA) {
    client.user.setActivity(`${abbreviateNumber(new GuildDB().getGuildAllData().length)} servers`, { type: 'PLAYING' })
    return message.reply('`Presencia actualizada`')
  }
}
