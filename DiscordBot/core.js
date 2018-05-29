require("./constantes")

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('Coloque o login aqui');

bot.on('ready', function () {
    console.log(`Logado como ${bot.user.tag}!`);
    bot.user.setStatus("online");
    bot.user.setActivity("Em Desenvolvimento");
});

bot.on('message', message => {
    Object.keys(Comandos).map(key => {
        if (message.content.startsWith(key)) {
            if (message.guild) {
                Comandos[key](message)
            } else {
                message.reply("Você não pode usar comandos aqui!")
            }
        }
    });
});

bot.on("guildMemberAdd", (message, member) => {

    const embed = {
        author: {
            name: "Bem-vindo(a)!",
            icon_url: "http://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png?v=1513251071",
        },
        "description": "Olá " + message.toString() + ", Seja bem vindo(a) ao Nêmesis!",
        "color": 3447003,
        "thumbnail": {
            "url": message.user.avatarURL,
        },
    };

    message.guild.channels.find("name", "bem-vindo").send({ embed });
});