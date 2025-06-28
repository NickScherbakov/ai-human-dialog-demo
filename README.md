# AI Human Dialog Demo

Этот проект демонстрирует, как запустить два AIHuman в браузере, используя Web SDK от DeepBrain AI.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/NickScherbakov/ai-human-dialog-demo.git
   cd ai-human-dialog-demo
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. В файле `server.js` замените `<YOUR_APP_ID>` и `<YOUR_USER_KEY>` на ваши реальные значения.
4. Запустите сервер:
   ```bash
   npm start
   ```
5. Откройте в браузере:
   ```
   http://localhost:3000
   ```

## Структура проекта

- `server.js` — Express-сервер и endpoint `/generateJWT`
- `public/index.html` — HTML-страница с контейнерами для AIPlayer
- `public/dialog.js` — логика аутентификации и сценария диалога

## Диалог ChatGPT

```
User: Это бесплатно? Нужно ли за что-нибудь платить?
Assistant: ...
User: Ничего не понимаю. Дайте план...
Assistant: ...
User: Создай репозиторий...
Assistant: ...
User: Готов репозиторий...
Assistant: ...
User: Продолжайте
Assistant: ...
```