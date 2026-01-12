const { cmd } = require("../command");
cmd({
    pattern: "send",
    alias: ["save"],
    react: "📥",
    desc: "Download status",
    category: "media",
    filename: __filename
}, async (zanta, mek, m, { from, reply }) => {
    if (!m.quoted) return reply("❌ Reply to a status!");
    const media = await m.quoted.download();
    const type = m.quoted.type;
    if (type === 'imageMessage') await oshiya.sendMessage(from, { image: media, caption: "✅ Saved" });
    else if (type === 'videoMessage') await oshiya.sendMessage(from, { video: media, caption: "✅ Saved" });
});
