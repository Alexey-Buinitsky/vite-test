// npm
npm init vite@latest 
npm i sass
npm i react-router-dom
npm i react-redux
npm i @reduxjs/toolkit

//
(npm i -g sass)
sass --watch
npm install react-slider - прайс слайдер 
    (upd: При установке данного пакета при запуске run server всплывает ошибка 
    "@babel/runtime/helpers/esm/extends" для этого устанавливаем еще один пакет -->
        npm install --save @babel/runtime
    )
npm install react-content-loader - скелетон
npm install --save @pbe/react-yandex-maps - карты

// Git
git init - создание локального репозитория
git add . - добавление всех файлов проекта в index
git commit -m <commit name> - создание коммита
git remote add origin <url> - подключение удаленного репозитория
git push -u origin <branch> - загрузка изменений из локальной ветки в удаленную с созданием связи между ними 
(после связки веток, комманду -u можно упразднить (т.е git push, git pull))

git clone <url> - клонирование удаленного репозитория

git branch - просмотр всех веток в локальном репозитории
git branch -m <new branch name> - переименование текущей ветки
git branch -d <branch name> - удаление (локальной) ветки(*не текущей)
git push origin --delete <branch name> - удаление (удаленной) ветки
git branch <branch name> - создание новой ветки
git checkout <branch name> - переход в новую ветку
git checkout -b <branch name> - создание и переход в новую ветку

git merge <feature branch name> - слияние другой ветки <feature branch name> в текущ

//TypeScript
npm install --save-dev @types/swiper - типы для Swiper
npm install --save-dev @types/react-slider - типы для Price-Slider

//Extra
flex-grow: 1; min-width: 0; - если свайпер растягивается на огромную ширину, добавить свойства div-у который содержит в себе свайпер и является объектом применения display:flex