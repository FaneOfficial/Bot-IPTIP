import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

bot = telebot.TeleBot("your bot key here")

@bot.message_handler(commands=['start'])
def send_welcome(message):
    reply_markup = InlineKeyboardMarkup([
        [InlineKeyboardButton(text='Мирэа', url='https://www.mirea.ru/')],
        [InlineKeyboardButton(text='Сайт', url='https://www.mirea.ru')],
    ])
    bot.send_message(message.chat.id, 'Привет!', reply_markup=reply_markup)


bot.polling()