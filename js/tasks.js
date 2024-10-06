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
        // Create a new div for each task group
        const taskGroup = document.createElement('div');
        taskGroup.className = 'task-group';

        // Create header for the course
        const header = document.createElement('div');
        header.className = `task-header ${colors[index % colors.length]}`;
        header.textContent = course.courseName;

        // Add header to the task group
        taskGroup.appendChild(header);

        // Add tasks to the group or show 'No tasks' message
        if (course.tasks.length > 0) {
            course.tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <span class="task-name">${task.name}</span>
                    <span class="due-date">${task.dueDate}</span>
                `;
                taskGroup.appendChild(taskItem);
            });
        } else {
            const noTasks = document.createElement('div');
            noTasks.className = 'task-item no-tasks';
            noTasks.textContent = 'No tasks assigned';
            taskGroup.appendChild(noTasks);
        }

        // Append each task group to the container
        container.appendChild(taskGroup);
    });
});
    