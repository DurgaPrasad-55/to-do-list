document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = text;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Trigger animation
        setTimeout(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateX(0)';
        }, 10);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        });

        deleteBtn.addEventListener('click', function() {
            li.classList.add('deleting');
            setTimeout(() => {
                if (li.parentNode) {
                    taskList.removeChild(li);
                }
            }, 300);
        });
    }
});