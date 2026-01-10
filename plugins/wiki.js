const { cmd } = require('../command')
const wiki = require('wikijs').default // මේක නැත්නම් npm install wikijs ගහපන්

cmd({
    pattern: "wiki",
    react: "📚",
    alias: ["wikipedia"],
    desc: "Search Wikipedia for information.",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
try {
    if (!q) return reply("අඩෝ මොකක් ගැනද දැනගන්න ඕනේ? නමක් කියපන්! 🧐")

    await reply("Searching Wikipedia... 🔍")
    
    const search = await wiki().search(q)
    if (!search.results.length) return reply("අයියෝ ඕක ගැන විස්තරයක් හොයාගන්න බැරි වුණානේ බං. 😅")
    
    const page = await wiki().page(search.results[0])
    const summary = await page.summary()
    
    let text = `📚 *WIKIPEDIA SEARCH: ${search.results[0]}*\n\n`
    text += summary.length > 1000 ? summary.substring(0, 1000) + "..." : summary
    text += `\n\n🔗 *Read more:* ${page.url()}`

    return await conn.sendMessage(from, { text: text }, { quoted: mek })

} catch (e) {
    console.log(e)
    reply(`විකිපීඩියා එකේ අවුලක් තියෙනවා වගේ මචං: ${e.message}`)
}
})
