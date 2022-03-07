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
