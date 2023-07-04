import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const tasks = useSelector((state) => state.tasks);

	return (
		<ul className="tasks-list">
			{tasks.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;
