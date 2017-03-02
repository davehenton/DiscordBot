var opbeat = require('opbeat').start({
  appId: 'acb18586e0',
  organizationId: '7e199a286dc34c699a120495c34d40d8',
  secretToken: 'b3202da9abb11109225b618979286b7c50630f91'
})

var Discord = require("discord.js");
var bot = new Discord.Client();

var general = require('./general');

var riotApi = require("./riotApi");

var googleDocs = require("./googleDocs")


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

    msg.channel.sendMessage(general.basicFunctions.getTime());
  }
  if (msg.content.startsWith(prefix + "elo")) {

    riotApi.riotApi.getRank(msg.content,function(response){
      msg.channel.sendMessage(response);
    })

  }
  if (msg.content.startsWith(prefix + "game")) {

    riotApi.riotApi.getGameInfo(msg.content,function(response){
      msg.channel.sendMessage(response);
    })

  }
  if (msg.content.startsWith(prefix + "save")) {

    riotApi.riotApi.getLastGameData(msg.content,function(callback){
      msg.channel.sendMessage(callback);
    })
    msg.channel.sendMessage("Momentan außer Betrieb")

  }

  else if (msg.content.startsWith(prefix + "foo")) {
    msg.channel.sendMessage("bar!");
  }
});

bot.on("presenceUpdate", (newMember,prsc) => {


  for (var [key, value] of prsc.guild.channels) {
    if(key == '278275541998501898'){
      var channel = value;
    }
  }

  users = {
    'Zelle':"Skumbag Zelle",
    // 'Ninalco':"Ninalco",
    // 'Jerry':"Its Bear Grylls",
    // 'Martin':"GM Drecksack",
    // 'Sheyrow':"Shery"
  }

  if(prsc.user.username in users){
    if(prsc.guild.presences.get(prsc.user.id).game != null){
      if(prsc.guild.presences.get(prsc.user.id).game.name == 'League of Legends'){
        // console.log("GL HF!");
        // console.log(channel.name)
        var message = "-game "+ users[prsc.user.username]
        riotApi.riotApi.getGameInfo(message,function(response){
          channel.sendMessage(response);
        })
      }
    }
  }


});


bot.login("MjY4ODIwNTY4MDU5NDEyNDgx.C1gYyg.SxC5amkEx1NI8Hnqw76JP0IfpxY");
console.log("Bot online!");
