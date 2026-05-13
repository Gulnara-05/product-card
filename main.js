import './cosmetics.js';
import Modal from './Modal.js';
import Form from './Form.js';

const registrationModal = new Modal('regModal'); 
const registrationForm = new Form('registrationForm');

const openBtn = document.getElementById('openModalBtn');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        registrationModal.open();
    });
}

if (registrationForm.form) {
    registrationForm.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        if (registrationForm.isValid()) {
            console.log('Данные формы:', registrationForm.getValues());
            registrationForm.reset();
            registrationModal.close();
            alert('Вы успешно зарегистрировались!');
        } else {
            alert('Пожалуйста, заполните все поля корректно.');
        }
    });
}
