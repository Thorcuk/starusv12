const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Eğlence`, ) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!atatürk',    ' **Atamızız fotoğraflarını atar.**')
             .addField(' s!aşk-ölçer',  ' **Aşk çlçersin.**')
             .addField(' s!kralol',     ' **Kral olursun.**') 
             .addField(' s!tokat',      ' **Tokat atarsın.**')
             .addField(' s!efkarölçer', ' **Efkarınızı ölçer.**')
             .addField(' s!ara155',     ' **Polisi ararsınız.**')
             .addField(' s!ağla',       ' **Botu ağlatırsınız.**')
             .addField(' s!doğum-günü', ' **Etiketlediğimiz birinin doğum gününü kutlarsınız.**')
             .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['eğlence','yardım-eğlence'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'eğlence',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
  