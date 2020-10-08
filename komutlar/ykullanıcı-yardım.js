const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const codare = new Discord.RichEmbed()

             .setColor('#fff000')
             .setAuthor(`Kullanıcı`,) 
             .setThumbnail(client.user.avatarURL)
             .addField(' s!öneri',                      ' **Bota yeni şeyler önerirsiniz.**')
             .addField(' s!say',                        ' **Sunucudaki kişi sayısını sayar.**')
             .addField(' s!hava-durumu',                ' **Bölgenizin hava durumunu gösterir.**')
             .addField(' s!avatar',                     ' **Etiketlediğiniz bir kişinin avatarını gösterir**.')
             .addField(' s!hesapla',                    ' **Matamatik işlemi hesaplar.**')
             .addField(" <a:krmzyldz:761318503101759518> Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=744990839339483276&scope=bot&permissions=8)` + "**  **" + `\n[Destek Sunucusu]() `, false)
             .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
            
        return message.channel.sendEmbed(codare);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['Kullanıcı','yardım-kullanıcı'],
	permLevel : 0
}
//codare
exports.help = {
	name : 'kullanıcı',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
