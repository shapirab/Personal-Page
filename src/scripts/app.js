let listItems = document.querySelectorAll('a');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        item.classList.add('active');
        console.log(listItems);
    });
});