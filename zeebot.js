let {		
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAzeeection,
	RezeeectMode,		
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let ms = require('parse-ms')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let fetch = require('node-fetch')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let { lirikLagu } = require('./lib/lirik.js')
let { EmojiAPI } = require("emoji-api");
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { y2mate } = require('./lib/y2mate');
let moment = require('moment-timezone')
let { color, bgcolor } = require('./lib/color')
let { jagoKata } = require('./lib/jagokata.js')
let { mediafireDl } = require('./lib/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { webp2mp4File } = require("./lib/webp2mp4");
let { fetchJson, fetchText } = require('./lib/fetcher')
let { y2mateA, y2mateV } = require('./lib/y2mate.js')
let { exec, spawn, execSync } = require('child_process')
let { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
let time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
let { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
let { uptotele, uploadFile, uploadImages } = require('./lib/uploadimage');
let { Miminnya, BotName, fake, ownerNumber } = require('./setting.json')
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom, createExif} = require('./lib/functions')

//»»»𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦
let simin = JSON.parse(fs.readFileSync('./lib/data/simi.json'))
let _antilink = JSON.parse(fs.readFileSync('./lib/data/antilink.json'))
let hit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))
let videonye = JSON.parse(fs.readFileSync('./mediadata/video.json'))
let fiturnye = JSON.parse(fs.readFileSync('./lib/data/video.json'))
let imagenye = JSON.parse(fs.readFileSync('./mediadata/image.json'))
let setiker = JSON.parse(fs.readFileSync('./mediadata/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./mediadata/audio.json'))
let tamnel = fs.readFileSync('./media/zeebot.jpg')

//»»»𝘖𝘱𝘵𝘪𝘰𝘯
let p = '```'
publik = true
hit_today = [];
let apikey = 'Deffbotz' //Kalo abis Daftar Atau Beli Di lolhuman.xyz

//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\

function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
		myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
		var tgl = new Date();
		var day = tgl.getDate()
		bulan = tgl.getMonth()
		var thisDay = tgl.getDay(),
		thisDay = myDays[thisDay];
		var yy = tgl.getYear()
		var year = (yy < 1000) ? yy + 1900 : yy;
        return `${thisDay} ${day} ${myMonths[bulan]} ${year}`
}                  
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'GoodNigh🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'GooodEvening🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'GoodEvening🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'GoodAfternoon🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'GoodMoorning🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'GoodNight🏙'
}
        var runtime = function(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        } 
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
        module.exports = zee = async (zee, mek, _welkom) => {
	    try {
        if (!mek.hasNewMessage) return 
        mek = mek.messages.all()[0]
       	if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.prefix
		global.blocked		
	    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
        const hour_now = moment().format('HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[z?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '!'          	
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	    hit_today.push(command);
	  	const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const args = body.trim().split(/ +/).slice(1)
    	const isCmd = body.startsWith(prefix)
       	const v = args.join(' ')
	    const botNumber = zee.user.jid
	    const botNumberss = zee.user.jid + '@c.us'
	    const isGroup = from.endsWith('@g.us')
	    const sender = isGroup ? mek.participant : mek.key.remoteJid
	    const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `6285849261085@s.whatsapp.net`]
     	const isOwner = OwnerNumber.includes(sender)
     	const totalchat = await zee.chats.all()
	    const groupMetadata = isGroup ? await zee.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : ''
    	const groupId = isGroup ? groupMetadata.jid : ''		 
	    const groupMembers = isGroup ? groupMetadata.participants : ''
	    const groupDesc = isGroup ? groupMetadata.desc : ''
     	const groupOwner = isGroup ? groupMetadata.owner : ''
	    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false        
        const isWelkom = isGroup ? _welkom.includes(from) : false
        const isAnti = isGroup ? _antilink.includes(from) : false
        const conts = mek.key.fromMe ? zee.user.jid : zee.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? zee.user.name : conts.notify || conts.vname || conts.name || '-'               
                   
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: '```𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳...```',
		  	  success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
			   error: {
				stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
				 Iv: '```𝘓𝘪𝘯𝘬 𝘌𝘙𝘙𝘖𝘙 𝘉𝘳𝘶𝘩𝘩_-```',
	 	          },
			       only: {
	    	        group: '```𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰```',
	    	        owner: 'Khusus Owner Slurr',
	    	        admin: 'Khusus Admin...',
	    	        bot: 'Bo5 Harus Admin Boss',
                  }
	        	}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            zee.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            zee.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zee.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //+++ || FAKE TROLI         
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: tamnel, surface: 200, message: `𝗭𝗘𝗘𝗦𝗘𝗟𝗙𝗕𝗢𝗧`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }    

const katalog = (teks) => {
             res = zee.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©Zeebot", "jpegThumbnail": fs.readFileSync('./media/zeebot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
             zee.relayWAMessage(res)
        }
        
        function monospace(string) {
            return '```' + string + '```'
        }
        
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        zee.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        zee.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await zee.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        zee.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: mek,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return zee.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return zee.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }                                                         
        const sendMedia = async(from, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(from, text, mids)
        } 
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)
        });
        } 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        zee.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)
        });
        }                                 
        const sendFileFromStorage = (path, type, options) => {
        zee.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }        
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        zee.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        zee.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        zee.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        zee.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        zee.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        zee.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        zee.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        zee.sendMessage(from, hasil, type, options).catch(e => {
        zee.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
        })
        })
        })
        })
        }
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        zee.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }

//--- Total command
        const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./lib/data/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./lib/data/totalcmd.json'))[0].totalcmd
        
