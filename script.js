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
    <input type="checkbox" id="done">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    </div>`;

    document.getElementById('task-list').appendChild(li);

    li.querySelector('.delete').addEventListener('click', () => deletetask(li));
    li.querySelector('.edit').addEventListener('click', () => editTask(li));
    li.querySelector('#done').addEventListener('click', () => donetask(li));


    taskinput.value = ''
}


function deletetask(removetask) {
    removetask.remove();
}

function editTask(edittask) {
    const taskspan = edittask.querySelector('span');
    const edit = document.createElement('input');
    edit.type = 'text'
    edit.id = 'edited'
    edit.placeholder = 'Edit Task...'
    taskspan.replaceWith(edit);

    edit.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const newtaskspan = document.createElement('span');
            if (edit.value === '') {
                edit.replaceWith(taskspan);
            }
            else {
                newtaskspan.textContent = edit.value;
                edit.replaceWith(newtaskspan);
            }
        }
    });


    edit.focus();


}

function donetask(doneTask) {
    const donetaskspan = doneTask.querySelector('span');
    const checkbox = document.getElementById('done');
    if (checkbox.checked) {
        donetaskspan.id = 'tick'
    }
    else{
        donetaskspan.id = ''
    }
}
