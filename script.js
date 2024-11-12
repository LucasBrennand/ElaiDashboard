function toggleDropdown() {
    const dropdownList = document.getElementById('dropdown-list');
    if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
        dropdownList.style.display = 'block';
    } else {
        dropdownList.style.display = 'none';
    }
}

document.querySelectorAll('#dropdown-list li').forEach(item => {
    item.addEventListener('click', function() {
        const valName = document.querySelector('.val-name');
        valName.textContent = this.textContent;
        toggleDropdown(); // Fechar o dropdown após selecionar um item
    });
});