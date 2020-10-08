  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Moderasyon 2`, ) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!sa-as <aç kapat> ',  '**Sa as açar.**')
             .addField(' s!oylama',             '**Oylama yaparsın.**')
             .addField(' s!roldekileri-say',    '**Roldeki kişileri sayar.**')
             .addField(' s!mute',               '**Etiketlediniz birini mutelersiniz.**')
             .addField(' s!mute-log-ayarla',    '**Mute Log kanalını ayarlarsınız.**')
             .addField(' s!kurallar',           '**Bot sunucu için gerekli hazır kuralları kanala atar.**')
             .addField(' s!çekilişyap',         '**Anında çekiliş yaparsın.**')
             .addField(' s!sesliçekiliş',       '**Sesli Çekiliş yapar.**')
             .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['moderasyon2','yardım-moderasyon2'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'moderasyon2',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
