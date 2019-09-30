import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
	render() {
		//const { todos, ontoggle, onRemove } = this.prop;
		return (
			<div>
				<TodoItem text="ㅎㅎ"></TodoItem>
				<TodoItem text="ㅇㅇ"></TodoItem>
				<TodoItem text="ㄴㄴ"></TodoItem>
			</div>
		);
	}
}

export default TodoItemList;
