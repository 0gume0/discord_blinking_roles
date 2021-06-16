const Discord = require("discord.js");
const client = new Discord.Client();
var is_blue = false;
var roles_blinking = false;

function changeColoers(role) {
    if (is_blue) {
        role.setColor("#ff0000");
        is_blue = false;
        console.log('red');
    } else {
        role.setColor("#0062ff")
        is_blue = true;
        console.log('blue');
    }
}

client.on('ready', () => {
    console.log('Client ready!');

});


client.on('message', (message) => {
    if (message.content === "#start" & roles_blinking == false) {
        roles_blinking = true;
        var role = message.guild.roles.cache.get('role id')
        setInterval((changeColoers(role), 60000));
        changeColoers(role);
    }
})

client.login("token").then(r => {
    console.log("Login successfully!");
});