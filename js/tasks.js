const tasksData = [
    {
        courseName: "CS 101 - Introduction to Programming",
        tasks: [
            { name: "Complete lab exercises", dueDate: "2024-10-20", completed: false }
        ]
    },
    {
        courseName: "CS 201 - Data Structures",
        tasks: [] // No tasks
    },
    {
        courseName: "CS 301 - Operating Systems",
        tasks: [
            { name: "Read chapter on Process Management", dueDate: "2024-10-22", completed: false },
            { name: "Prepare for midterm exam", dueDate: "2024-10-30", completed: false }
        ]
    },
    {
        courseName: "CS 101 - Web Development",
        tasks: [
            { name: "Finish project proposal", dueDate: "2024-10-18", completed: false }
        ]
    },
    {
        courseName: "CS 202 - DBMS",
        tasks: [] // No tasks
    },
    {
        courseName: "CS 401 - Advanced Algorithms",
        tasks: [] // No tasks
    },
    {
        courseName: "Personal",
        tasks: [
            { name: "Gym at 5 PM", dueDate: "2024-10-25", completed: false }
        ]
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.tasks-container');
    const colors = ['green', 'yellow', 'red', 'cyan', 'orange']; // List of color classes

    tasksData.forEach((course, index) => {
        const header = document.createElement('div');
        header.className = `task-header ${colors[index % colors.length]}`; // Cyclic color assignment
        header.textContent = course.courseName;
        container.appendChild(header);

        if (course.tasks.length > 0) {
            course.tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <input type="checkbox" class="completed-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="task-name">${task.name}</span>
                    <span class="due-date">${task.dueDate}</span>
                `;
                container.appendChild(taskItem);

                const checkbox = taskItem.querySelector('.completed-checkbox');
                checkbox.addEventListener('change', function() {
                    taskItem.style.backgroundColor = this.checked ? 'lightgreen' : '#ffcccc'; // Light red for unchecked
                });
            });
        } else {
            const noTasks = document.createElement('div');
            noTasks.className = 'task-item no-tasks';
            noTasks.textContent = 'No tasks assigned';
            container.appendChild(noTasks);
        }
    });
});


