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

    console.log(message.content);

    if (message.content == 'hola'){
        
            message.reply(`Hola <@${message.author.id}>`);   
    };

    if (message.content == `${prefix}help`){
        message.reply("Example");
    };
});

