const { cmd } = require('../command')

cmd({
    pattern: "boom",
    alias: ["spam"],
    react: "💥",
    desc: "Send multiple messages to a target number (Owner only).",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, args, isOwner, reply }) => {
try {
    // 1. Owner ද කියලා check කරනවා
    if (!isOwner) return reply("*Sorry, only the bot owner can use this*..! 🚫")

    // 2. Number එකයි message එකයි තියෙනවද බලනවා
    if (!args[0]) return reply("*Target Give the number* 📱\n*Example: .boom 9475xxxxxxx Hello*")
    
    let target = args[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
    let spamMsg = args.slice(1).join(" ") || "Oshiya MD Boom! 💥"
    let count = 20 // ඔයා ඉල්ලපු ප්‍රමාණය

    reply(`Oky, User ${args[0]} Messages  ${count} Send... 🚀`)

    // 3. Loop එක පාවිච්චි කරලා මැසේජ් 20ක් යවනවා
    for (let i = 0; i < count; i++) {
        await conn.sendMessage(target, { text: spamMsg })
        // පොඩි delay එකක් දානවා WhatsApp එකෙන් බෑන් නොවී ඉන්න
        await new Promise(resolve => setTimeout(resolve, 500)) 
    }

    return reply("*Complete* ✅")

} catch (e) {
    console.log(e)
    reply(`අයියෝ පොඩි අවුලක්: ${e.message}`)
}
})

