const { Client, Intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(config.BOT_TOKEN); 

let prefix = config.prefix;

client.on('ready', ()=>{
    console.log(`On como ${client.user.tag}`);
    client.user.setStatus('idle');
})



client.on('message',(message)=>{
    const commands = {
        'hola': (user) => `Hola <@${user}>`,
        'ping': () => 'pong',
        'amansagatos': () => 'https://cdn.discordapp.com/attachments/879536040547852368/953842700183015454/c1b6d737-66b8-4997-9a5c-94a21d952451.png',
        'love': () => 'Aww'
    
    }
    const user = message.author.id;
    const MessageCmd = message.content.toLowerCase().split(' ')[0];
    const validCommand = Object.keys(commands).includes(MessageCmd) && message.author !== client.user;

    if (validCommand) {
        console.log(MessageCmd)
        message.reply(commands[MessageCmd](user));

        if (MessageCmd === 'love'){
            const user1 = message.author;
            const user2 = message.mentions.users.first();    
            message.reply(
                `${user1} :heart: ${user2}`
            );
            message.reply(
                `${user1.avatarURL({format: 'png',})}`
            )
            message.reply(
                `${user2.avatarURL({format: 'png',})}`
            )
        }
    }

    // if (message.content == `${prefix}help`){
    //     message.reply("Para más ayuda busca en google! :)");
    // };
});

