import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate.js";
import Form from "./Form.js";
import TodoItemList from "./TodoItemList";

class App extends Component {
	render() {
		return (
			<TodoListTemplate form={<Form />}>
				<TodoItemList />
			</TodoListTemplate>
		);
	}
}

export default App;
