document.getElementById('add-btn').addEventListener('click', addtask);

document.getElementById('new-task').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addtask()
    }
});

function addtask() {
    const taskinput = document.getElementById('new-task');
    const tasktext = taskinput.value.trim();

    if (tasktext === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
    <span>${tasktext}</span>
    <div>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    </div>`;

    document.getElementById('task-list').appendChild(li);

    li.querySelector('.delete').addEventListener('click', () => deletetask(li));
    li.querySelector('.edit').addEventListener('click', () => editTask(li));


    taskinput.value = ''
}


function deletetask(removetask) {
    removetask.remove();
}

function editTask(edittask) {
    const taskspan = edittask.querySelector('span');
    const edited = prompt("Edit the Task:");
    
    if (edited === '') return;

    taskspan.textContent = edited
}