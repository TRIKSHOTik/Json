// Задание 1
// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// let obj = {name:'aa'};
// let a = JSON.stringify(obj);
// let ab = JSON.parse(a);
// console.log(ab);

// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

// let user = obj;
// localStorage.user;
// newUser = localStorage.user;
// console.log(newUser);

// Задание 2

// 1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';

// 2) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.
// Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.
// Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.


// let tasks = [];
// if(localStorage.tasks){
//     tasks = JSON.parse(localStorage.tasks);
// }

// tasks.forEach((task) => {
//     let li  = document.createElement('li')
//     li.innerText = task;
//     let ul = document.querySelector("ul");
//     ul.appendChild(li)
// });
// let textInput = document.querySelector("input");
// let form = document.querySelector("form");
// let btn = document.querySelector('button');
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     tasks.push(textInput.value)
//     localStorage.tasks = JSON.stringify(tasks)
//     let ul = document.querySelector("ul");
//     let li = document.createElement("li");
//     li.textContent = textInput.value;
//     textInput.value = "";
//     ul.appendChild(li);
// })
// btn.addEventListener("click", () => {
//     let li = document.querySelectorAll('li');
//     li.forEach((li)=>{
//         li.style.textDecoration = 'line-through';
//     })
// })


// Задание 3

// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
let need;

if(localStorage.need){

    need = JSON.parse(localStorage.need);
}
document.body.style.backgroundImage = `url(${need})`;
const img  = [] = document.querySelectorAll('img');
img.forEach((item)=>{
    item.addEventListener("click", (event) => {
        img.forEach((item)=>{
            if(item == event.target){
                item.classList.add('active');
                need = item.getAttribute('src');
                console.log(need);
                localStorage.need = JSON.stringify(need);
                console.log(localStorage.need);
                document.body.style.backgroundImage = `url(${need})`;
            }else{
                item.classList.remove('active');

            }
        })
    })
})

