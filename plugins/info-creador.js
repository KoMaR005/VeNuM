import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ Номер моего владельца wa.me/79773452127*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ИНФОРМАЦИЯ - ВЛАДЕЛЕЦ',
body: 'ʙʏ ☆☬VeNoM☬☆ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/79773452127`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(владелец|creator|creador|propietario)$/i
export default handler
