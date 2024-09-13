
const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: problem_solved" //ur yt chanel name
global.socialm = "GitHub: Themalik-g" //ur github or insta name
global.location = "Karachi, Asia" //ur location

//new
global.botname = '𝙻𝙰𝚉𝙰𝙲𝙺 𝙰𝙳𝚅𝙰𝙽𝙲𝙴 𝟶𝟶𝟹' //ur bot name
global.ownernumber = ['923263429027'] //ur owner number, dont add more than one
global.ownername = 'Mehtab' //ur owner name
global.websitex = "https://youtu.be/@problem_solved"
global.wagc = "https://whatsapp.com/channel/0029VajGrB30VycDLLwMn30x"
global.themeemoji = '🪀'
global.wm = "Lazack."
global.botscript = 'https://github.com/fortermu/Lazack-Advanced' //script link
global.packname = "Sticker By"
global.author = "Malik\n\n+923263429027"
global.creator = "923263429027@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923263429027"] // Premium User

//channel id
global.xchannel = {
	jid: '120363333080120023@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '255' //set autoblock country code
global.antiforeignnumber = '1' //set anti foreign number country code

global.listv = ['♦','♠','㊂','➥','➲','㊝','☠','✚','➤','✦','✧','△','○','□','♤','♡','◇','♧','＞']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
