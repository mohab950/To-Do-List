let tasks = [];

function render() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button class="btn-edit" onclick="editTask(${task.id})">تعديل</button>
        <button class="btn-del"  onclick="deleteTask(${task.id})">حذف</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now(), text });
  input.value = '';
  render();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt('عدّل المهمة:', task.text);
  if (newText && newText.trim()) {
    task.text = newText.trim();
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  render();
}

document.getElementById('taskInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});