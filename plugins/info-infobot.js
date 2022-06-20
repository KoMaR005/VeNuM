import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 ИНФОРМАЦИЯ О БОТЕ 〙 ═
╠
╠➥ [🤴🏻] Создатель: *☣ⒹⓞⓃ ⓀⓞⓂⓐⓇ☣*
╠➥ [#️⃣] Номер Создателя: *+7 977 345 21 27*
╠➥ [🎳] Префикс: *${usedPrefix}*
╠➥ [🔐] Частные чаты: *${chats.length - groups.length}*
╠➥ [🦜] Групповой чат: *${groups.length}* 
╠➥ [💡] Всего чатов: *${chats.length}* 
╠➥ [🚀] Активность и время работы: *${uptime}*
╠➥ [🎩] Пользователи: *${totalreg} числа*
╠➥ [👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
╠  *${speed}* 
╠  *милисекунд*
╠➥ [☑️] Авточитание: ${autoread ? '*Активирован*' : '*Деактивирован*'}
╠➥ [❗] Ограничивать: ${restrict ? '*Активирован*' : '*Деактивирован*'} 
╠
╠═〘 ☆☬VeNoM☬☆-𝐁𝐨𝐭 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: '☆☬VeNoM☬☆-ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://https://github.com/KoMaR005/`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|инфобот)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
