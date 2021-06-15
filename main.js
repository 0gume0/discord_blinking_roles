const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', ()=> {
    console.log('Client ready!');

});

var roles_blinking = false;

client.on('message', (message) => {
    if(message.content === "#start" & roles_blinking == false){
        roles_blinking = true;
        let is_blue = false;
        var role = message.guild.roles.cache.get('role id')
        setInterval(() => {
            if(is_blue){
                role.setColor("#ff0000");
                is_blue = false;
                console.log('red');
            }
            else {
                role.setColor( "#0062ff")
                is_blue = true;
                console.log('blue');
            }

        }, 5000);
    }
})

client.login("token here").then(r => {
    console.log("Login successfully!");
});