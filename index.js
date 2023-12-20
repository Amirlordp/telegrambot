const TelegramBot = require("node-telegram-bot-api");
const token = "5909378805:AAES928Q_qtbqNK2nMkMV-jkb8VRK4I7oVA";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
  let Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
  }
});
