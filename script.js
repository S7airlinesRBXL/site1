const { specialUsers } = require("./specialUsers");

const users = [
    { username: "MG", password: "MakarG" },
    { username: "GS", password: "GeorgijS" },
    { username: "user2", password: "password2" }
];

// Специальные пользователи
export const specialUsers = [
    { username: "superadmin", password: "superpassword", redirect: "special.html" }, // Админ
    { username: "old", password: "old", redirect: "olds link.html" }, // Старый
    { username: "MakarGailulin", password: "password", redirect: "olds link.html" }, // Хз на какую страницу перенаправлять
    { username: "GeorgijSoldatov", password: "password", redirect: "olds link.html" }, // Хз на какую страницу перенаправлять
    { username: "happy", password: "happy", redirect: "С Днём Рождения Макар!/index.html" }, // С днём рождения!
    { username: "happy29", password: "happy", redirect: "Напоминание про мой др/index.html" }, // Напоминалка
    { username: "files", password: "files", redirect: "files.html" } // Файлы
];


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Проверка на специальных пользователей
    const specialUser = specialUsers.find(u => u.username === username && u.password === password);

    if (specialUser) {
        document.getElementById('message').textContent = "Вход выполнен успешно!";
        document.getElementById('message').style.color = "green";
        // Перенаправление на страницу, указанную для специального пользователя
        window.location.href = specialUser.redirect;
        return; // Прерываем выполнение функции
    }

    // Поиск обычного пользователя в массиве
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('message').textContent = "Вход выполнен успешно!";
        document.getElementById('message').style.color = "green";
        // Перенаправление на обычную страницу
        window.location.href = "dashboard.html";
    } else {
        document.getElementById('message').textContent = "Неверное имя пользователя или пароль";
        document.getElementById('message').style.color = "red";
    }
});

// Если используешь export:
export function test() {
    console.log("Модуль работает!");
}

// Или просто код без export:
console.log("Скрипт загружен!");
