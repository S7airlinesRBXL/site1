document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Форматируем сообщение для WhatsApp
    const whatsappMessage = `Имя: ${name}%0AEmail: ${email}%0AСообщение: ${message}`;

    // Номер телефона тех. поддержки (замените на реальный номер)
    const phoneNumber = '79142894588'; // Пример номера

    // Создаем ссылку для WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Открываем WhatsApp в новом окне
    window.open(whatsappUrl, '_blank');
});