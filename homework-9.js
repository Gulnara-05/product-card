let user = null;

const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('footer-email').value;
        console.log({ email: email });
        subscribeForm.reset();
    });
}

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('regModal');
const overlay = document.getElementById('overlay');
const regForm = document.getElementById('registrationForm');

const toggleModal = (show) => {
    const action = show ? 'add' : 'remove';
    modal.classList[action]('modal-showed');
    overlay.classList[action]('modal-showed');
};

if (openModalBtn) openModalBtn.onclick = () => toggleModal(true);
if (closeModalBtn) closeModalBtn.onclick = () => toggleModal(false);
if (overlay) overlay.onclick = () => toggleModal(false);

if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pass = document.getElementById('pass').value;
        const confirmPass = document.getElementById('confirmPass').value;

        if (pass !== confirmPass) {
            alert('Регистрация отклонена: пароли не совпадают!');
            return;
        }

        if (regForm.checkValidity()) {
            const formData = new FormData(regForm);
            user = Object.fromEntries(formData.entries());
            user.createdOn = new Date();

            console.log(user);
            toggleModal(false);
            regForm.reset();
        } else {
            alert('Регистрация отклонена: форма невалидна');
        }
    });
}