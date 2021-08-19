const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const token = 'NzMxMzM0NzI5MTE4MjUzMDU3.XwkimA.DY75uhmlD87WLH0VDiG8R2yk1-U';
const prefix = '!';
const mazeModule = require('./maze');
const playerData = require('./playerData/playerData.json');
bot.on('ready', () =>{
    console.log('This bot is online!')
})
bot.on('message', message=>{ 
    function catchErr (err, message) {
        message.channel.send(`<@${message.author.id}>, the bot has run into a fatal error: \`\`\`${err}\`\`\``)
    };
    if (!playerData[message.author.id]) {
        playerData[message.author.id] = {
            coins: 0,
            inventory: "(Empty)" 
        }
        fs.writeFile ("./playerData/playerData.json", JSON.stringify(playerData,null,4), err => {
            if (err) throw err;
        });
    };
    try{
        if(message.content.startsWith(prefix+"addc")){
            if(!message.author.id === "380364910078459905" || !message.author.id === "250048897567817739") return message.channel.send("You may not use this command!");
            numberVal=message.content.split(prefix.length+5)
            if((Object.keys(numberVal).length==0)||(isNaN(numberVal))){
                coinAmount=1
            }
            else{
                coinAmount = message.content.split(prefix.length+5)
            };
            UpdateCoins(message, coinAmount);
            return;
        };
        //Template for creating the rpg:
        //if(message.content.startsWith(prefix + "test")){
            // let embed = new Discord.MessageEmbed()
            //     .setAuthor("Discovery")
            //     .setDescription("Question")
            //     .setFooter("You have 1 minute to answer")
            //     .setColor("004E97")
            //     .setTimestamp()
            // message.channel.send(embed)
            // const filter = m => m.author.id === message.author.id;
            // message.channel.awaitMessages(filter, {max: 1, time: 60000}).then(collected => {
            //     if(collected.first().content === ("answer 1") || collected.first().content === ("Answer 1")){
            //      ((rinse and repeat all of the stuff inside of the command))
            //};
            //     if(collected.first().content === ("answer 2") || collected.first().content === ("Answer 2")){
            //      ((rinse and repeat all of the stuff inside of the command))
            //};
            //}
        //Make sure every command is under this
        if(message.content.startsWith(prefix + "rpg")){
            let number = 1
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch(random){
                case 1:
                let embed = new Discord.MessageEmbed()
                .setAuthor("You start off your journey with 2 paths")
                .setDescription("You need to choose from each of the paths to continue, Path 1, or Path 2")
                .setFooter("You have 1 minute to answer")
                .setColor("004E97")
                .setTimestamp()
            message.channel.send(embed)
            const filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages(filter, {max: 1, time: 60000}).then(collected => {
                if(collected.first().content === ("path 1") || collected.first().content === ("Path 1")){
                    let number = 5
                    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                    switch(random){
                        case 1:
                        let embed = new Discord.MessageEmbed()
                        .setTitle("You have tripped on a rock")
                        .setDescription("You have lost 5 health")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed)
                        let embed2 = new Discord.MessageEmbed()
                        .setTitle("You have come across a split path")
                        .setDescription("Which path do you choose? (Each path affects the rpg) Path 1 or Path 2?")
                        .setColor("004E97")
                        .setTimestamp()
                        .setFooter("You have 1 minute to answer!")
                        message.channel.send(embed2)
                    };
                    switch(random){
                        case 2:
                        let embed = new Discord.MessageEmbed()
                        .setTitle("A figure shows up before you.")
                        .setDescription("He asks you whether you'd like to buy one of his potions, do you accept? Yes/No")
                        .setFooter("You have 1 minute to answer!")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed)
                    };
                    switch(random){
                        case 3:
                            let embed = new Discord.MessageEmbed()
                            .setTitle("You find a mountain infront of you.")
                            .setDescription("Do you wish to climb the mountain or do you wish to walk around it? Walk/Climb")
                            .setFooter("You have 1 minute to answer!")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed)
                    };
                    switch(random){
                        case 4:
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Nothing eventful happens")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed)
                        let embed2 = new Discord.MessageEmbed()
                        .setTitle("You are met with 2 paths")
                        .setDescription("Path 1 looks rocky, but short, Path 2 Is smooth but long, which do you choose? Path 1/Path 2")
                        .setFooter("You have 1 minute to answer!")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed2)
                    };
                    switch(random){
                        case 5:
                            let embed = new Discord.MessageEmbed()
                            .setTitle("You trip on a twig")
                            .setDescription("You scrape your knee on the road, -5 health.")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed)
                            let embed2 = new Discord.MessageEmbed()
                            .setTitle("You come across a split path.")
                            .setDescription("One path is darkened, but the other is rocky, which do you choose? Path 1/Path 2")
                            .setFooter("You have 1 minute to answer!")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed2)
                    };
            };
                if(collected.first().content === ("path 2") || collected.first().content === ("Path 2")){
                    let number = 5
                    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                    switch(random){
                        case 1:
                            let embed = new Discord.MessageEmbed()
                            .setTitle("You come across a drunker.")
                            .setDescription("They race towards you and stab you, RPG end. -5 Coins")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed)
                    };
                    switch(random){
                        case 2:
                            let embed = new Discord.MessageEmbed()
                        .setTitle("You start to feel worried...")
                        .setDescription("The path you have been walking on leads to a snowy place, you start to shiver..")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed)
                        let embed2 = new Discord.MessageEmbed()
                        .setTitle("A man offers to sell you a coat")
                        .setDescription("Do you accept this offer? The coat costs 2 coins. Yes/No")
                        .setFooter("You have 1 minute to answer!")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed2)
                    };
                    switch(random){
                        case 3:
                            let embed = new Discord.MessageEmbed()
                            .setTitle("You see a small child run past you")
                            .setDescription("Do you wish to find the child? Yes/No")
                            .setFooter("You have 1 minute to answer!")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed)
                    };
                    switch(random){
                        case 4:
                            let embed = new Discord.MessageEmbed()
                        .setTitle("You see a little bird pecking at the ground")
                        .setDescription("Do you wish to keep them as a pet? Yes/No")
                        .setFooter("You have 1 minute to answer!")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed)
                    };
                    switch(random){
                        case 5:
                            let embed = new Discord.MessageEmbed()
                            .setTitle("You slip on some ice")
                            .setDescription("You have lost 10 health.")
                            .setColor("004E97")
                            .setTimestamp()
                            message.channel.send(embed)
                            let embed2 = new Discord.MessageEmbed()
                        .setTitle("You see a man out in the distance")
                        .setDescription("They are old, and they need some help, walk them to their house? Yes/No")
                        .setFooter("You have 1 minute to answer!")
                        .setColor("004E97")
                        .setTimestamp()
                        message.channel.send(embed2)
                    };
            };
            })
            }
            
            
    };
    }
    catch (err) {catchErr(err, message);
    };
    })
    function UpdateCoins(message, coinAmount){
        currentCoins = parseInt(playerData[message.author.id].coins)
        playerData[message.author.id].coins = currentCoins + coinAmount
        fs.writeFile ("./playerData/playerData.json", JSON.stringify(playerData,null,4), err => {
            if (err) throw err;
        });
    }


bot.login(token);