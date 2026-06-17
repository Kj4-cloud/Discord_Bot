const { REST, Routes } = require("discord.js");
require('dotenv').config();
const Discortkey = process.env.DISCORD_KEY;
const CLIENT_ID = process.env.CLIENT_ID;


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
   {
    name: 'happy',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(Discortkey);


(async () => {
  try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}          
})() ;

