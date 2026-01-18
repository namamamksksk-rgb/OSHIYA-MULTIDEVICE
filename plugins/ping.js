const { cmd } = require("../command");
const config = require("../config");
const { speed } = require("performance-now");

cmd(
  {
    pattern: "ping",
    react: "⚡",
    desc: "Check bot's speed.",
    category: "main",
    filename: __filename,
  },
  async (oshiya, mek, m, { from, pushname }) => {
    try {
      // 1. කලින්ම Voice Note එකක් යවනවා 🎙️
      await oshiya.sendMessage(from, { 
        audio: { url: 'https://github.com/oshadha12345/images/raw/refs/heads/main/Voice/gata%20only%20(tiktok%20version_best%20part_)%20-%20floyymenor%20ft.%20cris%20mj%E3%80%8Eedit%20audio%E3%80%8F(MP3_160K).mp3' }, 
        mimetype: 'audio/mp4', 
        ptt: false
      }, { quoted: mek });

      const startTime = performance.now();
      const endTime = performance.now();
      const pingTime = (endTime - startTime).toFixed(4);
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();

      // 2. ━━ Style Ping Design
      let pingText = `━━❮❮ 『 *OSHIYA PING* 』 ❯❯━━\n\n`;
      pingText += `┃ 👤 *User:* ${pushname}\n`;
      pingText += `┃ 👨‍💻 *Owner:* ${config.OWNER_NAME}\n`;
      pingText += `┃ 🗓️ *Date:* ${date}\n`;
      pingText += `┃ ⌚ *Time:* ${time}\n`;
      pingText += `┃ ⚡ *Speed:* ${pingTime} ms\n\n`;
      pingText += `━━━━━━━━━━━━━━━━━━━━`;

      const pingImage = 'https://raw.githubusercontent.com/oshadha12345/images/refs/heads/main/oshiyaping.jpg'; 

      // 3. Image එකත් එක්ක Channel Forward විදියට යවනවා 🖼️
      await oshiya.sendMessage(from, {
        image: { url: pingImage },
        caption: pingText,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363424190990486@newsletter', 
            newsletterName: 'Oshiya MD Speed Center',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });

    } catch (err) {
      console.error(err);
    }
  }
);
