const AlexAPI = require("alexflipnote.js");
const AlexClient = new AlexAPI();

module.exports = {
    name: "drake",
    description: "manipulaçao drake meme.",
    usage: "<text1> <text2>",
    category: "image",
    timeout: 10,
    aliases: [""],
    run: async(bot, message, args) => {
        let text1 = args[0];
        let text2 = args[1];
        if(!text1) return message.channel.send("Por favor coloque o primeiro texto");
        if(!text2) return message.channel.send("Por favor coloque o segundo texto");
        let drake = await AlexClient.image.drake({top: text1, bottom: text2});
        message.channel.send(drake);
    },
};