import TelegramBot from 'node-telegram-bot-api'
import express from "express";
import cors from "cors";

const token = '6851790797:AAF5pWCYz5xyrZV9DICic8hI9gVGCBzzcZI'
const url = 'https://react-test-tg-bot.web.app/'
const bot = new TelegramBot(token, {polling: true});

const app = express()

app.use(express.json())
app.use(cors())

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'yo', {
            reply_markup: {
                keyboard: [
                    [{text: 'click', web_app: {url: url + '/form'}}]
                ]
            }
        })
    }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
