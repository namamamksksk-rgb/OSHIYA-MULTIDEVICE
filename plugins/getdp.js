const { cmd } = require("../command");
cmd({
    pattern: "getdp",
    react: "👤",
    desc: "Get profile picture",
    category: "media",
    filename: __filename
}, async (zanta, mek, m, { from, q, reply, mentionUser }) => {
    try {
        let targetJid = mentionUser[0] || (m.quoted ? m.quoted.sender : from);
        const url = await zanta.profilePictureUrl(targetJid, 'image');
        if (!url) return reply("❌ No DP found.");
        await zanta.sendMessage(from, { image: { url }, caption: "*✅ Done!*" }, { quoted: mek });
    } catch (e) { reply("🚨 Error: " + e.message); }
});
