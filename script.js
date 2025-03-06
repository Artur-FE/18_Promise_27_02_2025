console.log("Start");

setTimeout(() => console.log(5), 0);

let flag = false;
function getFiveAfterSevenSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      flag ? resolve(5) : reject("Error: flag equal false");
    }, 7000);
  });
  // setTimeout(() => 5, 0)
}

console.log("Finish");



let res = getFiveAfterSevenSeconds()
  .then((value) => console.log(value))
  .catch((problem) => console.log(problem))
  .finally(() => console.log("Это действие выполняется в любом случае"));

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    console.log(`Ответ на запрос на сервер`, response);
    if(response.ok) {
    return response.json()
    }
})
.then((users) => {
  // 1. Создать список (в html или js)
  const usersList = document.createElement("ol");
  // 2. Итерируя массив пользователей при каждой итерации:
  users.forEach(({name, email, phone, company: {name: companyName}, address: {city}}) => {
    // а. Создаётся новый элемент списка
    const usersListItem = document.createElement("li");
    // b. Настройка элемента (обязательная часть - это текстовый контент, дополнительно - стилистика)
    usersListItem.innerHTML = `
          <h1>Name: ${name}</h1>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Name of company: ${companyName}</p>
          <p>City name: ${city}</p>
    `;
    // с. Добавить элемент в список
    usersList.appendChild(usersListItem);
  });
  // 3* Так как список был создан в JS его необходимо добавить на страницу (например, в качестве содержимого тэга body)
  document.body.appendChild(usersList);
});
            


//дополнение
// 