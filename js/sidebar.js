document.getElementById('check').addEventListener('change', function() {
    document.querySelector('.sidebar').style.left = this.checked ? '0' : '-250px';
    document.querySelector('section').style.marginLeft = this.checked ? '250px' : '0';
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
