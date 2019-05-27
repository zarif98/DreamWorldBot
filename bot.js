const Discord = require('discord.js');
const client = new Discord.Client();
const auth = process.env.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Hey! Welcom to DreamWorld! To get started we recommend going through our');
  }
});

client.login(process.env.BOT_TOKEN);
