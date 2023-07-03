import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = []

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;
