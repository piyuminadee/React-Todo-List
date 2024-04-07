const todoList = [
    {
      name: "Learn Machine Learning",
      dueDate: "2022-04-07",
    },
    {
      name: "learn Javascript",
      dueDate: "2022-04-07",
    },
  ];
  rendeTodoList();
  function rendeTodoList() {
    let todoListItemHTML = "";

    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];

      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;

      const { name } = todoObject;
      const { dueDate } = todoObject;

      const html = `
        <div>
            ${name} </div><div> ${dueDate}  </div>
            <button 
            class = "js-del-btn"
            onclick="
            todoList.splice(${i}, 1);
            rendeTodoList();
            ">
                Delete</button>
            `;
      todoListItemHTML += html;
      console.log(todoListItemHTML);
    }

    document.querySelector(".js-btn-todo").innerHTML = todoListItemHTML;
  }

  function addToList() {
    const inputTodo = document.querySelector(".itemName");
    const name = inputTodo.value;
    const inputDueDate = document.querySelector(".js-due-date-input");
    const dueDate = inputDueDate.value;
    todoList.push({ name, dueDate });
    console.log(todoList);
    inputTodo.value = "";
    inputDueDate.value = "";
    rendeTodoList();
  }

  console.log(todoList);