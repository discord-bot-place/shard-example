const {ShardingManager} = require("discord.js");
const manager = new ShardingManager(`${__dirname}\\bot.js`, {
    token : require(`${__dirname}/../config.js`).token,
    totalShards : 3
});

manager.spawn();

manager.on("shardCreate", (shard) => {
    console.log(`Launched shard ${shard.id}`);
});