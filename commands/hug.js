  
const { MessageEmbed } = require('discord.js');
const request = require('superagent');

module.exports = {
    name: "hug",
    aliases: ["abraço,abraçar"],
    description: "Hug Someone OwO",
    usage: "<mention>",
    category: "fun",
    timeout: 5,
    run: async(bot, message, args) => {
        let ment = message.mentions.users.first();
        if(!ment) 
            return message.channel.send("mencione um user por favor");
        if (ment.id == message.author.id)
            return message.channel.send('Como isso é possível');
        if (ment.id == bot.user.id && message.author.id == '671355502399193128')
            return message.channel.send('B-BAKA, Eu não gosto de você ou algo assim');
        const { body } = await request.get('https://nekos.life/api/hug');

        let botico = bot.user.displayAvatarURL({ format: 'png' });

        let e = new MessageEmbed()
        .setColor(process.env.COLOR)
        .setTitle(`${message.author.username} Hugged ${ment.username} OwO`)
        .setImage(body.url)
        .setAuthor(`${bot.user.username}`, botico)
        message.channel.send({embed: e});
    },
};