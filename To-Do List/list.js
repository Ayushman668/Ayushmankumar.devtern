const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addBtn = document.getElementById('add-btn');

// Add event listener for both button click and Enter key press
newTodoInput.addEventListener('keydown', function(event) {
  const newTodo = newTodoInput.value.trim();
  if (newTodo && event.keyCode === 13) {  // Check for Enter key (keyCode 13)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${newTodo}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(listItem);
    newTodoInput.value = '';
  }
});

addBtn.addEventListener('click', function() { // Existing button click functionality
  const newTodo = newTodoInput.value.trim();
  if (newTodo) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${newTodo}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(listItem);
    newTodoInput.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    todoList.removeChild(listItem);
  }
});