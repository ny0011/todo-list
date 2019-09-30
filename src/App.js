import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate.js";
import Form from "./Form.js";
import TodoItemList from "./TodoItemList";

class App extends Component {
	state = {
		input: "",
		todos: [
			{ id: 1, text: "ㅎㅎ", checked: false },
			{ id: 2, text: "ㅇㅇ", checked: true },
			{ id: 3, text: "ㄴㄴ", checked: false }
		]
	};
	id = 0;

	render() {
		const { todos } = this.state;
		return (
			<TodoListTemplate form={<Form />}>
				<TodoItemList todos={todos} />
			</TodoListTemplate>
		);
	}
}

export default App;
