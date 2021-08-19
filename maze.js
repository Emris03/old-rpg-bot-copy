const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const token = 'NzMxMzM0NzI5MTE4MjUzMDU3.XwkimA.DY75uhmlD87WLH0VDiG8R2yk1-U';
const PREFIX = '!';

bot.on('ready', () =>{
    console.log(`Logged in as ${bot.user.tag} in maze module!`);
});
//x plus (five * y)

var x1y1 = "https://media.discordapp.net/attachments/724061849636700201/727610693381259355/x1y1.png"
var x1y2 = "https://media.discordapp.net/attachments/724061849636700201/727610995555696720/x1y2.png"
var x1y3 = "https://media.discordapp.net/attachments/724061849636700201/727611110458392716/x1y3.png"
var x1y4 = "https://media.discordapp.net/attachments/724061849636700201/727611187281395793/x1y4.png"
var x1y5 = "https://media.discordapp.net/attachments/724061849636700201/727611268550230056/x1y5.png"

var x2y1 = "https://media.discordapp.net/attachments/724061849636700201/727611356844654664/x2y1.png"
var x2y2 = "https://media.discordapp.net/attachments/724061849636700201/727611416718344213/x2y2.png"
var x2y3 = "https://media.discordapp.net/attachments/724061849636700201/727611473081270322/x2y3.png"
var x2y4 = "https://media.discordapp.net/attachments/724061849636700201/727611532527140904/x2y4.png"
var x2y5 = "https://media.discordapp.net/attachments/724061849636700201/727611581239656488/x2y5.png"

var x3y1 = "https://media.discordapp.net/attachments/724061849636700201/727611637003190312/x3y1.png"
var x3y2 = "https://media.discordapp.net/attachments/724061849636700201/727611691474616370/x3y2.png"
var x3y3 = "https://media.discordapp.net/attachments/724061849636700201/727611745484537946/x3y3.png"
var x3y4 = "https://media.discordapp.net/attachments/724061849636700201/727611806348083290/x3y4.png"
var x3y5 = "https://media.discordapp.net/attachments/724061849636700201/727611858642665533/x3y5.png"

var x4y1 = "https://media.discordapp.net/attachments/724061849636700201/727612009302065232/x4y1.png"
var x4y2 = "https://media.discordapp.net/attachments/724061849636700201/727612085038481470/x4y2.png"
var x4y3 = "https://media.discordapp.net/attachments/724061849636700201/727612141829619752/x4y3.png"
var x4y4 = "https://media.discordapp.net/attachments/724061849636700201/727612195923558450/x4y4.png"
var x4y5 = "https://media.discordapp.net/attachments/724061849636700201/727612242190663770/x4y5.png"

var x5y1 = "https://media.discordapp.net/attachments/724061849636700201/727612288210829332/x5y1.png"
var x5y2 = "https://media.discordapp.net/attachments/724061849636700201/727612342292185129/x5y2.png"
var x5y3 = "https://media.discordapp.net/attachments/724061849636700201/727612419500671086/x5y3.png"
var x5y4 = "https://media.discordapp.net/attachments/724061849636700201/727612478174789763/x5y4.png"
var x5y5 = "https://media.discordapp.net/attachments/724061849636700201/727612536492392468/x5y5.png"

var mazeActive = 0
var MazeMessage = 0

var xPos = 2
var yPos = 1

