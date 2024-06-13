import {Telegraf, Markup} from 'telegraf'
import express from "express";
import cors from "cors";

const token = '7418620026:AAHHDANp6hg6iREZ-vtiPUiDld9Lb_X0c9c'
const url = 'https://react-test-tg-bot.web.app/'
const bot = new Telegraf(token, {})

const app = express()

app.use(express.json())
app.use(cors())

bot.command('start', ctx => {
    ctx.reply('Welcome to Telegraf5!',
        Markup.inlineKeyboard([
            Markup.button.webApp('send message', url)
        ]))
})

bot.launch()

const PORT = 8000;
app.listen(PORT, () => `Server running on port ${PORT}`);