// ---- Antilink 
        const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
        if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
        linkgc = await zee.groupInviteCode (from)
        if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
		if (isGroupAdmins) return reply(`Hmm mantap min`)
		zee.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee')
		}, 1100)
		setTimeout( () => {
		zee.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
     	}

		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return 
		}            
		
 
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

	    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	    const isSimi = simin.includes(from)
	    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //No Enc? Buy 5K Dah Dapet
        function _0x7f44(_0x207367,_0x5eab14){var _0x210b40=_0x210b();return _0x7f44=function(_0x7f4460,_0x51374c){_0x7f4460=_0x7f4460-0xa9;var _0x475823=_0x210b40[_0x7f4460];return _0x475823;},_0x7f44(_0x207367,_0x5eab14);}var _0x4d3b6a=_0x7f44;(function(_0x133ca6,_0x6a122a){var _0x4d0de5=_0x7f44,_0x2f4d26=_0x133ca6();while(!![]){try{var _0x28fa68=parseInt(_0x4d0de5(0xba))/0x1*(-parseInt(_0x4d0de5(0xae))/0x2)+parseInt(_0x4d0de5(0xbf))/0x3*(parseInt(_0x4d0de5(0xb8))/0x4)+parseInt(_0x4d0de5(0xbb))/0x5*(-parseInt(_0x4d0de5(0xbc))/0x6)+-parseInt(_0x4d0de5(0xb0))/0x7*(parseInt(_0x4d0de5(0xb9))/0x8)+-parseInt(_0x4d0de5(0xbd))/0x9*(parseInt(_0x4d0de5(0xb4))/0xa)+-parseInt(_0x4d0de5(0xb5))/0xb*(-parseInt(_0x4d0de5(0xb1))/0xc)+parseInt(_0x4d0de5(0xab))/0xd;if(_0x28fa68===_0x6a122a)break;else _0x2f4d26['push'](_0x2f4d26['shift']());}catch(_0x3b1f4a){_0x2f4d26['push'](_0x2f4d26['shift']());}}}(_0x210b,0xcb0f9));if(!isGroup&&isCmd)console[_0x4d3b6a(0xac)](color('[','white'),color('➳',_0x4d3b6a(0xbe)),color(']',_0x4d3b6a(0xb6)),color('NAMA',_0x4d3b6a(0xad)),color(pushname,_0x4d3b6a(0xaa)),color(_0x4d3b6a(0xb3),_0x4d3b6a(0xb6)),color(_0x4d3b6a(0xaf),_0x4d3b6a(0xad)),color(command,_0x4d3b6a(0xbe)),_0x4d3b6a(0xa9),color(args['length']));if(isCmd&&isGroup)console['log'](color('[',_0x4d3b6a(0xb6)),color('➳','lime'),color(']',_0x4d3b6a(0xb6)),color('NAMA',_0x4d3b6a(0xad)),color(pushname,'yellow'),color(_0x4d3b6a(0xb3),_0x4d3b6a(0xb6)),color('FITUR\x20:',_0x4d3b6a(0xad)),color(command,'lime'),color(_0x4d3b6a(0xb2)+groupName,_0x4d3b6a(0xaa)),_0x4d3b6a(0xa9),color(args[_0x4d3b6a(0xb7)]));function _0x210b(){var _0x30eb6e=['283160gswKDv','22hbvvVF','white','length','46256nZrKDB','856MGXHeL','42ahNBVf','10HUGTwF','4532286lIjhkR','45KiVFAG','lime','201QbJjVG','args\x20:','yellow','43043572nuuwff','log','red','22136pfKYYC','FITUR\x20:','107723xRMCey','3058356uSMjSY','Di\x20Group\x20','MENGGUNAKAN'];_0x210b=function(){return _0x30eb6e;};return _0x210b();}

//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\     
switch(is) {
}            
switch (command) {      

    case 'hacked':
	      if (!isOwner) return 
          if (!isGroup) return reply(mess.only.group)
          if (args.length < 1) return reply('Teksnya?')
          reply('Otw Hack')
          tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
          zee.updateProfilePicture (from, tessgc)
          zee.groupUpdateSubject(from, `HACKED BY ${v}`)
          zee.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wita} ${tanggal()}_\n*Tiada Lord Selain Pebri!!*`))                     
          zee.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
          break					
    case "term":
          if (!isOwner) return 
          if (!v) return reply('_-');
          exec(v, (err, stdout) => {
          if (err) return reply(`~ ${err}`);
          if (stdout) {
          reply(stdout);
          }
          });
          break;
    case 'help': case 'menu': case 'helep':
          pp = 'motivasi'
          res = await jagoKata(pp)
          let hasil = `${res[0].isi}\n~${res[0].by}`
          menu =`# Hallo ${pushname}
• BOT STATE 
• Nama Owner : ${Miminnya}
• Nama Bot : ${BotName}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Total Chat : ${totalchat.length}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Browser : ${zee.browserDescription[1]}
• Server : ${zee.browserDescription[0]}
• Version : ${zee.browserDescription[2]}
• Handphone : ${zee.user.phone.device_manufacturer}
• Speed : ${process.uptime()}
• Versi Whatsapp : ${zee.user.phone.wa_version}`
        but = [
          { buttonId: `!allmenu`, buttonText: { displayText: '</menu>' }, type: 1 },
          { buttonId: `!owner`, buttonText: { displayText: '</owner>' }, type: 1 }
        ]
        sendButLocation(from, monospace(menu), `${p}#Quotes Hari Ini!!${p}\n${p}${hasil}${p}\n${p}${wita} || ${tanggal()}${p}`, tamnel, but, {quoted: mek})
          break
    case 'sewa':
          tes =`isi Sendiri`
          zee.sendMessage(from, tes, text, {quoted: troli})
          break  
          
