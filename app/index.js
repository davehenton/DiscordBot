var Discord = require("discord.js");
var bot = new Discord.Client();

var zeit = require("./time.js");

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
	
    msg.channel.sendMessage(zeit.getTime);
  } 

  else if (msg.content.startsWith(prefix + "foo")) {
    msg.channel.sendMessage("bar!");
  }
});

bot.login("MjY4ODIwNTY4MDU5NDEyNDgx.C1gYyg.SxC5amkEx1NI8Hnqw76JP0IfpxY");
console.log("Bot online!");
console.log(zeit.getTime);
