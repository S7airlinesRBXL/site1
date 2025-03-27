// Устанавливаем дату дня рождения
const birthday = new Date(new Date().getFullYear(), 3, 29); // 3 = апрель (месяцы в JS считаются с 0)

// Функция для обновления таймера
function updateCountdown() {
    const now = new Date();
    const timeDiff = birthday - now;

    // Если день рождения уже прошел в этом году, устанавливаем на следующий год
    if (timeDiff < 0) {
        birthday.setFullYear(birthday.getFullYear() + 1);
        return updateCountdown();
    }

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Отображаем таймер
    document.getElementById("countdown").innerHTML = `
        До дня рождения осталось: <br>
        ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд
    `;
}

// Обновляем таймер каждую секунду
setInterval(updateCountdown, 1000);

// Инициализация при загрузке страницы
updateCountdown();