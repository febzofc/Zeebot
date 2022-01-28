const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { color } = require('./lib/color')
const {_wait, getBuffer, h2k, generateMessageID, banner, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
const { Miminnya, SesionName, ownerNumber} = require('./setting.json')
require('./zeebot.js')
const moment = require("moment-timezone")
nocache('./zeebot.js', module => console.log(`${module} Im Coming 4you❤️`))
const _gombal = JSON.parse(fs.readFileSync('./lib/data/gombal.json'));
const _welkom = JSON.parse(fs.readFileSync('./lib/data/welcome.json'))
const gombal = _gombal[Math.floor(Math.random() * _gombal.length)]
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight'
}
           
const starts = async (zee = new WAConnection()) => {
    zee.logger.level = 'warn' 
    console.log(banner)
    console.log('\x1b[1;31m×\x1b[1;37m>', '[\x1b[1;32mシ︎\x1b[1;37m]', color('Hallo'), 'Kak', color(`${Miminnya}`))
    console.log(color(`SCRIPT INI DI SUSUN OLEH`,'yellow'))
    console.log(color(`• 𝙁𝙚𝙗𝙧𝙞𝙖𝙣𝙨𝙮𝙖𝙝`,'yellow'))
    console.log(color(`Be Smart People`,'yellow'))   
    console.log(color(`Quotes : ${gombal}`,'cyan'))
    console.log(color('#Semangat Untuk Hari ini','yellow'))
 
    zee.version = [2, 2143, 3]
    zee.browserDescription = [ 'ZeeBotz', 'Safari', '3.5' ]
    zee.on('qr', () => {
    console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Ngab, gk scan gk jadi'))
    })

    fs.existsSync(`./${SesionName}.json`) && zee.loadAuthInfo(`./${SesionName}.json`)
    zee.on('connecting', () => {
    start('2','💜😈')
    })
    zee.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    start('','')
    })
    await zee.connect({timeoutMs: 30*1000})
    fs.writeFileSync(`./${SesionName}.json`, JSON.stringify(zee.base64EncodedAuthInfo(), null, '\t'))
    
    zee.on('chat-update', async (message) => {
    require('./zeebot.js')(zee, message, _welkom)
    })
    
	zee.on('group-participants-update', async (anu) => {
	  const isWelkom = _welkom.includes(anu.jid)
	  
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await zee.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await zee.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
                  
            if (anu.action == 'add' && mem.includes(zee.user.jid)) {
            zee.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }


            if (!isWelkom) return
             if (anu.action == 'add' && !mem.includes(zee.user.jid)) {     
                mdata = await zee.groupMetadata(anu.jid)
                memeg = mdata.participants.length                 
            	num = anu.participants[0]
                groupName = mdata.subject
                let v = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `Selamat Datang Kak *@${mem.split('@')[0]}*\n*Welcome in group *${groupName}*\n*Nomor :* ${mem.replace('@s.whatsapp.net', '')}\nSilahkan Baca Rules Groupnya Kak\n\n*Semoga betah~~*`
              buff = await getBuffer(pic)
              zee.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Welcome Message By *Pebri*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
		
		if (!isWelkom) return
            if (anu.action == 'remove' && !mem.includes(zee.user.jid)) {
                mdata = await zee.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = zee.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Selamat Tinggal Kak @${num.split('@')[0]} Semoga Jasamu Tidak Tenang!`
               buff = await getBuffer(pic)
               zee.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Left Message By *Pebri*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
     
       })
       }
	
       
       
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('[ ! ]', `${module}`, 'Ni Boss Senggol Dong💜😈')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
