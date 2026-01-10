const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "menu",
    react: "📃",
    desc: "Interactive Menu with User & Owner info.",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, pushname, reply }) => {
try {
    // දවස, දිනය සහ වෙලාව සෙට් කරගැනීම
    const date = new Date().toLocaleDateString('en-GB')
    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })

    const menuText = `👋 හලෝ *${pushname}*!

📅 *අද දිනය:* ${date} (${day})
⏰ *වෙලාව:* ${time}

👤 *Bot Owner:* Oshadha Manuppriya
📞 *Owner No:* 0756599952

*OSHIYA MD MAIN MENU*
--------------------------
⚡ .alive - Bot Status
🚀 .ping - Check Speed

*Click the button below for more info!*`

    // Quick Reply Button එක
    const buttons = [
        { buttonId: '.help', buttonText: { displayText: 'HELP MENU ❓' }, type: 1 }
    ]

    const buttonMessage = {
        text: menuText,
        footer: "Powered by Oshiya Md",
        buttons: buttons,
        headerType: 1
    }

    return await conn.sendMessage(from, buttonMessage, { quoted: mek })

} catch (e) {
    console.log(e)
    reply(`අයියෝ වැඩේ ගැස්සුණා බං: ${e}`)
}
})
