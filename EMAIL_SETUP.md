# Настройка отправки писем через Gmail

## Шаг 1: Получите пароль приложения Gmail

1. Откройте https://myaccount.google.com/security
2. Включите **двухфакторную аутентификацию** (если ещё не включена)
3. Перейдите в раздел **"Пароли приложений"** (App Passwords)
4. Выберите приложение: **"Почта"** и устройство: **"Другое"**
5. Введите название: **"Nor-Art Dent Website"**
6. Скопируйте сгенерированный пароль (16 символов)

## Шаг 2: Настройте файл .env

Откройте файл `.env` в корне проекта и замените:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

На ваши данные:

```env
EMAIL_USER=iamyapi@inbox.ru
EMAIL_PASS=ваш-пароль-приложения-gmail
PORT=3001
```

**Важно:** Если вы используете Mail.ru или Inbox.ru, настройки будут другими:

### Для Mail.ru / Inbox.ru:

В файле `server/index.js` замените:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

На:

```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

И в `.env`:

```env
EMAIL_USER=iamyapi@inbox.ru
EMAIL_PASS=ваш-обычный-пароль-от-почты
PORT=3001
```

## Шаг 3: Установите зависимости

```bash
npm install
```

## Шаг 4: Запустите проект

### Вариант 1: Запустить всё вместе (фронтенд + бэкенд)

```bash
npm run dev:all
```

### Вариант 2: Запустить отдельно

Терминал 1 (фронтенд):
```bash
npm run dev
```

Терминал 2 (бэкенд):
```bash
npm run server
```

## Проверка

1. Откройте http://localhost:3000
2. Заполните форму контакта
3. Проверьте:
   - Рабочую почту (`iamyapi@inbox.ru`) — должно прийти письмо с заявкой
   - Почту клиента (из формы) — должно прийти письмо с подтверждением

## Troubleshooting

### Ошибка: "Invalid login"
- Проверьте правильность email и пароля в `.env`
- Убедитесь, что используете пароль приложения, а не обычный пароль
- Для Mail.ru: включите доступ по SMTP в настройках почты

### Ошибка: "Connection timeout"
- Проверьте настройки SMTP (host, port, secure)
- Убедитесь, что нет блокировки файрволом

### Письма не приходят
- Проверьте папку "Спам"
- Убедитесь, что сервер запущен (`npm run server`)
- Проверьте консоль сервера на наличие ошибок
