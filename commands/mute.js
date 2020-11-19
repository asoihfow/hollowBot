const Discord = require('discord.js');
const ms = require('ms')

module.exports.run = async (client, message, args) => {


if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você não pode usar esse comando.")
let member = message.mentions.members.first();
if (!member){return message.reply('Lembre de mencionar a pessoa que deseja punir!')}
if (member== message.member) return message.reply('vc nao pode punir vc mesmo.')
if(!member.bannable) return message.channel.send('sem permissão para punir o usuario!')

  message.channel.send(`opa, vc realmente deseja punir esse usuario?`).then(msg => {
        msg.react("👍")
     
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

     coletor.on("collect", cp => {
            cp.remove(message.author.id);
            msg.delete()

let MuteTime = args[1]
if(!MuteTime) return message.channel.send(`Você não inseriu um tempo para silenciar o usuário!`)
member.roles.add('id da role mute')
message.channel.send(`O usuário foi silenciado por ${MuteTime} !`)

setTimeout(function() {
  member.roles.remove('id da role mute')
  message.channel.send(`acabou o silencio, o(a) ${member} voltou a falar ficou ${MuteTime} mutado!`)
}, ms(MuteTime))
     })})}
