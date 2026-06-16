require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require("discord.js");
const Discortkey = process.env.DISCORD_KEY;


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {

   if(message.author.bot ) return ;
 message.reply({
   content: "Its the bot"
 })
});

client.login(
  Discortkey,
);