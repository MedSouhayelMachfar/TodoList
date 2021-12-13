import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./../recoil/atoms";

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // Return a setter function to update the state without subscription
  // Avoid using useRecoilState that return [state, setState] that subscribe
  // And get the updated state when it's not needed
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue === "") {
      console.log("Item must have a value");
    } else {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    }
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
