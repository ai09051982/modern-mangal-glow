# Шаблон MANGAL61 для Joomla 6

## Сборка
```
node scripts/build-joomla.mjs
```
Скрипт собирает фронтенд (Vite, base=/templates/mangal61/), копирует бандлы в
`joomla/build/mangal61/assets`, генерирует `joomla.asset.json` с актуальными
хешами файлов и упаковывает всё в
`/mnt/documents/mangal61-joomla6-template.zip`.

## Установка
1. Joomla → Система → Установить расширения → Загрузить пакет → выбрать zip.
2. Система → Шаблоны сайта → «mangal61» → сделать шаблоном по умолчанию.

## Структура
- `index.php` — основной макет, подключает пресет ассетов `template.mangal61`,
  выводит `<div id="root">` (React-приложение) и позиции модулей
  `topbar`, `banner`, `main`, `footer`.
- `component.php`, `error.php`, `offline.php` — служебные макеты.
- `joomla.asset.json` — регистрация CSS/JS в Web Asset Manager (генерируется).
- `assets/` — собранные CSS, JS и изображения (генерируется).
- `html/` — переопределения вывода Joomla (при необходимости).
