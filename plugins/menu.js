const config = require('../config'); 
const { cmd, commands } = require("../command");
const { readEnv } = require("../lib/database");

cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "📂",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (robin, mek, m, { from, reply }) => {
    try {
            const ownerName = config.OWNER_NAME || "OSHIYA";
      const botName = config.BOT_NAME || "OSHIYA-MD";
      
     
      const dbConfig = await readEnv();
      const mode = dbConfig.MODE || config.MODE || "Public";
      const finalPrefix = dbConfig.PREFIX || config.PREFIX || ".";
      const totalCommands = commands.length;

      let madeMenu = `

╔═════ＯＳＨＩＹ- ＭＤ═══════════╮
║
║╞  👑 𝙾𝚆𝙽𝙴𝚁 : ${pushname}
║
║╞  ⚙ 𝙼𝙾𝙳𝙴 :  ${mode}
║
║╞  🔣 𝙿𝚁𝙴𝙵𝙸𝚇 : ${finalPrefix}
║
║╞ 📚 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 : ${totalCommands}
║
╠═══════════════════╮
║       𝐌𝐀𝐈𝐍  𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚠️   
║                                                      
║╞ 🛡️ .𝚊𝚕𝚒𝚟𝚎
║
║╞ 🛡️ .𝚖𝚎𝚗𝚞
║
║╞ 🛡️ .𝙰𝙸  [ 𝚃𝙴𝚇𝚃 ]
║
║╞ 🛡️ .𝚜𝚢𝚜𝚝𝚎𝚖
║
║╞ 🛡️ .𝚘𝚠𝚗𝚎𝚛
║
╠════════════════════╯
║     𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃  𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚠️
║
║╞ 🛡️ .𝚜𝚘𝚗𝚐  [ 𝚃𝙴𝚇𝚃 ]
║
║╞ 🛡️ .𝚟𝚒𝚍𝚎𝚘 [ 𝚃𝙴𝚇𝚃 ]
║
║╞ 🛡️ .𝚏𝚋 [ 𝚃𝙴𝚇𝚃 ]
║
╠════════════════════╮
║     𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚠️
║
║╞ 🛡️ .𝚛𝚎𝚜𝚝𝚊𝚛𝚝
║
║╞ 🛡️ .𝚞𝚙𝚍𝚊𝚝𝚎
║
╠═════════════════════╯
║     𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚠️
║
║╞ 🛡️ .𝚜𝚝𝚒𝚌𝚔𝚎𝚛 [ 𝚁𝙴𝙿𝙻𝚈 𝚈𝙾𝚄 𝙸𝙼𝙰𝙶𝙴 ]
║
║╞ 🛡️ .𝚒𝚖𝚐 [ 𝚁𝙴𝙿𝙻𝚈 𝚈𝙾𝚄𝚁 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 ]
║
║╞ 🛡️ .𝚝𝚛 [ 𝚕𝚊𝚗𝚐 ] [ 𝚃𝙴𝚇𝚃 ]
║
║╞ 🛡️ .𝚝𝚝𝚜 [ 𝚃𝙴𝚇𝚃 ]
║
╠═════════════════════╯
║     𝐎𝐓𝐇𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ⚠️
║     𝐎𝐓𝐇𝐄𝐑 𝐎𝐏𝐓𝐈𝐎𝐍𝐒 ⚠️
║     𝐎𝐓𝐇𝐄𝐑 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 ⚠️
║💀 𝙾𝚂𝙷𝙸𝚈𝙰-𝙼𝙳 𝙼𝚄𝙻𝚃𝙸𝙳𝙴𝚅𝙸𝙲𝙴 𝚆𝙰 𝙱𝙾𝚃 💀
╚═══════════════════════════╯

`;

      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/oshadha12345/images/refs/heads/main/bot_menu.png",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );

    } catch (e) {
      console.log(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
