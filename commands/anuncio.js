const Discord = require("discord.js");

exports.run = (client, message, args) => {

    message.delete()
    const splitarg = args.join(" ").split(" / ");
    const aAnnouncement = splitarg[0];
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const permissao = new Discord.MessageEmbed()

            .setTitle(`Erro: Você Não Tem Permissão Para Executar Esse Comando!`)
            .setTimestamp()
            .setFooter(`${message.guild.name}`)
            .setColor("#RANDOM")

        return message.reply(permissao)
    }
    if (args.length === 0) {
        const embedI = new Discord.MessageEmbed()

            .setTitle(`Erro: Coloque o Titulo!`)
            .setColor("#RANDOM")
            .setTimestamp()
            .setFooter(`${message.guild.name}`)

        return message.reply(embedI)
    }
    const embedII = new Discord.MessageEmbed()
        .setTitle(`**Anúncio!**`) // Aqui você pode deixar assim ou mudar o titulo
        .setDescription(`${aAnnouncement}`) // Aqui é aonde vai ficar o anuncio
        .setColor("#RANDOM")
    message.channel.send("@everyone", embedII);
}
exports.info = {
    name: "anuncio"
}
