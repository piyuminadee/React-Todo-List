import styles from "./todoItem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        
         <span> {item}{""}</span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              ✖️
            </button>
          </span>
      
        <hr className={styles.line}></hr>
      </div>
    </div>
  );
}
