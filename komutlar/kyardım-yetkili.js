const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const yetkili = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Kayıt Yetkili Yardım ')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('')
        .setDescription('',false)
        .addField('Kayıt Alıncak Rol','`s!alınacak-rol @rol` \n Alınacak Rolü Ayarlarsınız.',true )
        .addField('Kayıt Üye Rol','`s!üye-rol-ayarla @rol` \n Üye Rolü Ayarlarsınız',true)
        .addField('Kayıt Erkek Rol','`s!erkek-rol-ayarla @rol` \n Erkek Rolü Ayarlarsınız',true)
        .addField('Kayıt Kız Rol','`s!kız-rol-ayarla @rol` Kız Rolü Ayarlarsınız.',false)
        .addField('Kayıt Yetkili Rol','`s!yetkili-rol-ayarla @rol` Kayıt Yetkilisi Rolü Ayarlarsınız. ',true)
        .addField('Kayıt Kanal','`s!kayıt-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('Kayıt Kanal','`s!kayıt-log-kanal #kanal` Kayıt Odasını Ayarlarsınız.',true)
        .addField('Hoşglendin Kanal','`s!hg-kanal #kanal` Hoşgeldin Mesajı atılacak olan Odayı Ayarlarsınız.',true)
        .addField('Hoşglendin Mesaj','`s!hg-mesaj mesaj` Hoşgeldin Mesajı Ayarlarsınız.',true)
.setImage(``);
msg.channel.send(yetkili)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt-yetkili', 'k-y'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yetkili',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yetkili-yardım'
};