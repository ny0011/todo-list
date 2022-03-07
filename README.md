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
