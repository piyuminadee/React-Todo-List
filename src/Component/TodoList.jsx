import TodoItems from "./TodoItems";
import styles from "./todoListItem.module.css";

export default function TodoList({todos, setTodos}){
    return(
        <div className={styles.modernList}>
            {todos.map((item) => (
                
           
       <TodoItems key={item} item={item}  todos={todos} setTodos = {setTodos} />
      ))}
        </div>
    );
}