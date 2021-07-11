function chat() {
    const chatToggle = document.getElementById('toggle-chat');
    const aside = document.getElementById('aside');
    const main = document.getElementById('main');
    const chat = document.getElementById('chat');
    const chatBtn = document.getElementById('chatBtn');
    const bonus = document.getElementById('bonus');
    const bonusBtn = document.getElementById('bonusBtn');
    const footerChatBtn = document.getElementById('footerChatBtn');
    const footerBonusBtn = document.getElementById('footerBonusBtn');
    const footerBtns = document.getElementsByClassName('footer-btn');
    const asideHeaderLabel = document.getElementById('asideHeaderLabel');

    function addActive() {
        for(let i = 0; i < footerBtns.length; i++) {
            footerBtns[i].addEventListener('click', () => {
                for(let j = 0; j < footerBtns.length; j++) {
                    footerBtns[j].classList.remove('footer-btn_active');
                }
                footerBtns[i].classList.add('footer-btn_active');
            })
        }
    }
    addActive();

    let chatOpen = true //сохранение состояния

    // Показать - скрыть чат на Desktop
    chatToggle.addEventListener('click', () => {
        if (chatOpen) {
            aside.classList.add('chat-close-aside');
            main.classList.add('chat-close-main');
            footerChatBtn.classList.remove('footer-btn_active');
            chatOpen = false;
        } else if (!chatOpen) {
            aside.classList.remove('chat-close-aside');
            main.classList.remove('chat-close-main');
            footerChatBtn.classList.remove('footer-btn_active');
            chatOpen = true;
        }
    });

    footerChatBtn.addEventListener('click', () => {
        if (!chat.classList.contains('hide') && !aside.classList.contains('chat-close-aside')) {
            aside.classList.add('chat-close-aside');
            setTimeout(() => {
                footerChatBtn.classList.remove('footer-btn_active');
            }, 0)
        } else {
            aside.classList.remove('chat-close-aside'); // выдвигаем aside
            asideHeaderLabel.innerText = '1024 онлайн'; // В шапке пишем онлайн
            chat.classList.remove('hide'); // Открываем чат
            bonus.classList.add('hide'); // Скрываем бонусы
        }
    })

    footerBonusBtn.addEventListener('click', () => {
        if (!bonus.classList.contains('hide') && !aside.classList.contains('chat-close-aside')) {
            aside.classList.add('chat-close-aside');
            setTimeout(() => {
                footerBonusBtn.classList.remove('footer-btn_active');
            }, 0)
        } else {
            aside.classList.remove('chat-close-aside'); // выдвигаем aside
            asideHeaderLabel.innerText = 'Бонусы'; // В шапке пишем Бонусы
            chat.classList.add('hide'); // Скрываем чат
            bonus.classList.remove('hide'); // Открываем бонусы
        }
    })

    chatBtn.addEventListener('click', () => {
        chatBtn.classList.add('aside-toggle__button-active');
        bonusBtn.classList.remove('aside-toggle__button-active');
        chat.classList.remove('hide');
        bonus.classList.add('hide');
    });
    bonusBtn.addEventListener('click', () => {
        chatBtn.classList.remove('aside-toggle__button-active');
        bonusBtn.classList.add('aside-toggle__button-active');
        chat.classList.add('hide');
        bonus.classList.remove('hide');
    })

}

export default chat;
