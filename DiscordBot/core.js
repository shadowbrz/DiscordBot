require("./constantes")

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('Colocar Login aqui');

bot.on('ready', function () {
    console.log(`Logado como ${bot.user.tag}!`);
    bot.user.setStatus("online");
    bot.user.setActivity("Em Desenvolvimento");
});

bot.on('message', message => {
    Object.keys(Comandos).map(key => {
        if (message.content.startsWith(key)) {
            Comandos[key](message)
        }
    });
});

bot.on("guildMemberAdd", (message) => {
    message.guild.channels.find("name", "chat-geral").send(message.toString() + " Seja Bem Vindo");
});