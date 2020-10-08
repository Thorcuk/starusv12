const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Aktif Komutlarım Yüklendi! `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  ${client.user.username} İsmi İle Discorda Bağlandım! `);
  client.user.setStatus("online");
   var oyun = [
        
        "s!yardım + s!davet",
        "7/24 Aktif",
        "Yapım Aşamasında 2/4",
        "",
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "idle"); 
        }, 2 * 9000); //Değişim süresini buradan ayarlayabilirsiniz şuan 2 saniyede bir değişiyor
}
