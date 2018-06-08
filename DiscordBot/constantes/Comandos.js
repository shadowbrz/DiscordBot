
module.exports = {
    '<github': (message) => {
        message.reply('esse é o meu github: https://github.com/shadowbrz/DiscordBot')
    },
    '<anuncio': (message) => {
        __bot.guilds.forEach(guild => {
            if (message.guild.channels.find("name", "teste")) {
                if (message.member.hasPermission("ADMINISTRATOR")) {
                    let mensagem = message.content.substr(message.content.indexOf(' ') + 1);
                    const embed = {
                        "description": mensagem,
                        "color": 3447003,
                        "footer": {
                            "icon_url": "LINK IMAGEM",
                            "text": __bot.user.tag
                        },
                        "thumbnail": {
                            "url": "LINK IMAGEM"
                        },
                        "image": {
                            "url": "LINK IMAGEM"
                        },
                        "fields": [
                            {
                                "name": "Servidor:",
                                "value": `${guild.name} \nLINK DO DISCORD`
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
        })
    },
    '<ajuda': (message) => {
        if (message.guild.channels.find("name", "teste")) {
            const embed = {
                title: "**Esses são os meus comandos! \n**",
                "color": 3447003,
                fields: [{
                    name: "**<github:**",
                    value: "Link do meu github"
                },
                {
                    name: "**<avatar:**",
                    value: "Para pegar seu avatar ou \"<avatar @User#666\" para pegar o avatar de outro usuario"
                },
                {
                    name: "<cutucar:",
                    value: "Use \"<cutucar @User#666 mensagem\" Para cutucar alguém"
                },
                {
                    name: "<random:",
                    value: "Use \"<random\" Para marcar algum random :)"
                },
                ],
                "footer": {
                    "icon_url": "LINK IMAGEM",
                    "text": __bot.user.tag
                },
                "thumbnail": {
                    "url": "LINK IMAGEM"
                },
            };
            message.author.send({ embed })
            message.reply("Enviei para você no privado, veja suas mensagens diretas!")
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<admin': (message) => {
        if (message.guild.channels.find("name", "teste")) {
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
                        "icon_url": "LINK IMAGEM",
                        "text": __bot.user.tag
                    },
                    "thumbnail": {
                        "url": "LINK IMAGEM"
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
        if (message.guild.channels.find("name", "teste")) {
            let usuario = message.mentions.users.first() || message.author;
            const embed = {
                author: {
                    name: usuario.username,
                    icon_url: __bot.user.avatarURL,
                },
                "color": 3447003,
                "image": {
                    "url": usuario.avatarURL,
                },
            };
            message.reply({ embed });
        } else {
            message.reply('Você não pode usar esse comando aqui!')
        }
    },
    '<ban': (message) => {
        let args = message.content.slice().trim().split(/ +/g);
        let motivo = args.slice(2).join(' ');
        let usuario = message.mentions.users.first();
        const embed = {
            author: {
                name: `${usuario.username} foi banido por ${message.author.tag}`,
                icon_url: __bot.user.avatarURL,
            },
            "description": `Motivo: ${motivo}`,
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
                message.guild.channels.find("name", "teste").send({ embed });
            } else {
                message.reply("Esse úsuario possui um cargo alto")
            }

        } else {
            message.reply("Você não tem permissão para executar esse comando!")
        }
    },
    '<kick': (message) => {
        let args = message.content.slice().trim().split(/ +/g);
        let motivo = args.slice(2).join(' ');
        let usuario = message.mentions.users.first();
        const embed = {
            author: {
                name: `${usuario.username} foi kickado por ${message.author.tag}`,
                icon_url: __bot.user.avatarURL,
            },
            "description": `Motivo: ${motivo}`,
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
    '<perguntar': (message) => {
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
    },
    '<cutucar': (message) => {
        let usuario = message.mentions.users.first();
        let args = message.content.slice().trim().split(/ +/g);
        let mensagem = args.slice(2).join(' ');
        const embed = {
            title: `${message.author.tag} cutucou você.\n`,
            "color": 3447003,
            fields: [{
                name: "**Mensagem:**",
                value: mensagem
            },
            ],
            "thumbnail": {
                "url": message.author.avatarURL
            },
        };
        if (message.mentions.users.first()) {
            usuario.send({ embed })
                .then(message => console.log(`Mensagem enviada com sucesso: ${mensagem}`))
                .catch(console.error)
        } else {
            message.reply("Úsuario inválido.");
        }
    }
};