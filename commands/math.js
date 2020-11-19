const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  category: "fun",
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Por favor me de uma equação!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Resultado`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Por favor coloque uma equação validá | Tente denovo mais tarde!`).then(() => console.log(error));
    }
  }
};