module.exports = {
    '<github': (message) => {
        message.reply('esse é o meu github: https://github.com/shadowbrz')
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
            message.reply('Você não tem permissão para usar esse comando!')
        }
    },
    '<ajuda': (message) => {
        message.author.send({
            embed: {
                color: 3447003,
                description: "**Esses são meus comandos!** \n\n" +
                    '**<github**: \`Link do meu github\` \n' +
                    '**<avatar**: \`Para pegar seu avatar\` \n' +
                    '**<pegaravatar**: \`Use <pegaravatar @Shadow#2864 para pegar o avatar de outra pessoa\` \n'
            }
        });
        message.reply("Enviei para você no privado, veja suas mensagens diretas!")
    },
    '<avatar': (message) => {
        const embed = {
            author: {
                name: message.author.username,
                icon_url: "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
            },
            "color": 3447003,
            "image": {
                "url": message.author.avatarURL,
            },
        };
        message.reply({ embed })
    },
    '<pegaravatar': (message) => {
        let user = message.mentions.users.first();
        const embed = {
            author: {
                name: user.username,
                icon_url: "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
            },
            "color": 3447003,
            "image": {
                "url": user.avatarURL,
            },
        };
        if (message.mentions.users.first()) {
            message.reply({ embed });
        } else {
            message.reply("Úsuario inválido.");
        }
    },
    '<ban': (message, args) => {
        let motivo = message.content.substr(message.content.indexOf(' ') + 1);
        let usuario = message.mentions.users.first();
        let permissao = message.guild.roles.find("name", "👑4º KING");

        if (message.member.roles.has(permissao.id)) {

            if (message.mentions.users.size < 1) return message.reply("Use <ban @user#666")
            if (!message.guild.member(usuario).bannable) return message.reply("Esse úsuario possui um cargo alto")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            message.guild.member(usuario).ban()

            const embed = {
                author: {
                    name: usuario.username + " foi banido por " + message.author.tag,
                    icon_url: "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                },
                "description": "Motivo: " + motivo,
                "color": 3447003,
                "thumbnail": {
                    "url": usuario.avatarURL,
                },
            };

            message.guild.channels.find("name", "event-log-v2").send({ embed });
        } else {
            message.reply("Você não tem permissão para executar esse comando!")
        }
    },
    '<kick': (message, args) => {
        let motivo = message.content.substr(message.content.indexOf(' ') + 1);
        let usuario = message.mentions.users.first();
        let permissao = message.guild.roles.find("name", "👑4º KING");

        if (message.member.roles.has(permissao.id)) {

            if (message.mentions.users.size < 1) return message.reply("Use <kick @user#666")
            if (!message.guild.member(usuario).kickable) return message.reply("Esse úsuario possui um cargo alto")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            message.guild.member(usuario).kick()

            const embed = {
                author: {
                    name: usuario.username + " foi kickado por " + message.author.tag,
                    icon_url: "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                },
                "description": "Motivo: " + motivo,
                "color": 3447003,
                "thumbnail": {
                    "url": usuario.avatarURL,
                },
            };

            message.guild.channels.find("name", "event-log-v2").send({ embed });
        } else {
            message.reply("Você não tem permissão para executar esse comando!")
        }
    }
};