//»»»𝘉𝘶𝘵𝘵𝘰𝘯 𝘉𝘢𝘮𝘩 
    case 'welcome':
          pp = 'on or off?'
          but = [
           { buttonId: `!wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Welcome', but, troli)
          break          
    case 'antilink':
          pp = 'on or off?'
          but = [
           { buttonId: `!anti on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!anti off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Antilink', but, troli)
          break
    case 'group': case 'gc': case 'grup':     	 
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `${prefix}opengc`, buttonText: { displayText: 'OPEN️' }, type: 1 },
           { buttonId: `${prefix}closegc`, buttonText: { displayText: 'CLOSE' }, type: 1 }]
          sendButton(from, menu, 'Created By Pebri', but, troli)
          break           

//>>>WibuMenu
    case /*'nezuko'
    case '
          pin = await hx.pinterest(commnad)
          ac = pin[Math.floor(Math.random() * pin.length)]
          di = await getBuffer(ac)
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but)
          break*/
                    
//»»»𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘔𝘦𝘯𝘶
    case 'gimage':
    case 'googleimage':
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          reply(mess.wait)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result){
          if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
          else {
          var gugImg = result
          var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
          sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
          }
          }
          break 
    case 'pinterest':
          if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
          pin = await hx.pinterest(v)
          ac = pin[Math.floor(Math.random() * pin.length)]
          di = await getBuffer(ac)
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but)
          break
    case 'lirik':
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          reply(mess.wait)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          let lirik = monospace(`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          reply(lirik)
          })
          break
    case 'ytsearch':
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += monospace(`❒「  YtSearch  」\n• Judul : ${i.title}\n• Views : ${i.views}\n• Di Upload Pada : ${i.ago}\n• Durasi : ${i.timestamp}\n• Channel : ${i.author.name}\n• Link Video : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
          break  
          
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶          				
    case "jadibot":
          if (!isOwner && !mek.key.fromMe) return reply('lu bukan owner')
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, zee, from);
          break;
    case "stopjadibot":
          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;	
    case 'ssweb': case 'ss':
          if (args.length < 1) return reply('Urlnya mana kak..')
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
	      buff = await getBuffer(anu.screenshot)
	      zee.sendMessage(from, buff, image, {quoted: mek, caption : v})
          break    
              	
//»»»𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
	case 'public':
	  	  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = true
		  reply('Sukses mengubah mode self ke public')
		  break
	case 'self':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = false
		  reply('Sukses mengubah mode public ke self')
		  break
	case 'setthumb':
	      if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  delb = await zee.downloadMediaMessage(boij)
		  fs.writeFileSync(`./media/zeebot.jpg`, delb)
		  reply('Sukses')
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          }
	  	  break
    case 'runtime':
    case 'test':
          if (!isOwner) return reply('Khusus Owner..')
          run = process.uptime() 
          teks = `${runtime(run)}`
          reply(teks)
          break  
	case 'speed':
	case 'ping':
	      if (!isOwner) return reply('Khusus Owner..')
	  	  const timestamp = speed();
	  	  const latensi = speed() - timestamp
		  exec(`neofetch --stdout`, (error, stdout, stderr) => {
		  const child = stdout.toString('utf-8')
	  	  const teks = child.replace(/Memory:/, "Ram:")
	 	  const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
		  reply(pingnya)
		  })
		  break
    case 'bc': case 'broadcast':
          if (!isOwner) return  reply(mess.only.owner)
          if (args.length < 1) return reply('teks?')
          anu = await zee.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          bc = await zee.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          tes = `${body.slice(4)}`
          zee.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `© cikobot 2K22`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          } else {
          for (let _ of anu) {
       	  textt = `${body.slice(4)}`
          zee.sendMessage(_.jid, { contentText: `${textt}`, footerText: `${p}${wita} || ${tanggal()}${p}`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          }
          break    
          
//»»»𝘔𝘦𝘥𝘪𝘢 𝘔𝘦𝘯𝘶
    case 'toimg':      
		  if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
	      reply(mess.wait)
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zee.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.png')
	      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
	      buffer = fs.readFileSync(ran)
		  zee.sendMessage(from, buffer, image, {quoted: mek})
		  fs.unlinkSync(ran)
		  })
	      break
	  case 'tourl':
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await zee.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;	            
    case "emoji":
    case "semoji":
          if (args.length < 1) return reply(`Send command *${prefix}semoji 😁`)
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
          });
          break
    case "tomp4":
          if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
          ) {
          ger = isQuotedSticker
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await zee.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
          sendMediaURL(from, res.result, "Done");
          });
          } else {
          reply("reply stiker");
          }
          fs.unlinkSync(owgi);
          break;			
	case 'attp':
          if (args.length == 0) return reply(`Example: ${prefix + command} zee`)
          buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
          zee.sendMessage(from, buffer, sticker, { quoted: mek })
          break;		  
    case 'sticker': case 'stiker': case 'sg': case 's':
          var a = "ZeeBot";
          var b = "By Pebri";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await zee.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          zee.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          zee.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await zee.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          zee.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          zee.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await zee.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, zee, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;

