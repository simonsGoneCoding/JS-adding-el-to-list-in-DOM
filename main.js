const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('span');
const listItems = document.querySelectorAll('li');
const input = document.querySelector('input')

const addTask = () => {
  event.preventDefault()
  const titleTask = input.value;
  if (!titleTask) {
    return alert('no task entered')
  } else {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button>remove</button>';
    ul.appendChild(task)
    input.value = '';
    // const liItems = document.querySelectorAll('li').length;
    // taskNumber.textContent = ' ' + liItems;
    taskNumber.textContent = listItems;
  }
}


form.addEventListener('submit', addTask)