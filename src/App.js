import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate.js";
import Form from "./Form.js";
import TodoItemList from "./TodoItemList";

class App extends Component {
	state = {
		input: "",
		todos: [
			{ id: 0, text: "ㅎㅎ", checked: false },
			{ id: 1, text: "ㅇㅇ", checked: true },
			{ id: 2, text: "ㄴㄴ", checked: false }
		]
	};
	id = 3;

	handleChange = e => {
		//console.log(e.target);
		this.setState({
			input: e.target.value
		});
	};

	handleCreate = () => {
		const { input, todos } = this.state;
		this.setState({
			input: "",
			todos: todos.concat({ id: this.id++, text: input, checked: false })
		});
	};

	handleKeyPress = e => {
		if (e.key === "Enter") {
			this.handleCreate();
		}
	};

	handleToggle = id => {
		console.log(id);
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index];
		const nextTodos = [...todos];
		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};
		this.setState({ todos: nextTodos });
	};

	handleRemove = id => {
		const { todos } = this.state;
		this.setState({ todos: todos.filter(todo => todo.id !== id) });
	};

	render() {
		const { todos, input } = this.state;
		const {
			handleChange,
			handleCreate,
			handleKeyPress,
			handleToggle,
			handleRemove
		} = this;
		return (
			<TodoListTemplate
				form={
					<Form
						value={input}
						onChange={handleChange}
						onCreate={handleCreate}
						onKeyPress={handleKeyPress}
					/>
				}
			>
				<TodoItemList
					todos={todos}
					onToggle={handleToggle}
					onRemove={handleRemove}
				/>
			</TodoListTemplate>
		);
	}
}

export default App;
