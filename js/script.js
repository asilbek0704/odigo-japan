let full = document.querySelectorAll('.question1-text');
let circle = document.querySelectorAll('.question1 i');
let border = document.querySelectorAll('.question1');

for (let i = 0; i < full.length; i++) {
    full[i].addEventListener('mouseover', () => {
        circle[i].classList.add('full')
        border[i].style = `border-color: #2767bb;
                            transition: 0.3s`
    })
    full[i].addEventListener('mouseout', () => {
        circle[i].classList.remove('full')
        border[i].style = `border-color: #bfc0c5;
                            transition: 0.3s`
    })
}




const sectionBetween = document.querySelectorAll('.section-between__card');


for (let i = 0; i < sectionBetween.length; i++) {
    sectionBetween[i].addEventListener('click', () => {
        let sectionBetweenI = sectionBetween[i].querySelector('i');
        sectionBetweenI.classList.toggle('fa-long-arrow-alt-right');
        sectionBetweenI.classList.toggle('fa-long-arrow-alt-down');

        let LearnLess = sectionBetween[i].querySelector('.learn');

        if (LearnLess.innerHTML == `LEARN MORE`) {
            LearnLess.innerHTML = `LEARN LESS`;
        } else if (LearnLess.innerHTML == `LEARN LESS`) {
            LearnLess.innerHTML = `LEARN MORE`;
        }

        let extraText = sectionBetween[i].querySelector('.extra');

        $(extraText).stop().fadeToggle();
    })
}



function typing(text) {
    let element = text,
        fullText = element.html(),
        inputText = '',
        letterCount = 0;

    let interval = setInterval(() => {
        inputText += fullText[letterCount];
        letterCount++
        element.html(inputText)
        if (fullText === inputText) {
            clearInterval(interval)
        }
    }, 150)
}

typing($('.header-text__about span'));





let like = document.querySelectorAll('.like i');

for (let i = 0; i < like.length; i++) {
    // like[i].addEventListener('mouseover', () => {
    //     like[i].style = `color: #e73a23 !important`;
    //     like[i].closest('a').style = `color: #e73a23 !important`;
    // })
    // like[i].addEventListener('mouseout', () => {
    //     like[i].style = `color: #FFFFFF !important`;
    //     like[i].closest('a').style = `color: #FFFFFF !important`;
    // })

    let randomNum = Math.floor(Math.random() * 250);
    like[i].previousElementSibling.innerHTML = Math.floor(Math.random() * randomNum + 30)
    const amountOfLike = like[i].previousElementSibling.innerHTML;
    like[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (like[i].previousElementSibling.innerHTML > amountOfLike) {
            like[i].previousElementSibling.innerHTML--;
            like[i].style = `color: #FFFFFF !important`;
            like[i].closest('a').style = `color: #FFFFFF !important`;
        } else {
            like[i].previousElementSibling.innerHTML++;
            like[i].style = `color: #e73a23 !important`;
            like[i].closest('a').style = `color: #e73a23 !important`;
        }

    })
}




let comment = document.querySelectorAll('.comment i');

for (let i = 0; i < comment.length; i++) {
    // comment[i].addEventListener('mouseover', () => {
    //     comment[i].style = `color: #f7f701 !important`;
    //     comment[i].closest('a').style = `color: #f7f701 !important`;
    // })
    // comment[i].addEventListener('mouseout', () => {
    //     comment[i].style = `color: #FFFFFF !important`;
    //     comment[i].closest('a').style = `color: #FFFFFF !important`;
    // })

    let randomNum = Math.floor(Math.random() * 50);
    comment[i].previousElementSibling.innerHTML = Math.floor(Math.random() * randomNum + 10)

    const amountOfComment = comment[i].previousElementSibling.innerHTML;
    comment[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (comment[i].previousElementSibling.innerHTML > amountOfComment) {
            comment[i].previousElementSibling.innerHTML--;
            comment[i].style = `color: #FFFFFF !important`;
            comment[i].closest('a').style = `color: #FFFFFF !important`;
        } else {
            comment[i].previousElementSibling.innerHTML++;
            comment[i].style = `color: #f7f701 !important`;
            comment[i].closest('a').style = `color: #f7f701 !important`;
        }

    })
}







let card = document.querySelectorAll('.section-3__card');

for (let i = 0; i<card.length; i++) {
    card[i].addEventListener('dblclick', () => {
        $(card).toggleClass('origin-position')
    })
}