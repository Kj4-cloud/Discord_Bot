require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Define the function separately, outside the event handler
async function shortenWithTinyURL(longUrl) {
  const endpoint = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl.trim())}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`TinyURL error: ${response.status}`);
  }

  return await response.text();
}

client.on("messageCreate", async (message) => {  // ← must be async
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const longUrl = message.content.split("create")[1]?.trim();

    const shortUrl = await shortenWithTinyURL(longUrl);  // ← actually call it with await
      return message.reply(`🔗 Shortened URL: ${shortUrl}`);

    if (!longUrl) {
      return message.reply("Please provide a URL. Usage: `create <url>`");
    }

    try {
      
    } catch (err) {
      return message.reply(`❌ Failed to shorten URL: ${err.message}`);
    }
  }

  // Only runs if no command matched
  message.reply({ content: "Its the bot" });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.login(process.env.DISCORD_KEY);