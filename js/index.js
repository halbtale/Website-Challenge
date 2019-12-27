function textWrite(text) {
    const content = document.querySelector('.content');
    content.insertAdjacentHTML('afterbegin', `<p class="content__paragraph">${text}</p>`);
}
