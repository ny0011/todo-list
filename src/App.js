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

	render() {
		const { todos, input } = this.state;
		const { handleChange, handleCreate, handleKeyPress } = this;
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
				<TodoItemList todos={todos} />
			</TodoListTemplate>
		);
	}
}

export default App;
