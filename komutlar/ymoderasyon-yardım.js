const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon`, ) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!otorol',                     ' **Otorol sistemini gösterir.**')
             .addField(' s!kilit <süre>',               ' **Belirli bir süre kanalı kilitlersin.**')
             .addField(' s!sil/üye <sayı>',             ' **Kanaldaki mesajları siler.**')
             .addField(' s!embed',                      ' **Embed bir şekilde yaza bilirsin.**')
             .addField(' s!reklam-engelle',             ' **Sunucunuzdaki reklamları engeller.**')
             .addField(' s!slow-mod <süre>',            ' **Yavaş modu açarsınız.**')
             .addField(' s!rol-ver/rol-al',             ' **İstediğiniz kişiden rol alıp verirsiniz.**')
             .addField(' s!küfür-ayarla <aç kapat>',    ' **Sunucunuzdaki küfürleri engeller.**')
             .addField(' s!ban/unban',                  ' **Bir kullanıcınıyı banlarsınız ve banını açarsınız.**')
             .addField(' s!capslock-engelle',           ' **Büyük harf ile yazmasını engeller.**')
             .addField(" <a:krmzyldz:761318503101759518>Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['moderasyon','yardım-moderasyon'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'moderasyon  ',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
