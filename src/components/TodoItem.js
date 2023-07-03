import React from 'react';

const TodoItem = ({ id, title }) => {

	const removeTask = () => {

	}

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={removeTask}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
