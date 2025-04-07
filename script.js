const users = [
    { username: "MG", password: "MakarG" },
    { username: "GS", password: "GeorgijS" },
    { username: "user2", password: "password2" }
];

// Специальные пользователи (без export, так как это не модуль)
const specialUsers = [
    { username: "superadmin", password: "superpassword", redirect: "special.html" },
    { username: "old", password: "old", redirect: "olds link.html" },
    { username: "MakarGailulin", password: "password", redirect: "olds link.html" },
    { username: "GeorgijSoldatov", password: "password", redirect: "olds link.html" },
    { username: "happy", password: "happy", redirect: "С Днём Рождения Макар!/index.html" },
    { username: "happy29", password: "happy", redirect: "Напоминание про мой др/index.html" },
    { username: "files", password: "files", redirect: "files.html" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

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

console.log("Скрипт загружен!"); // Просто для проверки
