// require('dotenv').config()
const JsonDb = require('@kreisler/js-jsondb')
const { isEmptyArray } = require('../../helpers/helpers.js')

const guildDb = new JsonDb('src/json')
const guildJson = 'guild'
const guildExist = (id) => {
  const q = guildDb.select(guildJson, ({ guildID }) => guildID === id)
  if (isEmptyArray(q)) {
    return [false, q]
  }
  return [true, q]
}
const getGuildData = (guildID) => {
  const [exist, [guildData]] = guildExist(guildID)
  const data = {
    guildID,
    prefix: process.env.PREFIX,
    language: process.env.LANGUAGE

  }
  if (!exist) {
    guildDb.insert(guildJson, data)
  }
  return exist ? guildData : data
}
module.exports = {
  getGuildData
}
