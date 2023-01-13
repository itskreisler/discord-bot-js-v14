module.exports = async client => {
  console.log(`Conectado como ${client.user.tag}`.green)
  if (client?.application?.commands) {
    client.application.commands.set(client.slashArray)
    console.log(`(/) ${client.slashCommands.size} Comandos Publicados!`.green)
  }
}

/* const twitchAlert = () => {
  setInterval(async function () {
    const user = 'USERNAME'

    const uptime = await globalThis.fetch(`https://decapi.me/twitch/uptime/${user}`)

    const avatar = await globalThis.fetch(`https://decapi.me/twitch/avatar/${user}`)

    const viewers = await globalThis.fetch(`https://decapi.me/twitch/viewercount/${user}`)

    const title = await globalThis.fetch(`https://decapi.me/twitch/title/${user}`)

    const game = await globalThis.fetch(`https://decapi.me/twitch/game/${user}`)

    const twitch = require('./Schemas/twitchSchema')

    const data = await twitch.findOne({ user, titulo: title.body })

    if (uptime.body !== `${user} is offline`) {
      const TwitchEmbed = new Discord.MessageEmbed()
        .setAuthor({ name: `${user}`, iconURL: `${avatar.body}` })
        .setTitle(`${title.body}`)
        .setThumbnail(`${avatar.body}`)
        .setURL(`https://www.twitch.tv/${user}`)
        .AddField('Game', `${game.body}`, true)
        .addField('Viewers', `${viewers.body}`, true)
        .setImage(`https://static-cdn.jtvnw.net/previews-ttv/live_user_${user}-620x378.jpg`)
        .setColor('BLURPLE')

      if (!data) {
        const newdata = new twitch({
          user,
          titulo: `${title.body}`
        })

        await client.channels.cache.get('id de un canl').send({ content: `🔴 @everyone ${user} está en directo. __**¡Corre a verlo!**__ 🔴\n\nhttps://www.twitch.tv/${user}`, embeds: [TwitchEmbed] })

        return await newdata.save()
      }

      if (data.titulo === `${title.body}`) return

      await client.channels.cache.get('id del mismo canal').send({ content: `🔴 @everyone ${user} está en directo. __**¡Corre a verlo!**__ 🔴\n\nhttps://www.twitch.tv/${user}`, embeds: [TwitchEmbed] })

      await twitch.findOneAndUpdate({ user }, { titulo: title.body })
    }
  }, 120000)
} */
