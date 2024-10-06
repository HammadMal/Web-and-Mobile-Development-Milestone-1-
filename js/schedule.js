document.getElementById("mon-9am").innerHTML = '<div class="course-block green">CS 101 - Introduction to Programming</div>';
document.getElementById("thu-9am").innerHTML = '<div class="course-block green">CS 101 - Introduction to Programming</div>';

document.getElementById("tue-9am").innerHTML = '<div class="course-block yellow">CS 201 - Data Structures</div>';
document.getElementById("wed-10am").innerHTML = '<div class="course-block yellow">CS 201 - Data Structures</div>';

document.getElementById("wed-11am").innerHTML = '<div class="course-block red">CS 301 - Operating Systems</div>';
document.getElementById("fri-10am").innerHTML = '<div class="course-block red">CS 301 - Operating Systems</div>';

document.getElementById("thu-9am").innerHTML = '<div class="course-block green">CS 101 - Web Development</div>';
document.getElementById("thu-10am").innerHTML = '<div class="course-block green">CS 101 - Web Development</div>';
document.getElementById("thu-11am").innerHTML = '<div class="course-block green">CS 101 - Web Development</div>'; // 3-hour session

document.getElementById("fri-2pm").innerHTML = '<div class="course-block cyan">CS 202 - DBMS</div>';
document.getElementById("tue-1pm").innerHTML = '<div class="course-block cyan">CS 202 - DBMS</div>';

document.getElementById("mon-1pm").innerHTML = '<div class="course-block orange">CS 401 - Advanced Algorithms</div>';
document.getElementById("tue-2pm").innerHTML = '<div class="course-block orange">CS 401 - Advanced Algorithms</div>';


// Function to toggle military time
function toggleMilitaryTime() {
    const timeLabels = document.querySelectorAll('.grid-item'); // Select all grid items
    timeLabels.forEach(label => {
        if (label.textContent.match(/^\d{1,2}:\d{2}\s(AM|PM)$/)) { // Match only time labels
            label.textContent = convertToMilitary(label.textContent);
        } else if (label.textContent.match(/^\d{1,2}:\d{2}$/)) { // Match military time
            label.textContent = convertToStandard(label.textContent);
        }
    });
}

// Convert standard time to military time
function convertToMilitary(time) {
    let [hours, modifier] = time.split(':');
    let minutes = modifier.slice(0, 2);
    let ampm = modifier.slice(3);

    hours = parseInt(hours, 10);
    if (ampm === 'PM' && hours !== 12) {
        hours += 12;
    } else if (ampm === 'AM' && hours === 12) {
        hours = 0;
    }

    return `${hours}:${minutes}`;
}

// Convert military time to standard time
function convertToStandard(time) {
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10);
    let ampm = 'AM';
    if (hours >= 12) {
        ampm = 'PM';
        hours -= hours > 12 ? 12 : 0;
    } else if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes} ${ampm}`;
}

// Function to toggle display of absences
function toggleAbsences() {
    const courses = document.querySelectorAll('.course-block');
    courses.forEach(course => {
        let absencesLabel = course.querySelector('.absences');
        if (absencesLabel) {
            absencesLabel.classList.toggle('hidden');
        } else {
            let absences = Math.floor(Math.random() * 5); // Generate random absences
            absencesLabel = document.createElement('div');
            absencesLabel.className = 'absences';
            absencesLabel.textContent = `Absences: ${absences}`;
            course.appendChild(absencesLabel);
        }
    });
}

document.getElementById('toggle-time').addEventListener('click', toggleMilitaryTime);
document.getElementById('show-absences').addEventListener('click', toggleAbsences);
