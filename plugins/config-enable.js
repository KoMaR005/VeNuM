let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `СПИСОК ВАРИАНТОВ`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | ПУБЛИЧНЫЙ РЕЖИМ", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} public`},
{title: "🥵 | РЕЖИМ ГОРНА", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | АНТИССЫЛКА", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | АНТИССЫЛКА 𝟸", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚀𝚄𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝙽 𝙴𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | ОБНАРУЖЕНИЕ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧИВАТЬ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix + command} ограничивать`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТОСТИКЕР", description: "𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | ТОЛЬКО ПК", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} толькопользователь`},
{title: "🏢 | ТОЛЬКО ГХ", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} толькогруппа`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯ФуНкЦиЙ✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨САЛАМ АЛЕЙКУМ, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯ВыБеРи НуЖнуЮ✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *ограничивать*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *ограничивать*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *толькопользователь*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *толькопользователь*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}вкл *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выкл *автостикер*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "ВЫБЕРИТЕ ЗДЕСЬ",
sections }

let isEnable = /true|вкл|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.обнаружить = isEnable
break
case 'удалить':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'публичный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.автостикер = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.аудио = isEnable          
break
case 'ограничивать':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.ограничивать = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['авточтение'] = isEnable
break
case 'толькопользователь':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['толькопользователь'] = isвкл
break
case 'толькогруппа':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['толькогруппа'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ВАРИАНТ: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? 'АКТИВИРОВАТЬ' : 'ДЕАКТИВИРОВАТЬ'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ ДЕАКТИВИРОВАТЬ ✖️' : '✔️ АКТИВИРОВАТЬ ✔️'}`, `${isвкл ? `.off ${type}` : `.on ${type}`}`], ['👾 ГЛАВНОЕ МЕНЮ 👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
