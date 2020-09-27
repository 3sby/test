"use strict";
/*
function clientName() {
    let age = prompt('Сколько тебе лет?');
    alert(`Возраст подходит. Вам ${age} лет!`);

    let name = prompt('Как тебя зовут?');
    alert(`Добро пожаловать, ${name}!`);

    confirm(`Готов начать, ${name}?`);
}

clientName();
*/

container_button.onclick = function() {
    let name = prompt('Введите ваше имя');
    let orderAdress = prompt('Введите адрес доставки');
    let dateOrder = prompt('Введите дату доставки');
    alert(`${name}, Вы подтверждаете Ваш заказ?`);
    alert(`${name}, Ваш заказ оформлен!\nДоставка по адресу: ${orderAdress}\nДата доставки: ${dateOrder}\nСпасибо за Ваш заказ!`);
}