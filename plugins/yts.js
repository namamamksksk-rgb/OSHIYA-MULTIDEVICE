const { cmd } = require('../command')
const yts = require('yt-search')

cmd({
    pattern: "video",
    desc: "Download YouTube videos by link or name.",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
try {
    if (!q) return reply("මචං, වීඩියෝ එකේ නම හරි YouTube Link එක හරි දියන්! 🧐")

    const search = await yts(q)
    const data = search.videos[0]
    const url = data.url

    let desc = `🎬 *OSHIYA MD VIDEO DOWNLOADER* 🎬

🎵 *Title:* ${data.title}
🕒 *Duration:* ${data.timestamp}
👁️ *Views:* ${data.views}
🔗 *Link:* ${url}

*📥 Downloading your video please wait...*
✨ *Oshiya MD*`

    // Thumbnail එකත් එක්ක විස්තර යවනවා
    await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek })

    // මෙතනින් වීඩියෝ එක යවනවා (Use your preferred YT DL API)
    await conn.sendMessage(from, { 
        video: { url: `https://api.giftedtech.my.id/api/download/ytmp4?url=${url}&apikey=gifted` }, 
        caption: data.title,
        mimetype: 'video/mp4' 
    }, { quoted: mek })

} catch (e) {
    console.log(e)
    reply(`අයියෝ වීඩියෝ එක ගන්න ගිහින් අවුලක් වුණා මචං: ${e.message}`)
}
})
