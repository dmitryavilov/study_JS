'use strict';


class ToDo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }

    addToStorage() {
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }
    
    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem);
        this.addToStorage();
    }

    createItem = todo => {
        const li = document.createElement('li');

        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
            <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `);

        if (todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();

        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey()
            };

            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else {
            alert('Введите что-нибудь .!.');
        }
    }

    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    completeItem(elem) {
        this.todoData.forEach(item => {
            if (item.key === elem) {
                item.completed = true;
            }
        });

        this.render();
    }

    deleteItem(elem) {
        this.todoData.delete(elem);
        this.render();
    }

    handler() {
        const container = document.querySelector('.todo-container');

        container.addEventListener('click', e => {
            if (e.target.matches('.todo-remove')) {
                 this.deleteItem(e.target.closest('.todo-item').key);
            } else if (e.target.matches('.todo-complete')) {
                this.completeItem(e.target.closest('.todo-item').key);
            }
        });
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.handler();
        this.render();
    }

    //END
};

const todolist = new ToDo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todolist.init();
