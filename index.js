const express = require('express');
const app = express();
//https://discord.gg/FatDtTeMpM
app.listen(() => console.log('Server started'));
//https://discord.gg/FatDtTeMpM
app.use('/ping', (req, res) => {
	res.send(new Date());
});
//https://discord.gg/FatDtTeMpM
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

//join pls : https://discord.gg/FatDtTeMpM

const Discord = require('discord.js-v11-fixes');
const cmd = require("node-cmd");
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');
const client = new Discord.Client();

//join pls : https://discord.gg/FatDtTeMpM
const serverid = "953031227995222108" // id server
const channelid = "959148914735472732" // id channel

client.on('ready',async () => {
  console.log("Starting..");
    let g = client.guilds.get(`${serverid}`);
    let c = g.channels.get(`${channelid}`);
      if(c.type === 'voice') {
       c.join();
      setInterval(() => {
        if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
    }, 1);
      } else {
    console.log('Failed To Join: \n The Channel Type isn "Listening."')
  }
});

client.login(process.env.token);