bot.on ("message", (message) => {
    let cont = message.content;
    let user = message.author;
    let userID = message.userID;
    let channel = message.channel;
    let channelID = message.channelID;
    let evt = message.evt;
    
    if (mazeActive == 1) {
        if (message.author == message.guild.me) {
            channel.messages.fetch({ limit: 1 }).then(messages => {
                MazeMessage = messages.first().id;
            mazeActive = 0
            message.channel.send(MazeMessage)
        })}
    };

try{

    if (cont.substring(0, PREFIX.length) == PREFIX) {
            var args = cont.substring(PREFIX.length).split(' ');
            var cmd = args.shift();
    
    
        switch(cmd) {

            case 'say':
                sendMessage = message.content.slice(PREFIX.length + 4)
                
                message.channel.send(sendMessage)
                break;
                
            case 'maze':
                const maze1 = new Discord.MessageEmbed ().setImage(x2y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
                channel.send(maze1)
                xPos = 2
                yPos = 1
                mazeActive = 1
                break;

            case 'up':
                if (MazeMessage == 0) {
                    channel.send("You haven't started the maze yet! Type "+PREFIX+"maze to start!")
                    break;
                }
                else {
                    moveUp(message)
                    message.delete()
                    break;
                }

            case 'down':
                if (MazeMessage == 0) {
                    channel.send("You haven't started the maze yet! Type "+PREFIX+"maze to start!")
                    break;
                }
                else {
                    moveDown(message)
                    message.delete()
                    break;
                }

            case 'left':
                if (MazeMessage == 0) {
                    channel.send("You haven't started the maze yet! Type "+PREFIX+"maze to start!")
                    break;
                }
                else {
                    moveLeft(message)
                    message.delete()
                    break;
                }

            case 'right':
                if (MazeMessage == 0) {
                    channel.send("You haven't started the maze yet! Type "+PREFIX+"maze to start!")
                    break;
                }
                else {
                    moveRight(message)
                    message.delete()
                    break;
                }

            case 'displayx':
                channel.send(xPos)
                break;
            case 'displayy':
                channel.send(yPos)
                break;
            case 'addx':
                xPos+=1
                channel.send("X value added!")
                break;
            case 'removex':
                xPos-=1
                channel.send("X value removed!")
                break;
            case 'addy':
                yPos+=1
                channel.send("Y value added!")
                break;
            case 'removey':
                yPos-=1
                channel.send("Y value removed!")
                break;
            case 'resetmaze':
                xPos = 2
                yPos = 1
                MazeMessage = 0
                channel.send("Maze reset!")
                break;
        }
    }
} catch (e) {
    console.log(e);
}  
})

function canMoveLeft(message) {
    xPos-=1
    sendLocation(message)
}
function canMoveRight(message) {
    xPos+=1
    sendLocation(message)

}
function canMoveUp(message) {
    yPos+=1
    sendLocation(message)

}
function canMoveDown(message) {
    yPos-=1
    sendLocation(message)

}
function moveLeft(message) {
    if (xPos == 1) {
        cantMove(message)
    
    }
    else if (((xPos == 2) && (yPos == 1)) || ((xPos == 2) && (yPos == 4)) || ((xPos == 4) && (yPos == 1)) || ((xPos == 4) && (yPos == 2)) || ((xPos == 5) && (yPos == 1)) || ((xPos == 5) && (yPos == 5))) {
        cantMove(message)
    }
    else {
        canMoveLeft(message)
    
    }


}
function moveRight(message) {
    if (xPos == 5) {
        cantMove(message)
    }
    else if (((xPos == 1) && (yPos == 1)) || ((xPos == 1) && (yPos == 4)) || ((xPos == 3) && (yPos == 1)) || ((xPos == 3) && (yPos == 2)) || ((xPos == 4) && (yPos == 1)) || ((xPos == 4) && (yPos == 5))) {
        cantMove(message)
    }
    else {
        canMoveRight(message)
    }

}
function moveUp(message) {
    if (((xPos > 0) && (xPos < 4) && (yPos == 5)) || ((yPos == 5) && (xPos == 5))) {
        cantMove(message)
    }
    else if (((xPos==2)&&(yPos==1))||((xPos==2)&&(yPos==2))||((xPos==2)&&(yPos==4))||((xPos==3)&&(yPos==2))||((xPos==3)&&(yPos==3))||((xPos==3)&&(yPos==4))||((xPos==4)&&(yPos==3))||((xPos==4)&&(yPos==4))||((xPos==5)&&(yPos==2))||((xPos==5)&&(yPos==3))) {
        cantMove(message)
    }
    else if ((xPos==4)&&(yPos==5)) {
        message.channel.send ("You did it! You finished the maze!")
        xPos = 2
        yPos = 1
    }
    else {
        canMoveUp(message)
    }
}
function moveDown(message) {
    if (yPos == 1) {
        cantMove(message)
    }
    else if (((xPos==2)&&(yPos==2))||((xPos==2)&&(yPos==3))||((xPos==2)&&(yPos==5))||((xPos==3)&&(yPos==3))||((xPos==3)&&(yPos==4))||((xPos==3)&&(yPos==5))||((xPos==4)&&(yPos==4))||((xPos==4)&&(yPos==5))||((xPos==5)&&(yPos==3))||((xPos==5)&&(yPos==4))) {

    }
    else {
        canMoveDown(message)
    }

}

function cantMove(message) {
    message.channel.send("You can't go that way!")
        .then(msg => {
        msg.delete({ timeout: 5000 })
        })
        .catch(console.error);
}

function sendLocation(message) {
    if ((xPos == 1) && (yPos == 1)) {
        const Embedx1y1 = new Discord.MessageEmbed ().setImage(x1y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx1y1);
        })
    }
    if ((xPos == 1) && (yPos == 2)) {
        const Embedx1y2 = new Discord.MessageEmbed ().setImage(x1y2).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx1y2);
        })
    }
    if ((xPos == 1) && (yPos == 3)) {
        const Embedx1y3 = new Discord.MessageEmbed ().setImage(x1y3).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx1y3);
        })
    }
    if ((xPos == 1) && (yPos == 4)) {
        const Embedx1y4 = new Discord.MessageEmbed ().setImage(x1y4).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx1y4);
        })
    }
    if ((xPos == 1) && (yPos == 5)) {
        const Embedx1y5 = new Discord.MessageEmbed ().setImage(x1y5).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx1y5);
        })
    }
    if ((xPos == 2) && (yPos == 1)) {
        const Embedx2y1 = new Discord.MessageEmbed ().setImage(x2y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx2y1);
        })
    }
    if ((xPos == 2) && (yPos == 2)) {
        const Embedx2y2 = new Discord.MessageEmbed ().setImage(x2y2).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx2y2);
        })
    }
    if ((xPos == 2) && (yPos == 3)) {
        const Embedx2y3 = new Discord.MessageEmbed ().setImage(x2y3).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx2y3);
        })
    }
    if ((xPos == 2) && (yPos == 4)) {
        const Embedx2y4 = new Discord.MessageEmbed ().setImage(x2y4).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx2y4);
        })
    }
    if ((xPos == 2) && (yPos == 5)) {
        const Embedx2y5 = new Discord.MessageEmbed ().setImage(x2y5).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx2y5);
        })
    }
    if ((xPos == 3) && (yPos == 1)) {
        const Embedx3y1 = new Discord.MessageEmbed ().setImage(x3y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx3y1);
        })
    }
    if ((xPos == 3) && (yPos == 2)) {
        const Embedx3y2 = new Discord.MessageEmbed ().setImage(x3y2).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx3y2);
        })
    }
    if ((xPos == 3) && (yPos == 3)) {
        const Embedx3y3 = new Discord.MessageEmbed ().setImage(x3y3).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx3y3);
        })
    }
    if ((xPos == 3) && (yPos == 4)) {
        const Embedx3y4 = new Discord.MessageEmbed ().setImage(x3y4).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx3y4);
        })
    }
    if ((xPos == 3) && (yPos == 5)) {
        const Embedx3y5 = new Discord.MessageEmbed ().setImage(x3y5).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx3y5);
        })
    }
    if ((xPos == 4) && (yPos == 1)) {
        const Embedx4y1 = new Discord.MessageEmbed ().setImage(x4y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx4y1);
        })
    }
    if ((xPos == 4) && (yPos == 2)) {
        const Embedx4y2 = new Discord.MessageEmbed ().setImage(x4y2).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx4y2);
        })
    }
    if ((xPos == 4) && (yPos == 3)) {
        const Embedx4y3 = new Discord.MessageEmbed ().setImage(x4y3).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx4y3);
        })
    }
    if ((xPos == 4) && (yPos == 4)) {
        const Embedx4y4 = new Discord.MessageEmbed ().setImage(x4y4).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx4y4);
        })
    }
    if ((xPos == 4) && (yPos == 5)) {
        const Embedx4y5 = new Discord.MessageEmbed ().setImage(x4y5).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx4y5);
        })
    }
    if ((xPos == 5) && (yPos == 1)) {
        const Embedx5y1 = new Discord.MessageEmbed ().setImage(x5y1).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx5y1);
        })
    }
    if ((xPos == 5) && (yPos == 2)) {
        const Embedx5y2 = new Discord.MessageEmbed ().setImage(x5y2).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx5y2);
        })
    }
    if ((xPos == 5) && (yPos == 3)) {
        const Embedx5y3 = new Discord.MessageEmbed ().setImage(x5y3).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx5y3);
        })
    }
    if ((xPos == 5) && (yPos == 4)) {
        const Embedx5y4 = new Discord.MessageEmbed ().setImage(x5y4).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx5y4);
        })
    }
    if ((xPos == 5) && (yPos == 5)) {
        const Embedx5y5 = new Discord.MessageEmbed ().setImage(x5y5).setColor('#f5e042').addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
        message.channel.messages.fetch({around: MazeMessage, limit: 1})
        .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit(Embedx5y5);
        })
    }
}
/*const embed = new Discord.MessageEmbed ()
                    //.setAuthor('Emris')
                    //.setDescription('This is an embed')
                    //.setFooter('This was made in js')
                    //.attachFiles('./maze/blankmaze.gif')
                    .addField("Type '"+PREFIX+"Up', '"+PREFIX+"down', '"+PREFIX+"left', and '"+PREFIX+"right' to move around. Type '"+PREFIX+"resetmaze' to reset the maze.")
                    .setImage(x1y2)
                    //.setThumbnail(url = 'https://media.discordapp.net/attachments/727565988752523354/727568477954769037/x2y1large.png?width=1000&height=946')
                    //.setThumbnail(url = 'https://media.discordapp.net/attachments/726549559584751683/727189926986121246/blake.png', outerWidth = '249', outerHeight = '243')
                    .setColor('#f5e042')
                channel.send(embed)*/

bot.login(token);