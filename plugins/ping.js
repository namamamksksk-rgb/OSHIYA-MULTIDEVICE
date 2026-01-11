const { cmd } = require("../command");
const os = require('os');
const { runtime } = require('../lib/functions');

cmd({
    pattern: "ping",
    react: "🔥",
    desc: "Check speed with interactive menu link.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply, prefix }) => {
    try {
        const startTime = Date.now()
        const msg = await conn.sendMessage(from, { text: '🚀 *Processing...*' })
        const endTime = Date.now()
        const ping = endTime - startTime

        const responseText = `⚡ *OSHIYA MD SPEED METER* ⚡

🛰️ *Latency:* ${ping}ms
📊 *Status:* Super Fast 🦾

👤 *Owner:* Oshadha Manuppriya

*Click the button below to see all commands!* 👇`

        // Button එකක් විදිහට යවමු (WhatsApp UI Buttons)
        const buttons = [
            { buttonId: `${prefix}menu`, buttonText: { displayText: '📜 MAIN MENU' }, type: 1 }
        ]

        const buttonMessage = {
            text: responseText,
            footer: 'Created by Oshiya-MD',
            buttons: buttons,
            headerType: 1
        }

        await conn.sendMessage(from, buttonMessage, { quoted: mek })
        // කලින් යවපු Processing මැසේජ් එක මකනවා
        await conn.sendMessage(from, { delete: msg.key })

    } catch (e) {
        console.log(e)
        reply("Ping බලද්දී පොඩි අවුලක් වුණා මචං! ❌")
    }
})
