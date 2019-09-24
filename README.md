# todo-list

github dependency 알림 해결

```
npm update hoek
npm -D install hoek
```

비구조화 할당 :
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

```
src
ㄴ App.js : window 전체
ㄴ TodoListTemplate.js : Todo list 전체 형식 = Form.js + TodoItemList.js
ㄴ Form.js : 사용자 키보드 입력을 받음. 버튼을 누르면 문자열을 저장.
ㄴ TodoItemList.js : TodoItem component를 담는 곳
ㄴ TodoItem.js : Form.js에서 입력받은 내용을 저장.

```

```
TodoListTemplate : {form, children} props를 파라미터로 받아서 원하는 내용으로 return

children props : <TodoListTemplate> 내부에 작성하는 값을 저장하는 곳
<TodoListTemplate form={<div> form 자리</div>}>
    <div>children 자리</div>
</TodoListTemplate>
```

```
 TodoItem
 [기능]
 - 화면 구성 : [ 삭제기능  ]
```
