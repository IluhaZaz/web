function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log("Данные из JSON:", data);
            }
            catch (error) {
                console.error("Ошибка при парсинге JSON:", error);
            }
        }
        else {
            console.error("Ошибка загрузки данных. Статус:", xhr.status);
        }
    };
    xhr.send();
}
document.addEventListener('DOMContentLoaded', loadData);
