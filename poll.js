const Telegraf = require('telegraf');

const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);


bot.start((ctx) => ctx.reply('Buyruqlar: /sorov / savol'));

bot.comand('sorov' , (ctx) => {
    ctx.replyWithPoll(
        'Quydagilardan qaysi biri sgliq uchun zararli?',
        ['suv','olma','pepsi','gosht','sut'],
        {is_anonymous: false}
    )
});
bot.comand('sorov' , (ctx) => {
    ctx.replyWithPoll(
        'Quydagilardan qaysi biri sgliq uchun zararli?',
        ['suv','olma','pepsi','gosht','sut'],
        {is_anonymous: false}
    )
});
bot.comand('sorov' , (ctx) => {
    ctx.replyWithPoll(
        'Quydagilardan qaysi biri sgliq uchun zararli?',
        ['suv','olma','pepsi','gosht','sut'],
        {is_anonymous: false}
    )
});
bot.comand('savol', (ctx) => 
ctx.replyWithQuiz(
    'Angilyaning potaxti qayer?',
    ['NewYork','Dubay','Istanbull','Londan'],
    {correct_option_id:3}
)
);

bot.launch();