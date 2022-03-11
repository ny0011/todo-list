# React Masterclass -2

Create ToDo List

## React Hook Form

```
Performant, flexible and extensible forms with easy-to-use validation.
```

- https://react-hook-form.com/
- 쉽게 유효성을 확인하는 라이브러리
- useForm()에서 사용할 함수와 변수
  - register : onChange 함수를 대체 가능
  - handleSubmit : onSubmit 함수를 대체 가능
  - formState : error가 발생한 input의 값과 상태, 메시지를 확인할 수 있는 변수
  - setError : error를 발생시키고 싶을 때 사용
  - setValue : input 값을 변경하고 싶을 때 사용

## Recoil with typescript

- 아래처럼 생성할 atom을 등록할 때 typescript에서는 toDos의 타입이 never로 나옴
  - toDos의 타입을 위한 interface를 새로 생성해주기

```
const [toDos, setToDos] = useRecoilState(toDoState);
```

- button을 클릭했을 때 다른 버튼인 지 인식하는 방법

  - case 1. onClick에 argument를 넘기기. argument로 버튼 식별 가능
  - case 2. button에 name 속성을 지정하기

- state 변경할 때 새로 값을 생성해서 setState에 설정해야 함

  - 1. 클릭한 버튼이 있는 todo를 찾는다
  - 2. todo의 category를 원하는 값으로 바꾼 새 todo를 만든다
  - 3. 새로운 todos를 만들어 찾았던 todo가 있던 위치에 새 todo를 넣는다
  - or 새 todo를 만들고 map함수를 써서 찾고 있는 id에 해당하는 위치에만 새 todo를 넣는다

  ```
    const newToDo = { text, id, category: name as IToDo["category"] };
      return oldToDos.map((todo) => (todo.id === id ? newToDo : todo));
  ```

- `selectors`

  - atom의 output을 변형하는 도구
  - 기존 atom의 구조를 변경해서 원하는 모습으로 데이터를 리턴할 수 있게 조작
  - get 함수 : atom의 값을 변형해서 값을 리턴
  - set 함수 : atom의 값을 바꾸고 싶을 때 파라미터로 온 값을 변형해서 atom의 값을 변경

- (1) category 별로 데이터를 분리하기
  - categoryState 생성 : 사용자가 category를 변경하면 감지하는 state
  - toDoSelector 생성 : 선택한 category가 있는 todo만 배열을 생성해서 리턴
- (2) category 별로 데이터를 보여주기

  - select 태그를 사용해 사용자가 to_do, doing, done을 선택하게 함
  - 이 상태가 변경될 때 category state도 변경되게 category atom 추가
  - 선택한 category만 렌더링하게 toDoSelector에서 배열 받아옴

- `enum`
  - 값을 그대로 사용하면 오타 등 실수가 생길 수 있으니 방지하기 위한 타입
  - 값을 따로 지정하지 않으면 차례대로 0, 1, 2 등 숫자가 할당됨

## React Beautiful DnD

- https://github.com/atlassian/react-beautiful-dnd
- 드래그 앤 드롭을 react로 예쁘게 보여주는 라이브러리

1. setup

- \<DragDropContext>, \<Droppable>, \<Draggable>을 만들기
- DragDropContext : DnD를 할 수 있는 영역
- Droppable : 드롭할 수 있는 영역
- Draggable : 드래그를 할 수 있는 영역

2. 각 태그의 props를 채워서 사용하기

- 아래의 props를 사용해 children 태그의 프로퍼티를 채우면 움직인다!
- `ref`?
  - HTML element를 지정하고 가져올 수 있는 방법
  - React에서는 useRef()를 사용해 HTML element를 가져올 수 있다
- Droppable
  - 첫번째 props(DroppableProvided)에 있는 내용
    - ref={props.innerRef}
    - {...props.droppableProps}
    - props.placeholder를 board 끝에 두면 Draggable 태그가 움직일 때 Droppable 영역이 변하지 않는다
  - 두번째 props(DroppableStateSnapshot)에 있는 내용
    - isDraggingOver : droppable 내부에 드래그 되었는가?
    - draggingFromThisWith : 이 droppable에서 draggable이 나갔음을 알려줌. droppable 밖으로 나갈 때 이 값이 생김. 값은 draggableId.
- Draggable
  - 첫번째 props : DraggableProvided
    - ref={props.innerRef}
    - {...props.draggableProps}
    - {...props.dragHandleProps}
  - 두번째 props : DraggableStateSnapshot
    - isDragging : 드래깅 중인가?

1. dnd를 했을 때 변경이 반영되도록 onDragEnd에서 todo state를 수정하기

- 수정 방법
  - (1) drag한 item이 있는 곳을 삭제
  - (2) drop할 곳에 item을 추가
- 수정은 되었지만 card 전부 rendering되어 default -> 변경된 state로 다시 보여줌
  - 매끄럽지 않은 변경
  - console.log로 DraggableCard의 렌더링을 찍어보면 엄청 많음
    - React는 부모의 state가 변경되면 자식의 state도 변경하기 때문
    - 그렇지만 지금의 경우는 자식의 일부만 변경되길 원함
      - 움직이는 item만 변경하기
    - `react memo`를 사용하자!
      - props가 변할 때만 컴포넌트를 렌더링하기
      - DraggableCard를 export할 때 React.memo(DraggableCard)로 해주면 끝

4. board를 3개 만들고 board 간 dnd도 되게 해보자

- (1) board를 3개 만들기
  - atom의 데이터 구조도 변경하기
- (2) board 간 dnd 해보기
  - onDragEnd의 props인 info를 확인해보면 아래 내용을 받는 걸 알 수 있다
    ```
      destination: {droppableId: 'Doing', index: 2},
      draggableId: "d"
      source:{index: 1, droppableId: 'To Do'}
    ```
    - (1) 같은 board 내에서 위치를 변경할 때(board 1개만 변경됨)
      - (0) board 1개의 데이터를 가져옴
      - (1) source에 있는 draggableId를 지운다
      - (2) destination의 위치로 draggableId를 추가한다
    - (2) 다른 board로 위치를 변경할 때(board 2개가 변경됨)
      - (1) source board, destination board 2개의 데이터를 가져옴
      - 나머지는 똑같음
  - CSS 변경 필요 -> 위치를 변경할 때 맨 위로 가야 움직이는 현상과 위치가 변경될 때 배경색 바꾸고 싶음
    - (1) 타이틀 밑의 어느 공간에 드래그해도 위치 변경 가능하게 하기
      - CSS에서 flex-grow:1로 설정
        - 값의 의미: flex-container 내부에서 flex-item이 할당 받은 공간의 크기
        - https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow
    - (2) 위치가 변경될 때
      - Droppable과 Draggable의 두번째 props을 사용해서 CSS 변경

5. todo의 데이터에 여러 개의 데이터를 저장하기!

- todo에 id, text key를 추가
- todo의 데이터 타입이 string -> object로 변경되어 코드를 수정해야 함

## Typescript

- typescript에 아래처럼 지정해둬야 default 안에 있는 key외에 다른 key가 추가될 때 오류내지 않음
  - default 안의 key 외에 다른 string 값이 올 수 있음

```
interface IToDoState {
  [key: string]: string[];
}
```
