require("./constantes")

const Discord = require('discord.js');
global.__bot = new Discord.Client();

__bot.login('TOKEN AQUI');

__bot.on('ready', function () {
    console.log(`Logado como ${__bot.user.tag}!`);
    __bot.user.setStatus("online");
    __bot.user.setActivity("Em Desenvolvimento");
});

__bot.on('message', message => {
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

__bot.on("guildMemberAdd", (message) => {
        const embed = {
            author: {
                name: "Bem-vindo(a)!",
                icon_url: "LINK IMAGEM",
            },
            "description": `Olá ${message.toString()}, Seja bem vindo(a) ao ${message.guild.name}!`,
            "color": 3447003,
            "thumbnail": {
                "url": message.user.avatarURL,
            },
        };
        message.guild.channels.find("name", "teste").send({ embed });
});