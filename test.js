
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

   if(message.content.startsWith('create')){


    const longUrl = message.content.split("create")[1];

    const short= async function shortenWithTinyURL(longUrl) {
  const endpoint = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`TinyURL error: ${response.status}`);
  }

  const shortUrl = await response.text(); // returns plain text like "https://tinyurl.com/abc123"
  return shortUrl;
}

// Usage
// const short = await shortenWithTinyURL("https://example.com/very/long/url?with=params");
console.log(short);
       


   }

 message.reply({
   content: "Its the bot"
 })

});              

client.on('interactionCreate' , (interaction) =>{
   console.log(interaction) ;
   interaction.reply("Pong!!")
})

client.login(
  Discortkey,
);
