const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Koruma`, ) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!ban-limit',               ' **Sunucunuzdan biri banlanırsa banlayan kişinin yetkisi alınır.**')
             .addField(' s!sağ-tık-kick',            ' **Sunucunuzdan biri atılırsa atan kişinin yetkisi alınır.**')
             .addField(' s!mod-log-ayarla/sıfırla',  ' **Sunucunun denetim kaydını bir kanala atar.**')
             .addField(' s!rol-koruma',              ' **Silinen rolü geri açar ve özelden bildirir.**')
             .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['koruma','yardım-koruma'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'koruma',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  