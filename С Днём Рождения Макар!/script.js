document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    const checkBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("visible");
            } else {
                box.classList.remove("visible");
            }
        });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Проверяем при загрузке страницы
});