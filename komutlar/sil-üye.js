const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmen için MESAJLARI_YÖNET iznine sahip olmalısın!`);
  let uye = message.mentions.members.first();
  if (!uye || !args[1] || isNaN(args[1]) || Number(args[1]) < 1 || Number(args[1]) > 99) return message.reply(`Komutu doğru kullanmalısın!\n${this.help.usage}`);
  let mesajlar = await message.channel.fetchMessages();
  message.channel.bulkDelete(mesajlar.filter(msj => msj.author.id === uye.id).array().slice(0, Number(args[1]))).then(() => message.reply(`Belirtilen üyenin mesajları başarıyla silindi!`).then(uyari => uyari.delete(5000))).catch(hata => message.channel.send("Bir hatayla karşılaşıldı!"));
  message.delete(5000);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil-üye'],
  permLevel: 0
};

exports.help = { 
  name: 'temizle-üye', 
  description: 'Belirtilen üyenin belirtilen sayıda mesajlarını temizler.',
  usage: 'temizle-üye @etiket <sayı> (1-100)',
  kategori: 'kullanıcı'
};
