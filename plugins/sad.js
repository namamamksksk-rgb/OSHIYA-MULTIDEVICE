const { cmd } = require('../command')

cmd({
    pattern: "sad",
    desc: "Sad emoji animation.",
    category: "fun",
    filename: __filename
},
async(conn, mek, m, { from, reply }) => {
try {
    const { key } = await conn.sendMessage(from, { text: "😔" })
    
    const emojis = ["💔", "😢", "😭", "🫂", "🥀", "🖤"]
    
    for (let emoji of emojis) {
        await new Promise(resolve => setTimeout(resolve, 500)) // මිලි තත්පර 500 ක පරතරයක්
        await conn.sendMessage(from, { text: emoji, edit: key })
    }
    
    return await conn.sendMessage(from, { text: "OSHIYA-MD : I'm so sad... 🥺", edit: key })

} catch (e) {
    console.log(e)
}
})
