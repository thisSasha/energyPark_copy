function initNumberGrid(wrapper, data, imgPath = '') {

    data.forEach((item, idx) => {
        let img = item?.img;
        if (!img) {
            console.log(imgPath);

            img = imgPath + (idx + 1).toString() + '.png';
        }
        const row = document.createElement('div');
        row.className = 'number-grid__row';
        row.innerHTML = `
            <div class="number-grid__preview">
                <img src="${img}" alt="" class="number-grid__img scroll">
            </div>
            <div class="number-grid__info">
                <span class="number-grid__num">${(idx + 1).toString().padStart(2, '0')}</span>
                <div class="number-grid__description section-description">
                    <p class="section-subtitle">${item.subtitle}</p>
                    <p class="section-text">${item.text}</p>
                </div>
            </div>
        `;
        wrapper.appendChild(row);
    });
}

function toggleQuestion(e) {
    const otherQuestions = e.target.closest('.questions-grid').querySelectorAll('.question');
    const question = e.target.closest('.question');
    question.classList.toggle('opened')
    if (question.classList.contains('opened')) {
        otherQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('opened');
            }
        });
    }
    setTimeout(() => {
        question.querySelector('i').classList.toggle('fa-minus')
        question.querySelector('i').classList.toggle('fa-plus')
    }, 150);
}

function initQuestionsGrid(wrapper, data) {
    data.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'question';
        row.onclick = toggleQuestion;
        row.innerHTML = `
            <div class="question__content">
                <span class="question__number">${(idx + 1).toString().padStart(2, '0')}</span>
                <span class="question__title">${item.title}</span>
                <i class="fas fa-plus"></i>
            </div>
            <div class="question__description section-description">
                <p class="section-text">
                    ${item.answer}
                </p>
            </div>
    `;
        wrapper.appendChild(row);
    });
}

function initPersons(wrapper, data) {
    data.forEach(person => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide person';
        slide.innerHTML = `
            <img src="${person.img}" alt="" class="person__img">
            <div class="person__info">
                <h3 class="person__name">${person.name}</h3>
                <p class="person__post">${person.post}</p>
            </div>
        `;
        swiper.appendSlide(slide);
    });
    const swiper = dragSwiper('#' + wrapper.querySelector('.swiper').id, {})
    return swiper
}