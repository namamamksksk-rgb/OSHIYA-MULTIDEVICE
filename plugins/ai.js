const { cmd, commands } = require("../command");
const axios = require("axios");

cmd(
  {
    pattern: "ai",
    alias: ["chat", "bot"],
    react: "🤖",
    desc: "Chat with oshiya MD AI",
    category: "tools",
    filename: __filename,
  },
  async (oshiya, mek, m, { from, q, reply }) => {
    try {
      if (!q) return reply("EX = .ai Mokada karanne🤔");

      // AI එක වැඩ කරනකම් 'typing' status එක දාමු
      await oshiya.sendPresenceUpdate('composing', from);

      // Free AI API එකක් පාවිච්චි කරලා reply එක ගමු
      const response = await axios.get(`https://api.giftedtech.my.id/api/ai/gpt4?apikey=gifted&q=${encodeURIComponent(q)}`);
      const aiReply = response.data.results;

      await reply(aiReply);

    } catch (err) {
      console.error(err);
      reply("❌ සොරි මචං, AI එකේ පොඩි අවුලක්. පස්සේ ට්‍රයි කරමු!");
    }
  }
);
