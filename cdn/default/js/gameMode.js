function gameMode() {

    const crash = document.getElementById('crash');
    const crashBtn = document.getElementById('crashBtn');
    const classic = document.getElementById('classic');
    const classicBtn = document.getElementById('classicBtn');
    const mobilePanel = document.getElementById('mobilePanel');
    const personalAccount = document.getElementById('personal-account');
    const deposit = document.getElementById('deposit');
    const support = document.getElementById('support');
    const footerCrashBtn = document.getElementById('footerCrashBtn');
    const footerClassicBtn = document.getElementById('footerClassicBtn');
    const aside = document.getElementById('aside');
    const body = document.getElementById('body');
    const main = document.getElementById('main');

    // В параметрах указывается режим игры (crash и classic)
    function toggleGame(open, close) {
        if(open.classList.contains('hide')) {
            open.classList.remove('hide');
            close.classList.add('hide');
            mobilePanel.classList.remove('hide');
            personalAccount.classList.add('hide');
            deposit.classList.add('hide');
            support.classList.add('hide');
        }
    }

    crashBtn.addEventListener('click', () =>{
        toggleGame(crash, classic);
        body.classList.remove('body_games_height'); // этот класс перестраивает сетку для корректного скрола crash и classic, на мобильной весии
        main.classList.remove('overflow-y'); // этот класс добавляет скролл-y для корректного скрола crash и classic, на мобильной весии
        });

    footerCrashBtn.addEventListener('click', () => {
        toggleGame(crash, classic);
        body.classList.add('body_games_height'); // этот класс перестраивает сетку для корректного скрола crash и classic, на мобильной весии
        main.classList.add('overflow-y'); // этот класс добавляет скролл-y для корректного скрола crash и classic, на мобильной весии
        aside.classList.add('chat-close-aside');
    });

    classicBtn.addEventListener('click', ()=> {
        toggleGame(classic, crash);
        body.classList.remove('body_games_height'); // этот класс перестраивает сетку для корректного скрола crash и classic, на мобильной весии
        main.classList.remove('overflow-y'); // этот класс добавляет скролл-y для корректного скрола crash и classic, на мобильной весии
    });

    footerClassicBtn.addEventListener('click', () => {
        toggleGame(classic, crash);
        body.classList.add('body_games_height'); // этот класс перестраивает сетку для корректного скрола crash и classic, на мобильной весии
        main.classList.add('overflow-y'); // этот класс добавляет скролл-y для корректного скрола crash и classic, на мобильной весии
        aside.classList.add('chat-close-aside');
    });
}

export default gameMode;
