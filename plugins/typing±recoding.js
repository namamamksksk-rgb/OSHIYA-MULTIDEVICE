const { cmd } = require("../command");

// Status එක මතක තියාගන්න Variables
let alwaysTyping = false;
let autoRecording = false;

cmd(
  {
    pattern: "typing",
    react: "💬",
    desc: "Enable/Disable always typing.",
    category: "owner",
    use: "on/off",
    filename: __filename,
  },
  async (oshiya, mek, m, { from, q, reply, isCreator }) => {
    if (!isCreator) return reply("❌ *Sorry මචං, මේක Owner Command එකක් විතරයි!*");
    if (q === "on") {
        alwaysTyping = true;
        reply("✅ *Always Typing Enabled!*");
    } else if (q === "off") {
        alwaysTyping = false;
        reply("👤 *Always Typing Disabled!*");
    } else reply("Usage: .typing on/off");
  }
);

cmd(
  {
    pattern: "recording",
    react: "💬",
    desc: "Enable/Disable auto recording status.",
    category: "owner",
    use: "on/off",
    filename: __filename,
  },
  async (oshiya, mek, m, { from, q, reply, isCreator }) => {
    if (!isCreator) return reply("❌ *Sorry මචං, මේක Owner Command එකක් විතරයි!*");
    if (q === "on") {
        autoRecording = true;
        reply("✅ *Auto Recording Enabled!*");
    } else if (q === "off") {
        autoRecording = false;
        reply("👤 *Auto Recording Disabled!*");
    } else reply("Usage: .recording on/off");
  }
);

// Main Logic: මැසේජ් එකක් එන හැම වෙලාවකම Status එක යවන්න
oshiya.ev.on('messages.upsert', async (chatUpdate) => {
    const mek = chatUpdate.messages[0];
    if (!mek.message) return;
    const from = mek.key.remoteJid;

    if (alwaysTyping) {
        await oshiya.sendPresenceUpdate('composing', from);
    }
    if (autoRecording) {
        await oshiya.sendPresenceUpdate('recording', from);
    }
});
