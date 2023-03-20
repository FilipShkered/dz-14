const input = document.querySelector('#msgInput');
const btn = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');

btn.addEventListener('click', onBtnClick);
ul.addEventListener('click', onUlClick);

function onBtnClick() {
  const todo = getData()

  if (!isTodoValid(todo)) {
    showError()
    return
  }

  writeTodo(todo)

  clear()
};


function getData() {
  return {
    message: input.value
  }
}

function onUlClick(e) {
  const target = e.target
  const todoEl = findElem(target)

  if (isDeleteBtn(target)) {
    deltodoElem(todoEl)
    return;
  }

  todoDone(todoEl)
}

function isDeleteBtn(el) {
  return el.classList.contains('deleteBtn')
}

function findElem(el) {
  return el.closest('.todoItem')
}

function deltodoElem(el) {
  el.remove()
}

function todoDone(el) {
  el.classList.toggle('done')
}
function isTodoValid(todo) {
  return todo.message !== ''
}

function showError() {
  alert('Поле не может быть пустым')
}

function writeTodo(todo) {

  const html = genTodoHtml(todo)

  ul.insertAdjacentHTML('beforeend', html)
  // const li = document.createElement('li')
  // const span = document.createElement('span')
  // span.textContent = todo.message

  // const editBnt = document.createElement('button')
  // editBnt.textContent = '[Edit]'

  // const deleteBtn = document.createElement('button')
  // deleteBtn.textContent = '[Delete]'

  // li.append(span)
  
  // li.append(deleteBtn)

  // ul.append(li)
}

function genTodoHtml(todo) {
  return `
  <li class=todoItem>
  <span>${todo.message}</span>
  <button class="deleteBtn">Delete</button>
  </li>`
}

function clear() {
  input.value = ''
}