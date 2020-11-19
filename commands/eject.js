const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  name: "eject",
  description: "expulsse alguém da nave - Among us Command",
  usage: "||eject <user>",
  category: "Fun",
  run: async (client, message, args) => {
    const user = message.mentions.users.first()
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    if(!user) {
      return message.channel.send(`${message.author} Especifique um usuário para ejetar, mencionando-o!`)
    }
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const embed = new discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} decidiu ejetar o ${user.username}`)
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(`[Click aqui,se a imagem não carregou!](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  }
}