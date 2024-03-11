const checkbox = document.getElementById('checkbox');

checkbox.oddEventListener('change', () => {
    document.body.classList.toggle('dark');
});