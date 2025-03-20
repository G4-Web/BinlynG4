document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const g4Section = document.querySelector('.g4-section');
    const binlySection = document.querySelector('.binly-section');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            g4Section.classList.remove('active');
            binlySection.classList.add('active');
        } else {
            binlySection.classList.remove('active');
            g4Section.classList.add('active');
        }
    });
});
