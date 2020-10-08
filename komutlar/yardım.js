const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Yardım`,) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!kullanıcı',    ' **Kullanıcı Komutları.**')
             .addField(' s!moderasyon',    '**Moderasyon Komutları**.')
             .addField(' s!moderasyon2',  ' **Moderasyon2 Komutları**')
             .addField(' s!eğlence',      ' **Eğlence Komutları.**')
             .addField(' s!koruma',       ' **Koruma Komutları.**')
             .addField(' s!bot',          ' **Bot Komutları.**')
             .addField(' s!eklenti',      ' **Eklenti Komutları.**')

            .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
