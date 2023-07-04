import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasks';

const AddTodo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTask({id: Date.now(), name: value, status: false}));
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
