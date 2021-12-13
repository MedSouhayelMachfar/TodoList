import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./../recoil/selectors";

// Components
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <h1>recoil Experiment</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <ul>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
