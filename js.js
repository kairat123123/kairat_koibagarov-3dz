let people = [
    { name: "John Doe", age: 25, profession: "Engineer" },
    { name: "Jane Smith", age: 30, profession: "Doctor" },
    { name: "Mark Johnson", age: 40, profession: "Teacher" },
    { name: "Michel Linton", age: 50, profession: "Police" },
    { name: "Stefani Markus", age: 30, profession: "Designer" },
    { name: "Alice Clai", age: 20, profession: "Driver" }
];

// Получаем DOM элемент контейнера для карточек
let cardsContainer = document.getElementById("cardsContainer");

// Создаем и отображаем карточку для каждого человека
people.forEach(function(person) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h2");
    name.textContent = person.name;

    let age = document.createElement("p");
    age.textContent = "Age: " + person.age;

    let profession = document.createElement("p");
    profession.textContent = "Profession: " + person.profession;

    // Добавляем элементы DOM в карточку
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(profession);

    // Добавляем карточку в контейнер
    cardsContainer.appendChild(card);
});






// Создаем объект XMLHttpRequest
let xhr = new XMLHttpRequest();

// Устанавливаем URL для запроса
xhr.open("GET", "people.json", true);

// Устанавливаем заголовок для правильного чтения JSON
xhr.setRequestHeader("Content-Type", "application/json");

// Ожидаем ответ в виде JSON
xhr.responseType = "json";

// Обрабатываем успешный ответ
xhr.onload = function() {
    if (xhr.status === 200) {
        let response = xhr.response;

        // Выводим данные в консоли
        console.log(response);

        // Можно также выполнить другие действия с данными здесь
    }
};

// Обрабатываем ошибку
xhr.onerror = function() {
    console.log("Ошибка запроса");
};

// Отправляем запрос
xhr.send();
