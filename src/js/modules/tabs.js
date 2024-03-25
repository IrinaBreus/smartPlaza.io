const tabs = () => {
    const tabLists = document.querySelectorAll('.offices__tab-list'),
          tabContents = document.querySelectorAll('.offices__tab-content');

    tabLists.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            clearList();
            btn.classList.add('list-active');
            tabContents[i].classList.add('tab-content_active');
        })
    })

    function clearList() {
        tabLists.forEach(elem => elem.classList.remove('list-active'));
        tabContents.forEach(elem => elem.classList.remove('tab-content_active'))
    }
}

export default tabs;