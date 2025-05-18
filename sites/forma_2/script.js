document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", sendText);
});

async function sendText(event) {
    event.preventDefault();
    
    // Отримання даних з усіх полів вводу
    const formData = new FormData(event.target);
    
    // Перетворення FormData в об'єкт
    let data = '';
    formData.forEach((value, key) => {
        data+= `${key}=${value};`;
    });

    // Відправка даних
    const response = await fetch("https://io.adafruit.com/api/v2/Bosdfsd/feeds/text/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-AIO-Key": "aio_xlIg07UqQGcKXrw4QSyAoqN3CiXt"
        },
        body: JSON.stringify({ value: data })// Відправка даних у форматі JSON
    });
    
    if (response.ok) {
        alert("Дані надіслано успішно!");
    } else {
        alert("Помилка: не вдалося надіслати дані.");
    }
}