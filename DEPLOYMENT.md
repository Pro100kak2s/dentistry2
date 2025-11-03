# 🚀 Инструкция по деплою Нор-Арт Дент

## 📦 Структура проекта

- **Фронтенд**: React + Vite → Vercel
- **Бэкенд**: Node.js + Express → Render

---

## 🔧 Шаг 1: Деплой Бэкенда на Render

### 1.1 Подготовка Git репозитория

```bash
cd /Users/yushachkov/Desktop/dentistry2/final
git init
git add .
git commit -m "Initial commit: Nor-Art Dent website"
```

### 1.2 Загрузка на GitHub

1. Создайте новый репозиторий на https://github.com
2. Название: `nor-art-dent`
3. Сделайте его приватным (если нужно)
4. Выполните команды:

```bash
git remote add origin https://github.com/ваш-username/nor-art-dent.git
git branch -M main
git push -u origin main
```

### 1.3 Деплой на Render

1. Зайдите на https://render.com
2. Нажмите **"New +"** → **"Web Service"**
3. Подключите свой GitHub репозиторий
4. Настройки:
   - **Name**: `nor-art-dent-api`
   - **Region**: Frankfurt (Europe)
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. **Environment Variables** (добавьте):
   ```
   EMAIL_USER=iamyapi@inbox.ru
   EMAIL_PASS=17g4bJfWNrSEiXUZatf9
   PORT=3001
   ```

6. Нажмите **"Create Web Service"**

7. Дождитесь завершения деплоя (5-10 минут)

8. **Скопируйте URL** вашего API (например: `https://nor-art-dent-api.onrender.com`)

---

## 🎨 Шаг 2: Деплой Фронтенда на Vercel

### 2.1 Обновите `.env.production`

Замените URL в файле `.env.production`:

```env
VITE_API_URL=https://ваш-backend-url.onrender.com/api/contact
```

Например:
```env
VITE_API_URL=https://nor-art-dent-api.onrender.com/api/contact
```

### 2.2 Загрузите изменения на GitHub

```bash
git add .
git commit -m "Update production API URL"
git push
```

### 2.3 Деплой на Vercel

**Вариант A: Через веб-интерфейс**

1. Зайдите на https://vercel.com
2. Нажмите **"Add New"** → **"Project"**
3. Импортируйте ваш GitHub репозиторий
4. Настройки:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (корень)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables**:
   ```
   VITE_API_URL=https://nor-art-dent-api.onrender.com/api/contact
   ```
6. Нажмите **"Deploy"**

**Вариант B: Через CLI**

```bash
npm i -g vercel
vercel login
vercel --prod
```

При запросе переменных окружения добавьте:
```
VITE_API_URL=https://nor-art-dent-api.onrender.com/api/contact
```

### 2.4 Получите URL сайта

После деплоя Vercel выдаст URL, например:
- `https://nor-art-dent.vercel.app`

---

## ✅ Шаг 3: Проверка

1. Откройте ваш сайт на Vercel
2. Прокрутите до формы "Запишитесь на консультацию"
3. Заполните и отправьте тестовую заявку
4. Проверьте почту `iamyapi@inbox.ru`

---

## 🔄 Обновление сайта

Теперь для обновления сайта просто:

```bash
git add .
git commit -m "Описание изменений"
git push
```

Vercel и Render автоматически задеплоят новую версию!

---

## 🐛 Troubleshooting

### Ошибка CORS
Если форма не отправляется, добавьте домен Vercel в CORS на бэкенде:

В `server/index.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://ваш-домен.vercel.app']
}));
```

### Render засыпает (Free tier)
На бесплатном тарифе Render засыпает после 15 минут неактивности.
Первый запрос может занять 30-60 секунд.

Решение: используйте Render Paid plan ($7/мес) или другой сервис.

---

## 📧 Кастомный домен

### Для Vercel:
1. Зайдите в Settings → Domains
2. Добавьте ваш домен (например: `norartdent.ru`)
3. Настройте DNS записи у регистратора домена

---

## 🎉 Готово!

Ваш сайт работает в продакшне!

- 🌐 Фронтенд: `https://ваш-сайт.vercel.app`
- 🔧 Бэкенд: `https://ваш-api.onrender.com`

