const Discord = require("discord.js"),
client = new Discord.Client(),
config = require("../config");

client.on("ready", () => {
    console.log(`Client Ready !`);
});

client.login(config.token);

client.on("message", async(msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    if(msg.content.startsWith(config.prefix + "stats")){
        client.shard.fetchClientValues("guilds.size").then((results) => {
            msg.channel.send(`I'm on ${results} guilds`)
        })
    }
})