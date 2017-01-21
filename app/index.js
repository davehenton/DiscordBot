var Discord = require("discord.js");
var bot = new Discord.Client();

var basicFunctions = require("./basicFunctions.js");
var lolFunctions = require("./processRiotApiData.js");

bot.on("message", msg => {
  // Set the prefix
  let prefix = "-";
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;
  // Exit if any bot
  if(msg.author.bot) return;

  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("pong!");
  }
  if (msg.content.startsWith(prefix + "time")) {

    msg.channel.sendMessage(basicFunctions.getTime());
  }
  if (msg.content.startsWith(prefix + "lol")) {

    let args = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(lolFunctions.getRankedInfo(args[0]));
  }

  else if (msg.content.startsWith(prefix + "foo")) {
    msg.channel.sendMessage("bar!");
  }
});

bot.login("MjY4ODIwNTY4MDU5NDEyNDgx.C1gYyg.SxC5amkEx1NI8Hnqw76JP0IfpxY");
console.log("Bot online!");
