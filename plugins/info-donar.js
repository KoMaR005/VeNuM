/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 ПОЖЕРТВОВАТЬ 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Салам Алекум ${name} 💙*
*┃*
*┃ 👉🏻 Вот некоторые данные *
*┃ За вашу поддержку :𝟹*
*┃*
*┃ ➤ 𝙲𝙻𝙰𝚅𝙴:* 
*┃ 646180192175788481*
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: STP* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾:* 
*┃ ☣ⒹⓞⓃ ⓀⓞⓂⓐⓇ☣* 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: APOYO*  
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: https://www.paypal.me/TheShadowBrokers133*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸* 
*┃ 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝙼𝙰𝚂*
*┃ 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰* 
*┃ 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴 <𝟹*
*┃ wa.me/79773452127*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['ОСНОВНОЕ МЕНЮ МЕНЮ', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
