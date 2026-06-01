const container = document.getElementById('container');
const statusMessage = document.getElementById('statusMessage');

const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const STORAGE_KEY = 'family_database';

function init() {
    const localData = localStorage.getItem(STORAGE_KEY);
      if (localData) {
        const family = JSON.parse(localData);
        renderFamily(family);
    } else {
        loadFamilyFromServer();
    }
}

function loadFamilyFromServer() {
    if (statusMessage) statusMessage.innerHTML = '<p style="text-align:center;">Данные загружаются...</p>';
    if (container) container.innerHTML = ''; 

    setTimeout(() => {
        fetch('users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ой! Файл с семьей не найден!');
                }
                return response.json();
            })
            .then(data => {
                if (statusMessage) statusMessage.innerHTML = '';
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                renderFamily(data);
            })
            .catch(error => {
                if (statusMessage) statusMessage.innerHTML = '<p style="color:red;">Ошибка при загрузке данных о семье!</p>';
                console.error(error);
            });
    }, 2000); 
}

function renderFamily(familyList) {
    container.innerHTML = '';
     if (familyList.length === 0) {
        statusMessage.innerHTML = '<p>Вся семья разбежалась!</p>';
        return;
    }

    familyList.forEach(member => {
        const card = document.createElement('div');
        card.style.cssText = 'border: 1px solid #ccc; padding: 10px; margin: 10px; border-radius: 5px; text-align: center; display: inline-block; width: 150px;';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><b>Кто:</b> ${member.relation}</p>
            <p><b>Хобби:</b> ${member.hobby}</p>
            <p><b>Возраст:</b> ${member.age}</p>
            <button onclick="deleteMember(${member.id})" style="background: red; color: white;">Удалить</button>
        `;
        container.appendChild(card);
    });
}

window.deleteMember = function(id) {
    const localData = localStorage.getItem(STORAGE_KEY);
    if (!localData) return;
    let family = JSON.parse(localData);
    family = family.filter(member => member.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(family));
    renderFamily(family);
};

deleteAllBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    renderFamily([]);
});

getAllBtn.addEventListener('click', () => {
    const localData = localStorage.getItem(STORAGE_KEY);
    
    if (localData) {
        const family = JSON.parse(localData);
        if (family.length > 0) {
            alert('Все члены семьи уже дома на экране!');
            return;
        }
    }

    localStorage.removeItem(STORAGE_KEY);
    loadFamilyFromServer();
});
!
init();


