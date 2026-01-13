const { cmd } = require('../command')

// Default එක ඕෆ් කරලා තියෙන්නේ
let autoReact = false

// මැසේජ් එකක් ආපු ගමන් චෙක් කරන කෑල්ල
cmd({
    on: "body"
},
async (conn, mek, m, { from, body, isMe }) => {
    if (autoReact && !m.isBaileys) {
        // ලෝකේ තියෙන ඔක්කොම වගේ emojis සෙට් එකක්
        const allEmojis = ['♏','🔥','✨','💎','🦾','🚀','⭐','😂','😍','👑','⚡','💯','🎈','🎉','🎭','🧿','🧸','🧿','🌈','🍎','🍕','🎸','🎮','🛸','📱','💻','🩷','❤️','💛','💚','🩵','💙','🖤','🩶','🤍','🤎','💔','❤️‍🔥','📉','❤️‍🩹','❣️','💕','💞','💗','💘','💖','💝']
        const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)]
        
        await conn.sendMessage(from, {
            react: {
                text: randomEmoji,
                key: mek.key
            }
        })
    }
})

// ON/OFF කරන කමාන්ඩ් එක (Owner Only)
cmd({
    pattern: "react",
    desc: "Turn Auto React on or off (Owner Only)",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    // බොට් අයිති එකාට විතරයි මේක කරන්න පුළුවන්
    if (!isOwner) return reply("*Sorry man, you have to be the owner of the bot to do this*..! 🚫")

    if (q === "on") {
        autoReact = true
        return reply("*Auto React Enabled* ✅")
    } else if (q === "off") {
        autoReact = false
        return reply("*Auto React Disabled* ❌")
    } else {
        return reply("පාවිච්චි කරන විදිහ: \n.react on - ඔන් කරන්න \n.react off - ඕෆ් කරන්න")
    }
})
