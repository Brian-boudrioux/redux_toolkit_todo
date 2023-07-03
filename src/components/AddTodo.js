import React, { useState } from 'react';

const AddTodo = () => {
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		

		setValue("");
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddTodo;
