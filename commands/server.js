const { MessageEmbed } = require("discord.js");

/**
 * @name ServerInfo
 * @namespace commands
 * @description send rich message with information about guild
 */
module.exports = {
  info: {
    name: "server",
    aliases: ["server", "serverinfo"],
    category: "public",
    permissions: [],
    description: "display information about server",
    usage: "",
  },

  async run(client, message, args) {
    const botRoleColor =
      message.guild.me.displayHexColor === "#000000" ? "#96f2e3" : message.guild.me.displayHexColor;

    const aboutEmbedBox = new MessageEmbed()
      .setColor(botRoleColor)
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setTitle(`${message.guild.name}`)
      .setThumbnail(message.guild.iconURL());

    if (message.guild.description) aboutEmbedBox.setDescription(message.guild.description);

    if (message.guild.banner) aboutEmbedBox.setImage(message.guild.bannerURL());

    message.channel.send(aboutEmbedBox);
  },
};
