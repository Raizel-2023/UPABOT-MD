import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `قائمه الاوامر`,
rows: [
      {title: "🥵 المطور 🥵", description: 'يعرض لك رقم المطور', rowId: `${usedPrefix}creador`},
      {title: "🎁 كل القائمه 🎁", description: 'يعرض قائمه الاوامر كامله', rowId: `${usedPrefix}memucomp`},
      {title: "💎 قائمه الجروب 💎", description: 'يعرض لك اوامر قائمه الجروب', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 قائمه الالعاب 🎮", description: 'يعرض لك اوامر قائمه الالعاب', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 قائمه الصوتيات 🔊", description: 'يعرض لك اوامر قائمه الصوتيات', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 قائمه الملصقات 👽", description: 'يعرض لك اوامر قائمه الملصقات', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 قائمه تأثيرات الصوت 🎤", description: 'يعرض لك اوامر قائمه تأثيرات الصوت', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 قائمه عشوائيه 👾", description: 'يعرض لك اوامر القائمه العشوائيه', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 قائمه الاباحي 🔞", description: 'يعرض لك اوامر قائمه الاباحي🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 قائمه التنزيل 📲", description: 'يعرض لك اوامر قائمه التنزيل', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ قائمه عمل لوجو 🖍️", description: 'يعرض لك اوامر قائمه عمل لوجو', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 قائمه البحث 🔍", description: 'يعرض لك اوامر قائمه اللحث', rowId: `${usedPrefix}menubusquedas`},
{title: "⚒️ قائمه الادوات ⚒️", description: 'يعرض لك اوامر قائمه الادوات', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 قائمه المنشئ 👑", description: 'يعرض لك اوامر قائمه المنشئ', rowId: `${usedPrefix}menucreador`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*📅 التاريخ: ${week}, ${date}*
*📈 وقت التشغيل: ${uptime}*
*📊 المستخدمون المسجلون : ${rtotalreg}*

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘉𝘖𝘛*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨هلا, ${name}*!!
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *مطور البوت: 𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘈𝘓𝘞𝘈𝘡𝘌𝘙❤* 
║➤ *رقم المطور:* wa.me/201098906252 (لست بوت) 
║➤ *ادعمني بالتبرع لاستمر في تطوير البوت*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<معلومات|القوائم/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️️ _${usedPrefix}menucompleto_
┣ ඬ⃟ℹ️️ _${usedPrefix}donar_
┣ ඬ⃟ℹ️️ _Bot_ (استخدم بدون بادئه)
┣ ඬ⃟ℹ️️ _que es un bot_ (استخدم بدون بادئه)
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<رقم المطور/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👻 _${usedPrefix}creador_
┣━━━━━━━━━━━━━
┃ *<اضافه البوت لجروبك/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}انضم *ورابط الجروب*_ 
┣ أضف المطور إلى الجروب وامنحه مشرف
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "قائمه الاوامر", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
