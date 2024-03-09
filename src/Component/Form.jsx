import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState("");
    
    function handleSubmitte(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
    return(
        <form className={styles.todoform} onSubmit={handleSubmitte}>
        <div className={styles.inputContainer}>
        <input className={styles.moderInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter Todo ITem..."
        />
        <button className={styles.modernbutton} type="submit">ADD</button>
        </div>
      </form>
    );
}