# API для работы с реестром иноагентов

Наш сайт: [Иноагенты.API / islisted.ru](https://islisted.ru)

# Как часто обновляется информация

В течение 15 минут после обновления списка на сайте МинЮста

# Как получить список иноагентов

## Подключение к MQ

Используется Rabbit MQ - ваша система будет подключена к очереди, в которую рассылаются списки при их обновлении. Таким образом ваша система будет получать список иноагентов в формате JSON в то же время, как он распарсится нашей системой.

## HTTP API

Есть возможность подключиться по HTTP API.

Напишите нам на почту [support@islisted.ru](mailto:support@islisted.ru?subject=Подключиться%20к%20HTTP%20API) и мы обговорим детали.