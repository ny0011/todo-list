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

### 상태 관리

-   state를 모든 component에 넣을 필요는 없음.
-   부모를 통해 대화를 하는 것이 상태 관리하기 편할 것.
-   Form, TodoItemList에 상태를 추가하지 않고 두 component의 부모인 App에 state
    를 추가하자.
-   App state에 input, todos 상태에 하위 component가 사용하는 변수를 넣어서 보내
    면 됨
-   view만 하는 component와 state 관리하는 component를 분리하면 편함(redux)
    https://velopert.com/3346

1. Form 기능 구현

```
Form [기능]
텍스트 내용 바뀌면 state 업데이트
버튼이 클릭되면 새 todo 생성 후 todo list 업데이트
input에서 enter키를 누르면 버튼 클릭과 동일한 작업 진행하기

onChange={handleChange} : 텍스트 입력이 생길 때마다 호출됨.
e.target : 이벤트의 태그를 지정할 때

react state에서 배열의 원소를 추가할 때 push말고 concat을 사용하자.
push는 기존의 배열에 원소를 추가, concat는 원소가 추가된 새 배열을 생성함.
concat로 써야 나중에 최적화 할 때 좋음
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
https://jaeyeophan.github.io/2018/01/02/React-tips-for-beginners/
https://reactjs.org/docs/react-component.html#setstate
```

2. TodoItemList 기능 구현

```
객체의 값을 모두 props로 전달하기
const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );

```

3. 체크 하기/체크 풀기

```
위와 마찬가지로 배열의 값을 추가할 때 새 배열을 만들어서 값을 대입으로 직접 변경해야 함.
slice 함수로 배열을 분리해서 값을 변경할 수 있다
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

```

4. todo 제거하기

```
Array.filter 함수 사용
조건에 맞는 배열의 원소만 모아 새 배열로 만듦


```

### component 최적화

https://velopert.com/3631

-   shouldComponentUpdate

```
case1) 부모 component가 rendering되면 자식 component도 rendering됨
(값을 따로 주지 않으면 항상 true로 실행됨)
=> 부모의 특정 값이 변할 때 자식 component가 rendering되게 하고 싶을 때
자식 component에 shouldComponentUpdate() 함수 안에 조건을 걸어주자

ex) 최적화 안했을 때 : Form에 입력을 하면 TodoItemList도 함께 렌더링 됨
=> TodoItemList는 todos 배열이 변할 때 렌더링 되도록 설정하기

case2) 한 component 내에서도 변하는 것만 rendering되게 하고 싶음
ex) 최적화 안했을 때: TodoItem 배열 중 하나를 클릭하면 TodoItem 배열 전체가 렌더링 됨.
=> 한 열을 마우스 클릭했을 때 변하는 값은 checked니까 그 값이 변할 때 렌더링 되도록 설정하기

```

### React에 Express 연동하기

-   설치 필요한 모듈, webpack config 설정 밖으로 빼기

```
$ npm add express mysql babel-cli nodemon cross-env
$ npm run eject
```

-   package.json에서 실행 script 수정

```
"scripts": {
  "start": "node server/server.js",
	"server": "nodemon server/server.js"  // 수정되면 바로 server update
}

$ npm run server
```

-   JSON data가 정상인지 확인하는 곳 : https://jsonlint.com/
