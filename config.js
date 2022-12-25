import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [
  ['201098906252', 'Unptoadrih15', true],
  ['201098906252'],
  ['201098906252']
] // Cambia los numero que quieras
global.mods = [] 
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

// Sticker WM
global.packname = '⍣الجزار الوزير يروحي⍣'
global.author = '⍣01098906252⍣'

global.wm = '❤️ᗴᒪᘜᗩᘔᗩᖇ ᗷOT❤'
global.igfg = '❤️ᗴᒪᘜᗩᘔᗩᖇ ᗷOT❤'
global.wait = '*⌛ _انتظر لحظه..._ ▬▬▬▭*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')

global.multiplier = 70 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊 Nivel/',
      limit: '💎 Limite/',
      health: '❤️ Salud/',
      exp: '✨ Experiencia/',
      money: '🪙 Dinero/',
      potion: '🥤 Poción/',
      diamond: '💎 Diamante/',
      common: '📦 Caja comun/',
      uncommon: '🛍️ Caja poco comun/',
      mythic: '🎁 Caja mítica/',
      legendary: '🗃️ Caja legendaria/',
      pet: '🐕 Macota/',
      gold: '🏅 Oro/',
      trash: '🗑 Basura/',
      armor: '🥼 Armadura/',
      sword: '⚔️ Espada/',
      pickaxe: '⛏️ Pico/',
      fishingrod: '🎣 Caña/',
      wood: '🪵 Madera/',
      rock: '🪨 Piedra/',
      string: '🕸️ Cuerda/',
      horse: '🐴 Caballo/',
      cat: '🐱 Gato/',
      dog: '🐶 Perro/',
      fox: '🦊 Zorro/',
      petFood: '🍖 Comida de mascota/',
      iron: '⛓️ Hierro/',
      emerald: '❇️ Esmeralda/',
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
