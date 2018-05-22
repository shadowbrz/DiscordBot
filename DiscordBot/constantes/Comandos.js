module.exports = {
    '<github': (message) => {
        message.reply('esse é o meu github: https://github.com/shadowbrz/DiscordBot')
    },
    '<anuncio': (message) => {
        if (message.member.hasPermission("ADMINISTRATOR")) {
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
    '<admin': (message) => {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.author.send({
                embed: {
                    color: 3447003,
                    description: "**Esses são os comandos de admin!** \n\n" +
                        '**<anuncio**: \`Use "<anuncio Mesagem" para enviar um anúncio no privado\` \n' +
                        '**<ban**: \`Use "<ban @User#666 Motivo" para banir um úsuario\` \n' +
                        '**<kick**: \`Use "<kick @User#666 Motivo" para kickar um úsuario\` \n'
                }
            });
            message.reply("Enviei para você no privado, veja suas mensagens diretas!")
        } else {
            message.reply('Você não tem permissão para usar esse comando!')
        }
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

        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (message.mentions.users.size < 1) return message.reply("Use <ban @User#666")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            if (!message.guild.member(usuario).hasPermission("ADMINISTRATOR")) {
                message.guild.member(usuario).ban()
            } else {
                message.reply("Esse úsuario possui um cargo alto")
            }

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

        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (message.mentions.users.size < 1) return message.reply("Use <kick @User#666")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            if (!message.guild.member(usuario).hasPermission("ADMINISTRATOR")) {
                message.guild.member(usuario).kick()
            } else {
                message.reply("Esse úsuario possui um cargo alto")
            }

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
    },
    '<apagar': (message) => {
        const args = message.content.substr(message.content.indexOf(' '));
        if (message.member.hasPermission("ADMINISTRATOR")) {
            if (args.length == 0) return message.reply("Você não colocou a quantidade")
            message.channel.bulkDelete(args).then(() => {
                message.channel.send(`\`${args} Mensagens foram deletas com sucesso\``).then(msg => msg.delete(4000))
            });
        } else {
            message.reply("Você não tem permissão para executar esse comando!")
        }
    }
};