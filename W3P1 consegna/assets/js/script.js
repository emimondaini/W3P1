document.addEventListener('DOMContentLoaded', function () {
    var avatar = document.getElementById('avatar');
    var dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');

    var options = ['Opzione 1', 'Opzione 2', 'Opzione 3'];
    options.forEach(function(optionText) {
        var optionLink = document.createElement('a');
        optionLink.href = '#';
        optionLink.textContent = optionText;
        dropdownContent.appendChild(optionLink);
    });

    avatar.parentNode.appendChild(dropdownContent);

    avatar.addEventListener('click', function (event) {
        event.stopPropagation();
        var isActive = dropdownContent.style.display === 'block';

        if (!isActive) {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });

    document.addEventListener('click', function () {
        dropdownContent.style.display = 'none';
    });
});