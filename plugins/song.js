const { ytdl } = require('@bochilteam/scraper');

module.exports = {
  pattern: 'ytmp3',
  alias: ['song', 'mp3'],
  react: "🎵",
  category: 'downloader',
  desc: 'Download YouTube MP3 by search or link',
  use: '<song name or YouTube link>',
  async exec(m, conn, { text }) {
    if (!text) return m.reply('🎵 *Please enter a YouTube link or song name.*');

    try {
      const result = await ytdl(text);
      const { title, audio, thumbnail } = result;

      await conn.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: `🎧 *Title:*Downloading your song...*`
      ,  quoted: m );

      await conn.sendMessage(m.chat, 
        audio:  url: audio.url ,
        mimetype: 'audio/mp4',
        fileName: `{title}.mp3`
      }, { quoted: m });

    } catch (err) {
      console.error(err);
      m.reply('❌ *Error downloading the song. Please try again later.*');
    }
  }
};
