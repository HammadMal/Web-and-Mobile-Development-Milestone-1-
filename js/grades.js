// Selecting the SGPA and CGPA elements
const sgpaBox = document.getElementById('sgpa-box');
const cgpaBox = document.getElementById('cgpa-box');
const sgpaText = document.getElementById('sgpa-text');
const cgpaText = document.getElementById('cgpa-text');

// Variables to track the current state (whether showing GPA or label)
let sgpaShowingNumber = false;
let cgpaShowingNumber = false;
let colorGradingMode = false; // Initialize colorGradingMode

// Function to handle hover colors based on GPA value
function handleHoverColor(box, gpaText) {
    const gpa = parseFloat(gpaText);
    console.log(`Handling hover color for GPA: ${gpa}`);
    if (gpa >= 3.2 && gpa <= 4.0) {
        box.style.backgroundColor = 'green'; // Green for 3.2-4.0
    } else if (gpa >= 2.8 && gpa < 3.2) {
        box.style.backgroundColor = 'yellow'; // Yellow for 2.8-3.2
    } else {
        box.style.backgroundColor = 'red'; // Red for below 2.8
    }
}

// SGPA click event with toggle behavior
sgpaBox.addEventListener('click', function () {
    console.log('SGPA box clicked.');
    if (sgpaShowingNumber) {
        sgpaText.textContent = 'SGPA'; // Revert to SGPA label
        sgpaBox.classList.remove('gpa-number-hover'); // Revert hover color
    } else {
        sgpaText.textContent = '3.2'; // Display SGPA as 3.2
        sgpaBox.classList.add('gpa-number-hover');
    }
    sgpaShowingNumber = !sgpaShowingNumber; // Toggle the state
});

// CGPA click event with toggle behavior
cgpaBox.addEventListener('click', function () {
    console.log('CGPA box clicked.');
    if (cgpaShowingNumber) {
        cgpaText.textContent = 'CGPA'; // Revert to CGPA label
        cgpaBox.classList.remove('gpa-number-hover'); // Revert hover color
    } else {
        cgpaText.textContent = '2.8'; // Display CGPA as 2.8
        cgpaBox.classList.add('gpa-number-hover');
    }
    cgpaShowingNumber = !cgpaShowingNumber; // Toggle the state
});

// Hover effects for SGPA
sgpaBox.addEventListener('mouseenter', function () {
    console.log('SGPA box mouse enter.');
    if (sgpaShowingNumber) {
        handleHoverColor(sgpaBox, sgpaText.textContent);
    } else {
        sgpaBox.style.backgroundColor = 'black'; // Black when showing SGPA
    }
});

sgpaBox.addEventListener('mouseleave', function () {
    console.log('SGPA box mouse leave.');
    sgpaBox.style.backgroundColor = ''; // Reset background color
});

// Hover effects for CGPA
cgpaBox.addEventListener('mouseenter', function () {
    console.log('CGPA box mouse enter.');
    if (cgpaShowingNumber) {
        handleHoverColor(cgpaBox, cgpaText.textContent);
    } else {
        cgpaBox.style.backgroundColor = 'black'; // Black when showing CGPA
    }
});

cgpaBox.addEventListener('mouseleave', function () {
    console.log('CGPA box mouse leave.');
    cgpaBox.style.backgroundColor = ''; // Reset background color
});

// What If button functionality
let editingMode = false;
let originalGrades = [];

document.getElementById('whatIfBtn').addEventListener('click', function () {
    const gradeCells = document.querySelectorAll('td[contenteditable="true"], td[contenteditable="false"]');

    if (editingMode) {
        console.log('Reverting to original grades.');
        // Revert to original grades
        gradeCells.forEach((cell, index) => {
            cell.innerText = originalGrades[index]; // Reset the grade
            cell.setAttribute('contenteditable', 'false'); // Disable editing
            cell.style.backgroundColor = ''; // Reset background color
            cell.style.border = ''; // Reset border style
        });
        editingMode = false;
        this.innerText = 'What If'; // Reset button text
    } else {
        console.log('Enabling grade editing.');
        // Store original grades
        originalGrades = Array.from(gradeCells).map(cell => cell.innerText);

        // Enable editing
        gradeCells.forEach(cell => {
            cell.setAttribute('contenteditable', 'true');
            cell.style.backgroundColor = '#fffbcc'; // Light yellow background for editing
            cell.style.border = '1px dashed #000'; // Dashed border for visual cue
        });
        editingMode = true;
        this.innerText = 'Revert'; // Change button text to "Revert"
    }
});

// Colour-Grade button functionality
document.getElementById('colorGradeBtn').addEventListener('click', function () {
    const rows = document.querySelectorAll('table tbody tr');

    if (colorGradingMode) {
        // Revert the rows to their original colors (white)
        rows.forEach(row => {
            row.querySelectorAll('td').forEach(cell => {
                cell.style.backgroundColor = ''; // Reset background color for each cell
            });
        });
        colorGradingMode = false;
        this.innerText = 'Colour-Grade'; // Reset button text
    } else {
        // Apply color grading to each cell
        rows.forEach(row => {
            const gradeCell = row.querySelector('td:last-child'); // Get the grade cell
            const grade = gradeCell.innerText.trim().toUpperCase(); // Get the grade text

            // Color-code based on grade
            let color;
            if (["A", "A-", "B+"].includes(grade)) {
                color = 'green'; // Green for high grades
            } else if (["B", "B-", "C+"].includes(grade)) {
                color = 'yellow'; // Yellow for medium grades
            } else {
                color = 'red'; // Red for low grades
            }

            // Apply the color to all cells in the row
            row.querySelectorAll('td').forEach(cell => {
                cell.style.backgroundColor = color;
            });
        });
        colorGradingMode = true;
        this.innerText = 'Revert Colours'; // Change button text
    }
});
