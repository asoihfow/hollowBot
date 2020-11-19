const discord = require("discord.js");


module.exports = {
  name: "invite",
  category: "info",
  description: "Get the invite link of the bot",
  run: async (client, message, args) => { 
  
    let embed = new discord.MessageEmbed()
    .setTitle('Aqui o link do bot')
    .setDescription(`[clique aqui](https://discord.com/api/oauth2/authorize?client_id=773315378935627807&permissions=8&scope=bot)`)
    .setColor("RANDOM")
    .setFooter(`Bot feito por TWIH`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
    
    
  }
}