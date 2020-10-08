const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('STARUS PRO LEAGUE  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField(" <a:dev:762251828762902539> **Botun Sahibi**", "<@631545259297603625>")
  .addField(" <a:dev:762251828762902539> **Geliştirici** ","<@631545259297603625>")
  .addField(" <a:dev:762251828762902539> **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField(" <a:dev:762251828762902539> **Çalışma süresi**", seksizaman)
  .addField(" <a:dev:762251828762902539> **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(" <a:dev:762251828762902539> **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField(" <a:dev:762251828762902539> **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField(" <a:dev:762251828762902539> **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField(" <a:dev:762251828762902539> **Node.JS sürüm**", `${process.version}`, true)
  .addField(" <a:dev:762251828762902539> **Ping**", bot.ping+" ms", true)
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};