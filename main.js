import './cosmetics.js';
import { Modal } from './homework-12.js/modal.js';
import Form from './form.js';
const registrationForm = new Form('registrationForm');
const subscribeForm = new Form('subscribeForm');

const openBtn = document.getElementById('openModalBtn');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        regModal.open();
    });
}

if (registrationForm.form) {
    registrationForm.form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const values = registrationForm.getValues();

        if (values.password !== values.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        if (registrationForm.isValid()) {
            console.log('Данные формы:', values);
            registrationForm.reset();
            regModal.close();
            alert('Вы успешно зарегистрировались!');
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }
    });
}

if (subscribeForm.form) {
    subscribeForm.form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (subscribeForm.isValid()) {
            alert('Спасибо за подписку!');
            subscribeForm.reset();
        }
    });
}

import { Coffee, Tea } from './drinks.js';
import { Cafe } from './cafe.js';

const myCafe = new Cafe("Красота  и Кофе", "ул. Баумана, 34");

const espresso = new Coffee("Эспрессо", "Маленький", 150, 20, "Арабика");
const blackTea = new Tea("Черный чай", "Средний", 100, 25, "Цейлонский");

myCafe.showWelcome();
myCafe.order(espresso);
myCafe.order(blackTea);

const regModal = new Modal('regModal', 'overlay');
regModal.initClose();
