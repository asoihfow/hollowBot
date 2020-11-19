const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não pode usar esse comando.")
let member = message.mentions.members.first();
if (!member){return message.reply('Lembre de mencionar a pessoa que deseja punir!')}
if (member== message.member) return message.reply('vc nao pode punir vc mesmo.')

  message.channel.send(`opa, vc realmente deseja punir esse usuario?`).then(msg => {
        msg.react("👍")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
    
 coletor.on("collect", cp => {
            cp.remove(message.author.id);
            member.ban()
            message.reply('Membro punido com sucesso!')
            return
})
}) 
}