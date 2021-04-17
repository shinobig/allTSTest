import React, { useRef } from 'react';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

  const inputText = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputText.current!.value;
    props.onAddTodo(enteredText)
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">To do Text</label>
        <input type="text" id="todo-text" ref={inputText} />
      </div>
      <button type="submit">ADD TO DO</button>
    </form>
  )
}


export default NewTodo;