//»»»𝘚𝘵𝘰𝘳𝘢𝘨𝘦
    case 'addvideo':
		  if (!isQuotedVideo) return reply('Reply videonya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama videonya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/video/${svst}.mp4`, delb)
		  fs.writeFileSync('./mediadata/video.json', JSON.stringify(videonye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
		  break					
    case 'getvideo':
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/video/${namastc}.mp4`)
		  zee.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
		  break					
	case 'listvideo':
	case 'videolist':
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
		  break
    case 'getsticker':
	case 'gets': 
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./mediadata/stiker/${namastc}.webp`)
		  zee.sendMessage(from, result, sticker, {quoted :mek})
		  break
    case 'stickerlist':
	case 'liststicker': 
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
	      break
    case 'addsticker':
    case 'addstiker':
		  if (!isQuotedSticker) return reply('Reply stiker nya')
	      svst = body.slice(12)
		  if (!svst) return reply('Nama sticker nya apa?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./mediadata/stiker/${svst}.webp`, delb)
		  fs.writeFileSync(`./mediadata/stik.json`, JSON.stringify(setiker))
	  	  zee.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
	      svst = body.slice(7)
		  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zee.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/audio/${svst}.mp3`, delb)
		  fs.writeFileSync('./mediadata/audio.json', JSON.stringify(audionye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
		  break			
	case 'listvn':
	case 'vnlist': 
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
		  break
    case 'getvn': 
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./mediadata/audio/${namastc}.mp3`)
	 	  zee.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
		  break
    case 'addimage':
		  if (!isQuotedImage) return reply('Reply imagenya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama imagenya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await zee.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/image/${svst}.jpeg`, delb)
		  fs.writeFileSync('./mediadata/image.json', JSON.stringify(imagenye))
		  zee.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
		  break					
	case 'getimage':
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/image/${namastc}.jpeg`)
		  zee.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
		  break					
    case 'imglist':
	case 'listimg':
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  zee.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break
          
//»»»𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳          
     case 'tovn':           
           if (!isQuotedAudio) return reply('Reply Audionya')
           reply(mess.wait)
		   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.mp3')
		   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		   fs.unlinkSync(media)
		   if (err) return reply('Gagal mengkonversi audio ke ptt')
		   topt = fs.readFileSync(ran)
		   zee.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
		   })
		   break				           
     case "tomp3":           
           if (!isQuotedVideo) return reply("Reply videonya!");
           reply(mess.wait);
           encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
           .message.extendedTextMessage.contextInfo;
           media = await zee.downloadAndSaveMediaMessage(encmedia);
           ran = getRandom(".mp4");
           exec(`ffmpeg -i ${media} ${ran}`, (err) => {
           fs.unlinkSync(media);
           if (err) return fakegroup(`Err: ${err}`);
           buffer453 = fs.readFileSync(ran);
           zee.sendMessage(from, buffer453, audio, {
           mimetype: "audio/mp4",
           quoted: mek,
           });
           limitAdd(sender, limit)
           fs.unlinkSync(ran);
           });
           break;          
     case "fast":            
           if (!isQuotedVideo) return reply("Reply videonya!");
           reply(mess.wait);
           encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
           .message.extendedTextMessage.contextInfo;
           media = await zee.downloadAndSaveMediaMessage(encmedia);
           ran = getRandom(".mp4");
           exec(
           `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
           (err) => {
           fs.unlinkSync(media);
           if (err) return fakegroup(`Err: ${err}`);
           buffer453 = fs.readFileSync(ran);
           zee.sendMessage(from, buffer453, video, {
           mimetype: "video/mp4",
           quoted: mek,
           });
           fs.unlinkSync(ran);
           }
           );
           break;
     case "slow":            
           if (!isQuotedVideo) return reply("Reply videonya!");
           reply(mess.wait);
           encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
           .message.extendedTextMessage.contextInfo;
           media = await zee.downloadAndSaveMediaMessage(encmedia);
           ran = getRandom(".mp4");
           exec(
           `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
           (err) => {
           fs.unlinkSync(media);
           if (err) return fakegroup(`Err: ${err}`);
           buffer453 = fs.readFileSync(ran);
           zee.sendMessage(from, buffer453, video, {
           mimetype: "video/mp4",
           quoted: mek,
           });
           fs.unlinkSync(ran);
           }
           );
           break;
     case "reverse":            
           if (!isQuotedVideo) return reply("Reply videonya!");
           encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
           .message.extendedTextMessage.contextInfo;
           media = await zee.downloadAndSaveMediaMessage(encmedia);
           ran = getRandom(".mp4");
           exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
           fs.unlinkSync(media);
           if (err) return fakegroup(`Err: ${err}`);
           buffer453 = fs.readFileSync(ran);
           zee.sendMessage(from, buffer453, video, {
           mimetype: "video/mp4",
           quoted: mek,
           });
           fs.unlinkSync(ran);
           });
           break;      
     case 'bass':             
           if (!isQuotedAudio) return reply('Reply Audionya')
	   	   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.mp3')
		   exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
		   fs.unlinkSync(media)
		   if (err) return reply('Error!')
		   hah = fs.readFileSync(ran)
		   zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		   fs.unlinkSync(ran)
		   })
		   break
     case 'nightcore':            
      	   if (!isQuotedAudio) return reply('Reply Audionya')
		   night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   core = await zee.downloadAndSaveMediaMessage(night)
		   ran = getRandom('.mp3')
		   reply(mess.wait)
		   exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		   fs.unlinkSync(core)
		   if (err) return reply('Error!')
		   hah = fs.readFileSync(ran)
		   zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		   fs.unlinkSync(ran)
		   })
	       break
     case 'gemuk':            
           if (!isQuotedAudio) return reply('Reply Audionya')
		   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.mp3')
		   exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
	       fs.unlinkSync(media)
		   if (err) return reply('Error!')
		   hah = fs.readFileSync(ran)
		   zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		   fs.unlinkSync(ran)
	 	   })
		   break
     case 'tupai':           
           if (!isQuotedAudio) return reply('Reply Audionya')
		   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.mp3')
		   exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
		   fs.unlinkSync(media)
		   if (err) return reply('Error!')
		   hah = fs.readFileSync(ran)
		   zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		   fs.unlinkSync(ran)
		   })
		   break
     case 'slow2':            
           if (!isQuotedAudio) return reply('Reply Audionya')
		   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		   media = await zee.downloadAndSaveMediaMessage(encmedia)
		   ran = getRandom('.mp3')
  	       exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		   fs.unlinkSync(media)
		   if (err) return reply('Error!')
	       hah = fs.readFileSync(ran)
	       zee.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		   fs.unlinkSync(ran)
		   })
		   break 

//===Up SW		   
   case 'upswteks':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         if (args.length < 1) return reply('Teksnya?')
         teks = body.slice(10)
         zee.sendMessage('status@broadcast', teks, MessageType.text)
         reply(`Sukses upload status:\n${teks}`)
         break	
   case 'upswlokasi':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
         if (args.length < 1) return reply('Teksnya?')
         teks = body.slice(12)
         zee.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
         reply(`Sukses upload lokasi:\n${teks}`)
         break	
   case 'upswsticker':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         if (!isQuotedSticker) return reply('Reply stikernya!')
         if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
	     const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		 buff = await zee.downloadMediaMessage(encmedia)
		 zee.sendMessage('status@broadcast', buff, sticker)
	     }
		 reply(`Sukses upload sticker`)
         break
   case 'upswaudio':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         if (!isQuotedAudio) return reply('Reply audionya!')
         if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
	     const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	     buff = await zee.downloadMediaMessage(encmedia)
	     zee.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		 }
		 reply(`Sukses upload audio`)
		 break
   case 'upswvoice':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
         if (!isQuotedAudio) return reply('Reply audionya!')
         if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		 const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	     buff = await zee.downloadMediaMessage(encmedia)
		 zee.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	 }
		 reply(`Sukses upload voice`)
		 break
   case 'upswvideo':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         var konti = body.slice(11)
         reply(mess.wait)
         var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		 var mediap = await zee.downloadAndSaveMediaMessage(enmediap)
         const buffer3 = fs.readFileSync(mediap)
         zee.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
         reply(`Sukses upload video:\n${konti}`)
         break
   case 'upswgif':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         var konti = body.slice(7)
         reply(mess.wait)
         enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	     media = await zee.downloadAndSaveMediaMessage(enmedia)
         const buffer6 = fs.readFileSync(media)
         zee.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
         reply(`Sukses upload gif:\n${konti}`)
         break
   case 'upswimage':
         if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
         var teksyy = body.slice(11)
         reply(mess.wait)
         enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	     media = await zee.downloadAndSaveMediaMessage(enmedia)
         buffer = fs.readFileSync(media)
         zee.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
         reply(`Sukses upload image:\n${teksyy}`)
         break		   
		            	            	       
//»»»𝘎𝘳𝘰𝘱 𝘔𝘦𝘯𝘶	        
     case 'wel':   
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
           if ((args[0]) === 'on') {
           if (isWelkom) return reply('welcome sudah aktif')
           _welkom.push(from)
           fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
           reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
           } else if ((args[0]) === 'off') {
           if (!isWelkom) return reply('welcome sudah off sebelumnya')
           _welkom.splice(from, 1)
           fs.writeFileSync('./lib/data/welcome.json', JSON.stringify(_welkom))
           reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
           } else {
           reply('on untuk mengaktifkan, off untuk menonaktifkan')
           }
           break		           		              	  
     case 'modesimi':
           if (args.length < 1) return reply('hmm')
           if (Number(args[0]) === 1) {
           simin.push(from)
           fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
           reply('Sukses mengaktifkan mode simi')
           } else if (Number(args[0]) === 0) {
           simin.splice(from, 1)
           fs.writeFileSync('./lib/data/simi.json', JSON.stringify(simin))
           reply('Sukes menonaktifkan mode simi')
           } else {
           reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
           }
           break
     case 'anti':
	  	   if (!isGroup) return reply(mess.only.group)
		   if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
	       if (!isBotGroupAdmins) return reply('Bot Harus Admin')
		   if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
		   if ((args[0]) === 'on') {
		   if (isAnti) return reply('Antilink aktif')
		   _antilink.push(from)
	  	   fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		   reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		   } else if ((args[0]) === 'off') {
		   if (!isAnti) return reply('Antilink off')
		   _antilink.splice(from, 1)
	       fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
		   reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		   } else {
	 	   reply('On untuk mengaktifkan & off untuk menonaktifkan')
		   }
	 	   break
     case 'opengc':
     	   if (!isGroup) return reply(mess.only.group)
	       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
           reply(`Sukses Membuka Grup ${groupName}`)
		   zee.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   break
     case 'closegc':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
		   reply(`Sukses Menutup Grup ${groupName}`)
		   zee.groupSettingChange(from, GroupSettingChange.messageSend, true)
		   break   	 	   
     case "groupinfo": case 'gcinfo': case 'infogc':       	       
           if (!isGroup) return;
           ppUrl = await zee.getProfilePicture(from); // leave empty to get your own
           buffergbl = await getBuffer(ppUrl);
           zee.sendMessage(from, buffergbl, image, {
           quoted: mek,
           caption: `\`\`\`「 Group Info 」\`\`\`\n\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
           });
           break;
     case 'setdesc':
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
           if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
           teks = body.slice(9)
           zee.groupUpdateDescription(from, teks)
           break	       
   	 case 'setppgc': 
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           media = await zee.downloadAndSaveMediaMessage(mek)
           await zee.updateProfilePicture (from, media)
           reply('[SUKSES] Mengganti icon grub')
	  	   break
   	 case 'setname':
           if (!isGroup) return reply(mess.only.group)
    	   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
           zee.groupUpdateSubject(from, `${body.slice(9)}`)
           reply('Succes, Ganti Nama Grup')	  	   
 	  case 'add':
	       if (!isGroup) return reply(mess.only.bot)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   reply('Opps... Fitur Dalam Perbaikan Kak>_<')
		   break
	   /*    if (args.length < 1) return reply('Yang mau di add jin ya?')
		   if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		   try {
		   num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		   zee.groupAdd(from, [num])
	       } catch (e) {
	  	   console.log('Error :', e)
	 	   reply('Gagal menambahkan target, mungkin karena di private')
		   }
		   break*/
     case 'kick':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(`bot harus admin`)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `asek dapat makanan,otw mengkickmu, 🏃sksks :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   zee.groupRemove(from, mentioned)
		   } else {
		   mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
		   zee.groupRemove(from, mentioned)
		   }
		   break		   
	 case 'demote':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
	       mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
	 	   teks = ''
		   for (let _ of mentioned) {
		   teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
	 	   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
	 	   zee.groupDemoteAdmin(from, mentioned)
		   } else {
		   mentions(`YA HAHAHA  WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
	  	   zee.groupDemoteAdmin(from, mentioned)
		   }
	       break
	 case 'promote':
		   if (!isGroup) return reply(mess.only.group)
	       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
	       if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   zee.groupMakeAdmin(from, mentioned)
		   } else {
		   mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
		   zee.groupMakeAdmin(from, mentioned)
		   }
		   break
     case 'revoke': case 'risetgc': case 'resetlink':
     case 'revokegroup': case 'revokelink': {
           if (!isGroup) return reply(mess.only.group)
           if (!isGroupAdmins)return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           var linkgc = await zee.revokeInvite(from)
           mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
           }
           break
     case 'linkgc': case 'link':
     case 'linkgroup':
           linkgc = await zee.groupInviteCode(from)
           reply('https://chat.whatsapp.com/'+linkgc)  
           break         	   
     case 'join':case 'joingc':
		   if (args.length < 1) return reply(`link broo?*`)
		   if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('gkvalid..')
	       reply('Tunggu Sebentar..')
		   link = args[0].replace('https://chat.whatsapp.com/','')
	  	   fak = zee.query({ json: ['action', 'invite', link],
		   expect200: true })
		   reply('Berhasil Masuk Grup')
           break		
     case 'delete': case 'del': case 'D':
	       if (!isGroup)return reply(mess.only.group)
		   try {
		   zee.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		   } catch (e) {
		   reply('Hanya bisa menghapus pesan dariku')
	  	   }
		   break  
    case 'hidetag':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    	  var value = args.join(' ')
		  var group = await zee.groupMetadata(from)
		  var member = group['participants']
		  var mem = []
    	  member.map(async adm => {
		  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		  })
		  var optionshidetag = {
	      text: value,
		  contextInfo: { mentionedJid: mem },
		  quoted: mek
	      }
	      zee.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
	      break
    case 'tagall':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  members_id = []
		  teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
		  for (let mem of groupMembers) {
		  teks += `├> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
		  }
		  teks += `└──────────────`
	 	  mentions(teks, members_id, true)
		  break		            		           
//»»»𝘋𝘰𝘸𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶     									
    case 'play':
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          reply('Bentar Om lagi Nyari')
          let yut = await yts(v)
          yta(yut.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await zee.prepareMessage(from, ya, image)
          sendButloc(from,monospace(capti),'',`*select the type you want to download*`,[{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          })
          break      
    case 'ytmp3':
          if (args.length < 1) return reply('Link?')           
          if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
          reply("Please Waiting!! Downloading Media. . .")
          teks = args.join(' ')
          res = await y2mateA(teks)
          sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
          break         
    case 'ytmp4':
          if (args.length < 1) return reply('Link?')     
          res = await ytv(`${v}`).catch(e => {
          reply('```[ ! ] Error Saat Mengirim Video```')})
          sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
          break
    case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':    	        	    
 	      if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
 	      if (!v) return reply('Link?')
 		  reply(mess.wait)
		  hx.ttdownloader(`${args[0]}`)
    	  .then(result => {
          const { wm, nowm, audio } = result
          axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
          .then(async (a) => {
    	  me = `𝘕𝘦𝘩 𝘉𝘳𝘰𝘰✔︎`
	      zee.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
          })
		  })
		  break
    case "twitter":
           if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
           return reply(mess.error.url);
           if (!v) return fakegroup("Linknya?");
           ten = args[0];
           var res = await hx.twitter(`${ten}`);
           ren = `${g.HD}`;
           sendMediaURL(from, ren, "Nih kak video nya!!");
           break;
     case "facebook":
           if (!v) return reply("Linknya?");
           if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
           return reply(mess.error.url);
           reply(mess.wait);
           te = args.join(" ");
           hx.fbdown(`${te}`).then((G) => {
           ten = `${G.HD}`;
           sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
           });
           break;
     case "instagram":
           if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
           return reply(mess.error.url);
           if (!v) return reply("Linknya?");
           reply(mess.wait);
           hx.igdl(args[0]).then(async (result) => {
           for (let i of result.medias) {
           if (i.url.includes("mp4")) {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, video, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           } else {
           let link = await getBuffer(i.url);
           zee.sendMessage(from, link, image, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           }
           }
           });
           break;		  		  
    case 'mediafire':
          if (args.length < 1) return reply('Link Nya Mana? ')
          if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
          reply(mess.wait)
          teks = args.join(' ')
          res = await mediafireDl(teks)
          result = monospace(`❒「  MediaFire  」\n• Nama : ${res[0].nama}\n• Ukuran : ${res[0].size}\n• Link : ${res[0].link}`)
          but = [
           { buttonId: `!dwd`, buttonText: { displayText: 'DOWNLOAD️' }, type: 1 }]
          sendButton(from, result, 'MediaFire Downloader', but, troli)
          break
          case 'dwd':
          sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
          break
//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await zee.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
          var ButtonssMessages = {
          contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
          buttons: buttonnsss,
          footerText: `Klik Next Untuk Melanjutkan`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await zee.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          fs.unlinkSync(`./${sender}.jpeg`)
          break                 
//»»»𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶          
  // Textprome //
    case 'blackpink':      case 'neon':
    case 'greenneon':     case 'advanceglow':
    case 'futureneon':    case 'sandwriting':
    case 'sandsummer':  case 'sandengraved':
    case 'metaldark':     case 'neonlight':
    case 'holographic':   case 'text1917':
    case 'minion':        case 'deluxesilver':
    case 'newyearcard':  case 'bloodfrosted':
    case 'halloween':     case 'jokerlogo':
    case 'fireworksparkle':case 'natureleaves':
    case 'bokeh':         case 'toxic':
    case 'strawberry':    case 'box3d':
    case 'roadwarning':  case 'breakwall':
    case 'icecold':        case 'luxury':
    case 'cloud':          case 'summersand':
    case 'horrorblood':   case 'thunder':
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command + v}`, `${fake}`, gambar, but)
          })
          break
    case 'pornhub':      case 'glitch':
    case 'avenger':      case 'space':
    case 'ninjalogo':     case 'marvelstudio':
    case 'lionlogo':      case 'wolflogo':
    case 'steel3d':       case 'wallgravity':
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          txt1 = args[0]
          txt2 = args[1]
          getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command + v}`, `${fake}`, gambar, but)
          })
          break
         // Photo Oxy //
    case 'shadow':  case 'cup':
    case 'cup1':     case 'romance':
    case 'smoke':   case 'burnpaper':
    case 'lovemessage': case 'undergrass':
    case 'love':      case 'coffe':
    case 'woodheart': case 'woodenboard':
    case 'summer3d': case 'wolfmetal':
    case 'nature3d':   case 'underwater':
    case 'golderrose': case 'summernature':
    case 'letterleaves': case 'glowingneon':
    case 'fallleaves':   case 'flamming':
    case 'harrypotter': case 'carvedwood':
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command + v}`, `${fake}`, gambar, but)
          })
          break
    case 'arcade8bit':
    case 'battlefield4':
    case 'pubg':
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          txt1 = args[0]
          txt2 = args[1]
          getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          but = [
          { buttonId: `!allmenu`, buttonText: { displayText: 'back to menu' }, type: 1 }]
          sendButImage(from, `${command + v}`, `${fake}`, gambar, but)
          })
          break
          // Ephoto 360 //
    case 'wetglass':     case 'multicolor3d':
    case 'watercolor':    case 'luxurygold':
    case 'galaxywallpaper':  case 'lighttext':
    case 'beautifulflower':  case 'puppycute':
    case 'royaltext':      case 'heartshaped':
    case 'birthdaycake':  case 'galaxystyle':
    case 'hologram3d':  case 'greenneon':
    case 'glossychrome': case 'greenbush':
    case 'metallogo':    case 'noeltext':
    case 'glittergold':    case 'textcake':
    case 'starsnight':    case 'wooden3d':
    case 'textbyname':  case 'writegalacy':
    case 'galaxybat':    case 'snow3d':
    case 'birthdayday':  case 'goldplaybutton':
    case 'silverplaybutton': case 'freefire':
          if (args.length == 0) return reply(`Example: ${prefix + command} zeebot`)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
          zee.sendMessage(from, gambar, image, { quoted: mek })
          })
          break
//++Menunya          
    case 'allmenu': case 'm2':
          let q = 0
          pp = monospace(` ❏「 OWNER 」	          
0${q+=1}.ping
0${q+=1}.self
0${q+=1}.public
0${q+=1}.runtime
0${q+=1}.setthumb

 ❏「 TOOLS 」	
0${q+=1}.jadibot
0${q+=1}.stopjadibot
0${q+=1}.listjadibot

 ❏「 VVIBU 」
0${q+=1}.loli
${q+=1}.milf
${q+=1}.waifu
${q+=1}.husbu
${q+=1}.wallml
${q+=1}.cosplay

 ❏「 SEARCH 」
${q+=1}.ssweb link 
${q+=1}.lirik lirik lagu
${q+=1}.gimage	query
${q+=1}.pinterest query
${q+=1}.ytsearch query

 ❏「 DOWLOAD 」	
${q+=1}.play query
${q+=1}.tiktok link
${q+=1}.ytmp3 link
${q+=1}.ytmp4 link
${q+=1}.twitter link
${q+=1}.facebook link
${q+=1}.Instagram link
${q+=1}.mediafire link

 ❏「 MEDIA 」	
${q+=1}.attp text
${q+=1}.tourl
${q+=1}.toimg reply
${q+=1}.semoji emot
${q+=1}.sticker reply

 ❏「 UPSWBOT 」
${q+=1}.upswgift
${q+=1}.upswteks
${q+=1}.upswvideo
${q+=1}.upswaudio
${q+=1}.upswvoice
${q+=1}.upswlokasi
${q+=1}.upswimage
${q+=1}.upswsticker	

 ❏「 GROUP 」	
${q+=1}.group
${q+=1}.hacked
${q+=1}.tagall 
${q+=1}.hidetag 
${q+=1}.add 62
${q+=1}.linkgroup
${q+=1}.resetlink
${q+=1}.kick tag
${q+=1}.join link
${q+=1}.demote tag
${q+=1}.promote tag
${q+=1}.del replymes
${q+=1}.setdesc text
${q+=1}.setname name
${q+=1}.setppgc replyimg
${q+=1}.antilink
${q+=1}.welcome

 ❏「 STORAGE 」
${q+=1}.listvn
${q+=1}.listvideo
${q+=1}.liststicker
${q+=1}.listimg
${q+=1}.addvn nama
${q+=1}.addvideo nama
${q+=1}.addsticker nama
${q+=1}.addimage nama
${q+=1}.getvn data
${q+=1}.getvideo data
${q+=1}.getsticker data
${q+=1}.getimage data

 ❏「 CONVERT 」
${q+=1}.tovn replyaudio
${q+=1}.tomp3 replyvideo
${q+=1}.fast replyvideo 
${q+=1}.slow replyvideo 
${q+=1}.reverse replyvideo 
${q+=1}.slow2 replyaudio 
${q+=1}.bass replyaudio 
${q+=1}.tupai replyaudio
${q+=1}.gemuk replyaudio 
${q+=1}.nightcore replyaudio

 ❏「 Text Pro Me 」	
${q+=1}.blackpink text
${q+=1}.neon text
${q+=1}.greenneon text
${q+=1}.advanceglow text
${q+=1}.futureneon text
${q+=1}.sandwriting text
${q+=1}.sandsummer text
${q+=1}.sandengraved text
${q+=1}.metaldark text
${q+=1}.neonlight text
${q+=1}.holographic text
${q+=1}.text1917 text
${q+=1}.minion text
${q+=1}.deluxesilver text
${q+=1}.newyearcard text
${q+=1}.bloodfrosted text
${q+=1}.halloween text
${q+=1}.jokerlogo text
${q+=1}.fireworksparkle text
${q+=1}.natureleaves text
${q+=1}.bokeh text
${q+=1}.toxic text
${q+=1}.strawberry text
${q+=1}.box3d text
${q+=1}.roadwarning text
${q+=1}.breakwall text
${q+=1}.icecold text
${q+=1}.luxury text
${q+=1}.cloud text
${q+=1}.summersand text
${q+=1}.horrorblood text
${q+=1}.thunder text
${q+=1}.pornhub text text
${q+=1}.glitch text text
${q+=1}.avenger text text
${q+=1}.space text text
${q+=1}.ninjalogo text text
${q+=1}.marvelstudio text text
${q+=1}.lionlogo text text
${q+=1}.wolflogo text text
${q+=1}.steel3d text text
${q+=1}.wallgravity text text

 ❏「 Photo OXY 」	
${q+=1}.shadow text
${q+=1}.cup text
${q+=1}.cup1 text
${q+=1}.romance text
${q+=1}.smoke text
${q+=1}.burnpaper text
${q+=1}.lovemessage text
${q+=1}.undergrass text
${q+=1}.love text
${q+=1}.coffe text
${q+=1}.woodheart text
${q+=1}.woodenboard text
${q+=1}.summer3d text
${q+=1}.wolfmetal text
${q+=1}.nature3d text
${q+=1}.underwater text
${q+=1}.golderrose text
${q+=1}.summernature text
${q+=1}.letterleaves text
${q+=1}.glowingneon text
${q+=1}.fallleaves text
${q+=1}.flamming text
${q+=1}.harrypotter text
${q+=1}.carvedwood text
${q+=1}.arcade8bit text text
${q+=1}.battlefield4 text text
${q+=1}.pubg text text

 ❏「 Photo 360° 」	
${q+=1}.wetglass text
${q+=1}.multicolor3d text
${q+=1}.watercolor text
${q+=1}.luxurygold text
${q+=1}.galaxywallpaper text
${q+=1}.lighttext text
${q+=1}.beautifulflower text
${q+=1}.puppycute text
${q+=1}.royaltext text
${q+=1}.heartshaped text
${q+=1}.birthdaycake text
${q+=1}.galaxystyle text
${q+=1}.hologram3d text
${q+=1}.greenneon text
${q+=1}.glossychrome text
${q+=1}.greenbush text
${q+=1}.metallogo text
${q+=1}.noeltext text
${q+=1}.glittergold text
${q+=1}.textcake text
${q+=1}.starsnight text
${q+=1}.wooden3d text
${q+=1}.textbyname text
${q+=1}.writegalacy text
${q+=1}.galaxybat text
${q+=1}.snow3d text
${q+=1}.birthdayday text
${q+=1}.goldplaybutton text
${q+=1}.silverplaybutton text
${q+=1}.freefire text

 ❏「 EVAL 」
${q+=1}.term`)        
          but = [
           { buttonId: `!owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ️' }, type: 1 },
           { buttonId: `!sewa`, buttonText: { displayText: 'sᴇᴡᴀ' }, type: 1 }]
          sendButton(from, pp, 'Created By Pebri', but, troli)
          break         
          
         case 'owner':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:${Miminnya}\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n`
         + 'END:VCARD'.trim()
         zee.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: troli, 
         })
         reply('*_Jangan Lupa Subscrib_*\nhttps://youtube.com/c/FEBZABOTZ')
         break
             
		                         
   default:
          if (isSimi && bodi != undefined){
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
          pp = res.data.success
          zee.sendMessage(from, pp, text)
          }
          if (isCmd) {      
          menu = monospace(`Maaf kak ${pushname}_<\nCommand ${command} Tidak tersedia di list menu!!\nMohon cek kembali list menu nya kak`)
          but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
          sendButton(from, menu, 'Created By Pebri', but, mek)
          break
          }
              
          if (budy.startsWith('>')) {
          console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	      try {
	      let evaled = await eval(budy.slice(2))
		  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		  reply(`${evaled}`)
	      } catch (err) {
	      reply(`${err}`)
		  }
		  } else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		  try {
	 	  return zee.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
	      } catch (err) {
		  e = String(err)
		  reply(e)
		  }
	      }
          }
		
    	  } catch (e) {
          e = String(e)
          if (!e.includes("this.isZero") && !e.includes("jid")) {
    	  console.log('Error : %s', color(e, 'red'))
          }
    	  }
          }

    
