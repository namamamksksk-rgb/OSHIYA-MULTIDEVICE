const { cmd } = require('../command')

cmd({
    pattern: "alive",
    react: "🗂",
    desc: "Check if the bot is active with full details.",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, pushname, reply }) => {
try {
    // දවස, දිනය සහ වෙලාව සෙට් කරගමු
    const date = new Date().toLocaleDateString('en-GB')
    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const time = new Date().toLocaleTimeString()

    // 1. Auto Voice එක යවනවා
    await conn.sendMessage(from, { 
        audio: { url: 'https://github.com/oshadha12345/images/raw/refs/heads/main/Voice/Funk%20criminal%20(slowed)%20-%20icedmane_%20dysmane%20%5Bedit%20audio%5D(MP3_160K).mp3' }, 
        mimetype: 'audio/mp4', 
        ptt: false 
    }, { quoted: mek })

    // Alive මැසේජ් එක
    let aliveMsg = `╭━━〔 *OSHIYA* 〕━━⬣
│
├ 📅 *Day:* ${day}
├ 📅 *Date:* ${date}
├ 👤 *User:* ${pushname}
├ ⚡ *Status:* ✅ *Online* 
│
├ 🔧 *Prefix:* .
├ 💬 *Commands:* *Menu/all..*
│
├ 🤖 *Bot By:* *OSHIYA-〽️D*
├ 🛠️ *Powered By:* *OSHIYA TEAM*
│
╰━━〔 *OSHIYA ALIVE* 〕━━⬣`

    // 2. Image එකත් එක්ක මැසේජ් එක යවනවා
    return await conn.sendMessage(from, {
        image: { url: 'https://raw.githubusercontent.com/oshadha12345/images/refs/heads/main/20251222_040815.jpg' }, // මෙතනට උඹ කැමති Image link එකක් දාපන්
        caption: aliveMsg
    }, { quoted: mek })

} catch (e) {
    console.log(e)
    reply(`අයියෝ Alive එක දාද්දි පොඩි අවුලක් වුණා: ${e.message}`)
}
})
