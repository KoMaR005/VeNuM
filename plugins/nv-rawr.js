import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].аудио && m.isGroup) throw 0
let vn = './media/rawr.mp3'
conn.sendFile(m.chat, vn, 'rawr.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /rawr|Rawr|RAWR|raawwr|rraawr|rawwr/
handler.command = new RegExp
export default handler