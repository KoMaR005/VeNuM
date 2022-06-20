let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'открыть': 'не объявление',
'закрыть': 'объявление',
'открытым': 'не объявление',
'закрыто': 'объявление',
'abrir': 'не объявление',
'cerrar': 'объявление',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] НЕПРАВИЛЬНЫЙ ФОРМАТ!!*

*┏━━━❲ ✨ПРИМЕР✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} abrir*
*┠┉↯ ${usedPrefix + command} cerrar*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] ГРУППА НАСТРОЕНА ПРАВИЛЬНО*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(группа|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
