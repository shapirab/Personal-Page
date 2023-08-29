let listItems = document.querySelectorAll('a');
let navBtn = document.getElementById('nav-btn');
let navItemsList = document.querySelector('.nav__content');

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

navBtn.addEventListener('click', () => {
    navItemsList.classList.toggle('hide');
});