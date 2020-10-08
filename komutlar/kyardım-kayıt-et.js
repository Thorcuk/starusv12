const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const kayıtet = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Kayıt Yardım')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('')
        .setDescription('',false)
        .setDescription('',true)
        .addField('Kayıt Erkek', '`s!erkek @kullanıcı isim yaş` Üyeyi Erkek olarak kayıdeder.',false)
        .addField('Kayıt Kız','`s!kız @kullanıcı isim yaş` Üyeyi Kız olarak kayıdeder.',false)
.setImage(``);
msg.channel.send(kayıtet)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt', 'kayıt','k'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kayıt'
};