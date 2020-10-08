const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Yetkin Yok!");
  let reason = args.slice(1).join(" ");
  let user = args[0];

  if (!user)
    return message
      .reply("Banı kaldırılacak kişinin ID numarasını yazmalısın.")
      .catch(console.error);
  if (!reason)
    return message.reply("Ban Kaldirma Sebebi Yazmalisin").catch(console.error);
  message.guild.unban(user, reason);

  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField("Eylem:", "Ban kaldırma")
    .addField("Kullanıcı ID:", `${user}`)
    .addField(
      "Yetkili:",
      `${message.author.username}#${message.author.discriminator}`
    )
    .addField("Sebep", reason);
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "unban",
  description: "İstediğiniz kişinin banını kaldırır.",
  usage: "unban [kullanıcı] [sebep]"
};