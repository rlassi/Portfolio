import React, { useEffect } from 'react';

import BackToFolio from './BackToFolio';

import { saveTodos, createTodo, getTodos } from '../apps/Todos/todos'
import { setFilters } from '../apps/Todos/filters'
import { renderTodos } from '../apps/Todos/views'

import todoStyles from '../styles/TodoApp.module.scss';

const TodoApp = () => {
    useEffect(() => {
        renderTodos()

        document.querySelector('#filter').addEventListener('input', (function (e) {
            setFilters(e.target.value)
            renderTodos()
        }))

        document.querySelector('#add-todo').addEventListener('submit', function (e) {
            const text = e.target.elements.newTodo.value.trim()
            e.preventDefault()

            createTodo(text)
            saveTodos()
            renderTodos()
            e.target.elements.newTodo.value = ''
        })

        document.querySelector('#hide-completed').addEventListener('change', function (e) {
            setFilters('', e.target.checked)
            renderTodos()
        })

        window.addEventListener('storage', ((e) => {
            if (e.key === 'todos') {
                getTodos()
                renderTodos()
            }
        }))
    });

    return (
        <div className={todoStyles.container}>
            <div className={todoStyles.header}>
                <div className={todoStyles.contentContainer}>
                    <h1 className={todoStyles.headerTitle}>To-Do App</h1>
                    <h2 className={todoStyles.headerSubtitle}>What do you need to do?</h2>
                </div>
            </div>
            <div className={todoStyles.actions}>
                <div className={todoStyles.actionsContainer}>
                    <input type="text" id="filter" placeholder="Filter todos here" className={todoStyles.input} />
                    <label className={todoStyles.checkbox}>
                        <input type="checkbox" id="hide-completed" /> Hide completed
                    </label>
                </div>
            </div>
            <div className={todoStyles.contentContainer}>
                <div id="todos"></div>
                <form id="add-todo">
                    <input className={todoStyles.input} type="text" name="newTodo" placeholder="Add new todo here" />
                    <button className={todoStyles.button}>Add Todo</button>
                </form>
            </div>
            <BackToFolio readmeLink="https://github.com/rlassi/Todo-App/blob/master/README.md" />
        </div>       
    );
};

export default TodoApp;