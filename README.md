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
 - 화면 구성 : [ (체크)) (할 일) (삭제)]
 - TodoItem을 클릭하면 체크박스 true, 중간 줄 그어짐
 - TodoItem위에 마우스가 있으면 X 버튼을 보여줌
 - X버튼을 누르면 TodoItem이 삭제됨

 [변수]
 - text: todo 내용
 - checked: 체크박스 상태
 - id: todo 고유 아이디
 - onToggle: 체크박스 true/false 바꾸는 함수
 - onRemove: todo를 삭제하는 함수

❓ e.stopPropagation() 을 사용하는 이유?
 https://programmingsummaries.tistory.com/313
 x버튼을 누를 때 x버튼의 onClick 이벤트 뿐만 아니라 부모인 todo-item의 onClick이벤트도 실행됨.
 -> e.stopPropagation()은 부모에게 이벤트 전달이 되지 않도록 막음.

❓ ${checked ? 'checked': ''}
checked값이 true면 클래스 이름을 'checked', false면 추가하지 않음
-> 좀더 쉬운 방법 : classnames 라이브러리를 사용해보자
https://github.com/JedWatson/classnames
https://velog.io/@velopert/react-component-styling

```
