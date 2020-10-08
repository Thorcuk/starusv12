const Discord = require('discord.js');
exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`Efkarınız %${random} Efkar :beers:  `)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['efkarolcer','efkar-olcer','efkar-ölçer','efkarölçer'],
 permLevel: 0
}
exports.help = {
 name: 'efkarölçer',
 description: 'Efkarınızı ölçler ',
 usage: 'efkarölçer'
};