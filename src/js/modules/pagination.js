function pagination(SelectorWrapper, SelectorPage, SelectorActive) {
    const pagination = document.querySelector(SelectorWrapper);
    const paginationLink = document.querySelectorAll(SelectorPage);

    let page = 0;

    const removeClassPagination = () => {
        paginationLink.forEach(item => {
            item.classList.remove(SelectorActive);
        })
    };

    const addClassPagination = (page = 0) => {
        paginationLink[page].classList.add(SelectorActive);
    };

    const togglePagination = () => {
        pagination.addEventListener('click', (event) => {
            if (event.target) {
                paginationLink.forEach((item, page) => {
                    if (event.target == item || event.target.parentNode == item) {
                        removeClassPagination();
                        addClassPagination(page);
                    }
                })
            }
        })
    };

    const arrowPagination = () => {
        const arrowRight = document.createElement('span');
        arrowRight.className = 'pagination__page pagination__page_arrow-right icon-right';
        arrowRight.id = 'arrow-right';
        pagination.append(arrowRight);

        pagination.addEventListener('click', (event) => {
            if (event.target.textContent < 13) {
                pagination.append(arrowRight);
            }
            if (event.target.textContent >= 13) {
                arrowRight.remove();
            }
        })
    };

    const hidePages = () => {
        const pageThree = document.querySelector('.pagination__page_2');
        const threePoints = document.createElement('li');
        threePoints.className = 'pagination__page pagination__page_three-points';
        threePoints.textContent = '...';
        pageThree.after(threePoints);
    };

    const counterPages = () => {
        const arrowRight = document.getElementById('arrow-right');
        arrowRight.addEventListener('click', () => {
            if (page < 3) {
                removeClassPagination();
                addClassPagination(++page)
            } else {
                removeClassPagination();
                addClassPagination(page = 0)
            }
        })
    };

    addClassPagination();
    togglePagination();
    arrowPagination();
    hidePages();
    counterPages();
}

export default pagination;