const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 САЛАМ АЛЕЙКУМ _${name}_ 💖彡*

*<МЕНЮ АУДИО/>*
*- Напишите следующие слова или сборы без предпочтения (#, /, *, .)*

° ඬ⃟🔊 _Кто твой семпай боцито 7w7_
° ඬ⃟🔊 _Я диагностирую у тебя гей_
° ඬ⃟🔊 _Никто не заботится_
° ඬ⃟🔊 _Административная вечеринка_
° ඬ⃟🔊 _Административная вечеринка_ 
° ඬ⃟🔊 _Да здравствуют жених и невеста_
° ඬ⃟🔊 _С днем ​​рождения_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Доброе утро_
° ඬ⃟🔊 _Добрый день_
° ඬ⃟🔊 _Спокойной ночи_
° ඬ⃟🔊 _Аудио хентай_
° ඬ⃟🔊 _Милая девушка_
° ඬ⃟🔊 _С Рождеством_
° ඬ⃟🔊 _Иди в врг_
° ඬ⃟🔊 _Пропустить пакет Бот_
° ඬ⃟🔊 _Групповое внимание_
° ඬ⃟🔊 _Педик кто_
° ඬ⃟🔊 _Группа умерла_
° ඬ⃟🔊 _О, я пришел_
° ඬ⃟🔊 _Пятница_
° ඬ⃟🔊 _Запрещен_
° ඬ⃟🔊 _Секс_
° ඬ⃟🔊 _Приветствие_
° ඬ⃟🔊 _Утка_
° ඬ⃟🔊 _Ньянская ваза_
° ඬ⃟🔊 _Люблю тебя_
° ඬ⃟🔊 _Уже поставил_
° ඬ⃟🔊 _Принимать ванну_
° ඬ⃟🔊 _Это чертовски_
° ඬ⃟🔊 _Бот_
° ඬ⃟🔊 _Они-чан_
° ඬ⃟🔊 _Бот дерьмо_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/KoMaR005', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['ОСНОВНОЕ МЕНЮ', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(меню2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
