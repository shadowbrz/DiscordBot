module.exports = {
    '<github': (message) => {
        message.channel.send('https://github.com/shadowbrz')
    },
    '<anuncio': (message) => {
        let permissao = message.guild.roles.find("name", "👑4º KING");
        if (message.member.roles.has(permissao.id)) {
            let mensagem = message.content.substr(message.content.indexOf(' ') + 1);
            const embed = {
                "description": mensagem,
                "color": 3447003,
                "footer": {
                    "icon_url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                    "text": "NêmesisBOT#6583"
                },
                "thumbnail": {
                    "url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png"
                },
                "image": {
                    "url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png"
                },
                "fields": [
                    {
                        "name": "Servidor:",
                        "value": "𝘕ê𝘮𝘦𝘴𝘪𝘴 \nhttps://discord.gg/QkzUbuG"
                    }
                ]
            };
            message.guild.members.forEach(member => {
                member.send({ embed })
                    .then(message => console.log(`Mensagem enviada com sucesso: ${message.content}`))
                    .catch(console.error);
            });
        } else {
            message.channel.send('Você não tem permissão para usar esse comando!')
        }
    },
    '<comandos': (message) => {
        message.author.send({
            embed: {
                color: 3447003,
                description: "**Comandos** \n\n" +
                    '**<github**: \`Informações do servidor\` \n' +
                    '**<dicas**: \`Dicas para o servidor\` \n' +
                    '**<link**: \`Link para invite\` \n'
            }
        });
    }
};