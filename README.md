<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Описание

Сервер обработки данных из youtrack.
Ежедневно подтягивает информацию из ютрека, тспользуя REST API Youtrack и 
 REST API Hub. Имеется возможность подгрузить имеющиеся таски за текущий месяц.

## Подтягивание зависимостей

```bash
$ yarn install
```

## Настройка конфигурации

1) Создать .env файл в корне проекта
2) Добавить в файл следующие переменные

```.dotenv
# Youtrack
YOUTRACK_BASE_URL = <адрес ютрека>
YOUTRACK_TOKEN = <постоянный токен>

# Database
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = postgres
TYPEORM_PASSWORD = postgres
TYPEORM_DATABASE = postgres
TYPEORM_PORT = 6000
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/**/*.entity{.ts,.js}

# Hub
HUB_BASE_URL =<адрес хаба>
HUB_TOKEN = <постоянный токен>

# google
GOOGLE_API_KEY = <GOOGLE_API_KEY>
GOOGLE_SHEET_ID =  <GOOGLE_SHEET_ID>

# httpQuery
TOP_QUERY_LIST = 100
```

## Запуск приложения

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

# add task this month
$ yarn run start:cli

```