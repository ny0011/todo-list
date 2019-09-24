import React, {Component} from React;
import "./TodoItem.css";

class TodoItem extends Component{
    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;
        
    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)
            }}>✖</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            <div>
                {
                    checked && (<div className="check-mark">✔</div>)
                }
            </div>
        </div>);

    }
}

export default TodoItem