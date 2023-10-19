const Telegraf = require('telegraf');
const Extra = require('telegraf');
const fs = require('fs');
const dotenv = require('dotenv/config');


const bot = new Telegraf(process.env['BOT_TOKEN']);

//fayldan o'qish:
bot.comand('otloq',(ctx) => ctx.replyWithPhoto({source:'rasmlar/otloq.jpg'}));
bot.comand('baliq', (ctx) => ctx.replyWithPhoto({source:'rasmlar/baliq.jpg'}));
bot.comand('ormon', (ctx) => ctx.replyWithPhoto({source:'rasmlar/ormon.jpg'}));

//fayilni strim yordamida o'qish
bot.comand('qish',(ctx) => ctx.replyWithPhoto({ source:fs.createReadStream('rasmlar/qish.jpg')}));

//internetdan ixtiyoriy fayl izlab topish:
bot.comand('boshqa', (ctx) => ctx.replyWithPhoto('https://picsum.pohtos/200/300/?random'));

//rasmga sarlavha qo'shib javob berish:
bot.comand('orol',(ctx) => ctx.replyWithPhoto({ source:'rasmlar/orol.jpg'},
Extra.caption('Dengiz,orol, va boshqalar').markdown()
));

// animatsiya bilan javob qaytarish:
bot.comand('tabassum');

