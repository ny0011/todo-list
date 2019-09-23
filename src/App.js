import React, { Component } from "react";
import TodoListTemplate from "./TodoListTemplate.js";
import Form from "./Form.js";

class App extends Component {
	render() {
		return <TodoListTemplate form={<Form />}>템플릿 완성</TodoListTemplate>;
	}
}

export default App;
