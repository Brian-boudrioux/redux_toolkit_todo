import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/tasks';

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const deleteTask = () => {
		dispatch(removeTask(id));
	}

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={deleteTask}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
