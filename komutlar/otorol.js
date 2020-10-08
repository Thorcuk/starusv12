const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setColor('#fff000 ')
.addField('**Otorol Sistemi**','**s!oto-rol-ayarla**  **Otorolü Ayarlar.**\n <a:krmzyldz:761318503101759518> Örnek: `s!oto-rol-ayarla @rolünüz #logkanalı` \n \n __**s!otorol-msg **__》 **Otorol Mesajını Ayarlar. **\n <a:krmzyldz:761318503101759518> Örnek: `s!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`')

  .addField('**Kullanabileceğiniz Değişkenler**',`
-uye- **Kişiyi Doğrudan Etiketler.**

-uyetag- **Kişinin Adını Ve Etiketini Atar.**

-rol- **Otorolde Belirlenmiş Olan Rolü Atar.**

-server- **Sunucu İsmini Atar.**

-uyesayisi- **Sunucuda Olan Üyeleri Sayar Ve Onu Mesaja Döker.**
`)
     .setFooter('© Starus',client.user.avatarURL)
.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'sayaç', 
  usage: 'sayaç'
};
