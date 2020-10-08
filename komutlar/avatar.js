  const Discord = require('discord.js');

module.exports.run = (client, message, args) => {


 let kullanıcı = message.mentions.users.first() || message.author;
 
    const avatar = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} `, message.author.avatarURL)
        .setColor("RANDOM")
        .setImage(kullanıcı.avatarURL)
        .setFooter(`${message.author.username} tarafından istedi .`, message.author.avatarURL)
        message.channel.send(avatar)
    
};

module.exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['pp', 'profilphoto'],
  permLevel: 0
};

module.exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen kişinin veya komutu yazan kişinin avatarını atar.',
  usage: 'avatar <@kişi-etiket> / +avatar'
};