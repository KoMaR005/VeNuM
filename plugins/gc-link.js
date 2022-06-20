import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ССЫЛКА НА ГРУППУ',
body: 'ᴛʜᴇ ☆☬VeNoM☬☆-𝐁𝐨𝐭',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/KoMaR005`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^ссылка(группы)?$/i
handler.group = true
handler.botAdmin = true
export default handler
