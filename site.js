document.addEventListener('DOMContentLoaded', function () {
    const year = document.querySelectorAll('[data-year]');
    year.forEach(function (item) { item.textContent = new Date().getFullYear(); });
});
