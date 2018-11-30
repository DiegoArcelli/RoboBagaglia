const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//risponde se interpellato
client.on('message', msg => {
  if (msg.content === 'sbag') {
    msg.reply('oh');
  }
});

//entra nella chat vocale
client.on('message', msg => {
  if (msg.content === 'entra') {
    const channel = msg.member.voiceChannel;
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
    msg.reply('eccomi');
  }
});

//esce dalla chat vocale
client.on('message', msg => {
  if (msg.content === 'esci') {
    msg.reply('sto crashando...');
    const channel = msg.member.voiceChannel;
    channel.leave();

  }
});

//entra nella chat vocale, spara una delle sue leggendaie mirabilie ed esce
client.on('message', msg => {
  if (msg.content === 'parla') {
    const channel = msg.member.voiceChannel;
    channel.join()
    .then(connection => {
      var x = Math.floor((Math.random() * 26) + 1);
      const dispatcher = connection.playFile('./audio/' + x + '.m4a');
      dispatcher.on("end", end => {channel.leave()});
    })
    .catch(console.error);
  }
});

//bestemmia
client.on('message', msg => {
  if (msg.content === 'dio') {
    var exec = require('child_process').exec, child;
    var x = Math.floor((Math.random() * 6) + 1);
    exec("sed '" + x + "!d' dio", function(err, stdout){
    	if(err){
    		throw err;
    	}
    	msg.channel.send(stdout);
    });

  }
});

//
client.on('message', msg => {
  if (msg.content.startsWith("/cicchi")) {
    console.log('AAAA');
    var exec = require('child_process').exec, child;
    var str = msg.content.split(" ");
    var i, com="";
    console.log(str);
    for(i=1;i<str.length;i++){
      com+= " grep " + str[i] + " | ";
    }
    console.log("cat cicchi | " + com + " cut -f2");
    exec("cat cicchi | " + com + " cut -f2", function(err, stdout){
    	if(err){
    	  throw err;
    	}
    	msg.channel.send(stdout);
    });
  }
});


client.login('NTE3MzYxNTUyMzM3MTQxNzgw.DuBHVA.EjN5DikGRlsGXj7LfYThHJtWcjY');
