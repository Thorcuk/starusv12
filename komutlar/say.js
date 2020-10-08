const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {

  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.guild.name}`, `${message.author.displayAvatarURL}`)
    .setDescription(
     `**Ses kanallarında \`${count}\` kişi bulunmaktadır!**
     \n**Sunucuda \`${message.guild.memberCount}\` kişi bulunmaktadır!**
     \n**Sunucudaki Online (İnsan)Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'online').size}\`
     \n**Sunucudaki DND (İnsan)Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'dnd').size}\`
     \n**Sunucudaki Idle (İnsan)Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'idle').size}\`
     \n**Sunucudaki Offline Sayısı:** \`${message.guild.members.filter(x => x.user.presence.status === 'offline').size}\`
     \n**Sunucudaki Bot Sayısı:** \`${message.guild.members.filter(m => m.user.bot).size}\``) 

    .setThumbnail(message.guild.iconURL)
    .setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
    .setTimestamp();

  message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"],
  permLevel: 0
};
exports.help = {
  name: "say",
  description: "- ",
  usage: "say"
};