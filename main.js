import './cosmetics.js';
import Modal from './modal.js';
import Form from './form.js';
const registrationModal = new Modal('regModal');
const registrationForm = new Form('registrationForm');
const subscribeForm = new Form('subscribeForm');

const openBtn = document.getElementById('openModalBtn');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        registrationModal.open();
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
            registrationModal.close();
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
