let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*馃敯 小袩袠小袨袣 孝袝袣小孝袨袙/小袨袨袘些袝袧袠携/小袥袨袙袗 袣袥挟效袠 馃敯*

*鉁筹笍 小袨袨袘些袝袧袠袝 鉁筹笍*
${Object.keys(msgs).map(v => '*馃憠馃徎 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^褋锌懈褋芯泻(vn|msg|video|audio|img|sticker)$/
export default handler