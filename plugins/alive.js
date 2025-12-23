const {cmd , commands} = require('../command')
const config = require('../config');

cmd({
    pattern: "alive",
    react: "🔥",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    await robin.sendPresenceUpdate('recording', from);
    await robin.sendMessage(from, { audio: { url: "https://github.com/oshadha12345/images/raw/refs/heads/main/Voice/Bully%20Maguire%20edit%20%F0%9F%97%BF_%20Parano%20(Slowed)%20_(MP3_160K).mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

