# todo-list

github dependency 알림 해결

```
npm update hoek
npm -D install hoek
```

비구조화 할당 :
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

```
src/TodoListTemplate.js

TodoListTemplate : {form, children} props를 파라미터로 받아서 원하는 내용으로 return

children props : <TodoListTemplate> 내부에 작성하는 값을 저장하는 곳
<TodoListTemplate form={<div> form 자리</div>}>
    <div>children 자리</div>
</TodoListTemplate>
```
