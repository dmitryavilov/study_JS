'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

let todoData = [];

const getElemsFromLocalStorage = () => {
    let res = JSON.parse(localStorage.getItem('data'));
    if (localStorage.length >= 1) {
        for (let i = 0; i < res.length; i++) {
            todoData.push(res[i]);
        }
    }
};

const render = () => {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item, i) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            <span class="text-todo">${item.value}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `;
        todoList.append(li);

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector('.todo-complete'),
              btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
            const itemsJSON = JSON.stringify(todoData);
            localStorage.setItem('data', itemsJSON);
        });
        
        btnTodoRemove.addEventListener('click', function() {
            // if (localStorage.length > 1) {
            //     todoData.splice(key, key);
            // } else {
            //     todoData.splice(key);
            // }
            // todoData.splice(i, i+1);
            delete todoData[i];
            todoData = todoData.filter(function(x) {
                return x !== null; 
            });

            render();
            li.style.display = 'none';
            const itemsJSON = JSON.stringify(todoData);
            localStorage.setItem('data', itemsJSON);
        });
    });
};

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    if (headerInput.value !== '') {
        const newTodo = {
            value: headerInput.value,
            completed: false
        };

        todoData.push(newTodo);

        const itemsJSON = JSON.stringify(todoData);
        headerInput.value = '';
        render();
        localStorage.setItem('data', itemsJSON);
    } else {
        alert('Пожалуйста, заполните поле ввода!');
    }
});

getElemsFromLocalStorage();
render();