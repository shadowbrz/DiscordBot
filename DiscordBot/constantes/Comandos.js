module.exports = {
    '<github': (message) => {
        message.reply('esse é o meu github: https://github.com/shadowbrz/DiscordBot')
    },
    '<anuncio': (message) => {
        if (message.guild.channels.find("name", "shteste-bot")) {
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
                        "url": "https://cdn.discordapp.com/attachments/442430375784873995/449043944161148929/unnamed_2.gif"
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
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<ajuda': (message) => {
        if (message.guild.channels.find("name", "shteste-bot")) {
            const embed = {
                title: "**Esses são os meus comandos! \n**",
                "color": 3447003,
                fields: [{
                    name: "**<github:**",
                    value: "Link do meu github"
                },
                {
                    name: "**<avatar:**",
                    value: "Para pegar seu avatar"
                },
                {
                    name: "<pegaravatar:",
                    value: "Use \"<kick @User#666\" Motivo para kickar um úsuario"
                },
                {
                    name: "<apagar:",
                    value: "Use \"<pegaravatar @Shadow#2864\" para pegar o avatar de outra pessoa"
                }
                ],
                "footer": {
                    "icon_url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                    "text": "NêmesisBOT#6583"
                },
                "thumbnail": {
                    "url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png"
                },
            };
            message.author.send({ embed })
            message.reply("Enviei para você no privado, veja suas mensagens diretas!")
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<admin': (message) => {
        if (message.guild.channels.find("name", "shteste-bot")) {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                const embed = {
                    title: "**Lista de Comandos \n**",
                    "color": 3447003,
                    fields: [{
                        name: "**<anuncio:**",
                        value: "Use \`<anuncio Mesagem\` para enviar um anúncio no privado de todos do server"
                    },
                    {
                        name: "**<ban:**",
                        value: "Use \`<ban @User#666\` Motivo para banir um úsuario"
                    },
                    {
                        name: "<kick:",
                        value: "Use \`<kick @User#666\` Motivo para kickar um úsuario"
                    },
                    {
                        name: "<apagar:",
                        value: "Use \`<apagar 5\` para deletar as mensagens"
                    }
                    ],
                    "footer": {
                        "icon_url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                        "text": "NêmesisBOT#6583"
                    },
                    "thumbnail": {
                        "url": "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png"
                    },
                };
                message.author.send({ embed })
                message.reply("Enviei para você no privado, veja suas mensagens diretas!")
            } else {
                message.reply('Você não tem permissão para usar esse comando!')
            }
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<avatar': (message) => {
        if (message.guild.channels.find("name", "💬-chat-geral")) {
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
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<pegaravatar': (message) => {
        if (message.guild.channels.find("name", "💬-chat-geral")) {
            let usuario = message.mentions.users.first();
            const embed = {
                author: {
                    name: usuario.username,
                    icon_url: "https://media.discordapp.net/attachments/390881397822324736/443911502961967144/anzahemote_kill_by_miyu_chan_x3-dbu3ge6.png",
                },
                "color": 3447003,
                "image": {
                    "url": usuario.avatarURL,
                },
            };
            if (message.mentions.users.first()) {
                message.reply({ embed });
            } else {
                message.reply("Úsuario inválido.");
            }
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<ban': (message) => {
        let motivo = message.content.substr(message.content.indexOf(' ') + 1);
        let usuario = message.mentions.users.first();
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
        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (message.mentions.users.size < 1) return message.reply("Use <ban @User#666")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            if (!message.guild.member(usuario).hasPermission("ADMINISTRATOR")) {
                message.guild.member(usuario).ban()
                message.guild.channels.find("name", "event-log-v2").send({ embed });
            } else {
                message.reply("Esse úsuario possui um cargo alto")
            }

        } else {
            message.reply("Você não tem permissão para executar esse comando!")
        }
    },
    '<kick': (message) => {
        let motivo = message.content.substr(message.content.indexOf(' ') + 1);
        let usuario = message.mentions.users.first();
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
        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (message.mentions.users.size < 1) return message.reply("Use <kick @User#666")
            if (motivo.length == 0) return message.reply("Você não colocou nenhuma razão")

            if (!message.guild.member(usuario).hasPermission("ADMINISTRATOR")) {
                message.guild.member(usuario).kick()
                message.guild.channels.find("name", "event-log-v2").send({ embed });
            } else {
                message.reply("Esse úsuario possui um cargo alto")
            }

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
    },
    '<perguntar': (message, args) => {
        let questao = message.content.substr(message.content.indexOf(' '));
        let falas = ['Sou',
            ':no:',
            'É verdade',
            'Impossível',
            'Claro',
            'Eu acho que não',
            'É verdade',
            'Não é verdade',
        ];

        let result = Math.floor((Math.random() * falas.length) + 0);
        message.reply(falas[result]);
    },
    '<random': (message) => {
        let candidatos = [];
        message.guild.members.forEach(member => {
            candidatos.push(member);
        });
        let usuarioRandom = candidatos[Math.floor(Math.random() * candidatos.length)];
        message.channel.send(`<@${usuarioRandom.id}>, você é um random`)
            .then(message => console.log(`Mensagem enviada com sucesso: ${message.content}`))
            .catch(console.error)
    }
};  