const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Bot Menüsü`, ) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!ping',       ' **Botun pingini gösterir.**')
             .addField(' s!emojibilgi', ' **İsmini girdiniz emojinin bilgilerini gösterir.**')
             .addField(' s!istatistik', ' **Botun istatistiklerini atar.**')
             .addField(' s!davet',      '**Botun davet linki.**')
             .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu](  ) `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['bot','yardım-bot'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'bot',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  