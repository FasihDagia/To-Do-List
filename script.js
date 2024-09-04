document.getElementById('add-btn').addEventListener('click', addtask);

document.getElementById('new-task').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addtask()
    }
});

function addtask() {
    const taskinput = document.getElementById('new-task');
    const tasktext = taskinput.value.trim();

    if(tasktext === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
    <span>${tasktext}</span>
    <div>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>`;

    document.getElementById('task-list').appendChild(li);
    
}