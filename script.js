const users = [
    { username: "MG", password: "MakarG" },
    { username: "GS", password: "GeorgijS" },
    { username: "user2", password: "password2" }
];

const specialUsers = [
    { username: "superadmin", password: "superpassword", redirect: "special.html" },
    { username: "old", password: "old", redirect: "olds link.html" },
    { username: "MakarGailulin", password: "password", redirect: "olds link.html" },
    { username: "GeorgijSoldatov", password: "password", redirect: "olds link.html" },
    { username: "happy", password: "happy", redirect: "С Днём Рождения Макар!/index.html" },
    { username: "happy29", password: "happy", redirect: "Напоминание про мой др/index.html" },
    { username: "files", password: "files", redirect: "files.html" }
];

// Функция для проверки и отображения статуса сети
function updateNetworkStatus() {
    const statusElement = document.getElementById('network-status');
    if (!statusElement) return;
    
    if (navigator.onLine) {
        statusElement.textContent = "Сеть доступна";
        statusElement.style.color = "green";
    } else {
        statusElement.textContent = "Сети нет! Проверьте подключение к интернету.";
        statusElement.style.color = "red";
    }
}

// Добавляем элемент для отображения статуса сети
function addNetworkStatusElement() {
    const statusElement = document.createElement('div');
    statusElement.id = 'network-status';
    statusElement.style.margin = '10px 0';
    document.body.insertBefore(statusElement, document.body.firstChild);
    updateNetworkStatus();
}

// Проверка соединения каждую секунду
function startNetworkMonitoring() {
    addNetworkStatusElement();
    setInterval(updateNetworkStatus, 1000); // Обновляем каждую секунду
    
    // Также отслеживаем события изменения состояния сети
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!navigator.onLine) {
        document.getElementById('message').textContent = "Сети нет! Проверьте подключение к интернету.";
        document.getElementById('message').style.color = "red";
        return;
    }

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const specialUser = specialUsers.find(u => u.username === username && u.password === password);

    if (specialUser) {
        document.getElementById('message').textContent = "Вход выполнен успешно!";
        document.getElementById('message').style.color = "green";
        window.location.href = specialUser.redirect;
        return;
    }

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('message').textContent = "Вход выполнен успешно!";
        document.getElementById('message').style.color = "green";
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('message').textContent = "Неверное имя пользователя или пароль";
        document.getElementById('message').style.color = "red";
    }
});

// Запускаем мониторинг сети при загрузке страницы
window.addEventListener('DOMContentLoaded', startNetworkMonitoring);

console.log("Скрипт загружен!");
