import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].аудио && m.isGroup) throw 0
let vn = './media/DiagnosticadoConGay.mp3'
conn.sendFile(m.chat, vn, 'DiagnosticadoConGay.mp3', null, m, true, {
type: 'audioMessage',
ptt: true 
})
}
handler.customPrefix = /giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler