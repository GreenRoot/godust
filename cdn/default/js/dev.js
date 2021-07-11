import gameMode from './gameMode.js';
import chat from './chatBonus.js';

const support = document.getElementById('support');
const supportBtn = document.getElementById('supportBtn');
const personalLinkBtn = document.getElementsByClassName('personal-link__button')[0];
const selectAll = document.getElementsByClassName('select-all')[0];
const selectAllToggle = document.getElementsByClassName('select-all__toggle')[0];
const modeToggle = document.getElementsByClassName('mode__toggle');
const refToggleBtn = document.getElementsByClassName('ref-toggle__btn');
const item = document.getElementsByClassName('item');
const crash = document.getElementById('crash');
const crashBtn = document.getElementById('crashBtn');
const classic = document.getElementById('classic');
const classicBtn = document.getElementById('classicBtn');
const mobilePanel = document.getElementById('mobilePanel');
const personalAccount = document.getElementById('personal-account');
const personalAccountBtn = document.getElementById('personal-accountBtn');
const body = document.getElementById('body');
const main = document.getElementById('main');
const headerLogin = document.getElementById('headerLogin');
const headerDeposit = document.getElementById('headerDeposit');
const deposit = document.getElementById('deposit');
const logout = document.getElementById('logout');
const multipliers = document.getElementById('multipliers');
const invChoice = document.getElementById('invChoice');
const inventory = document. getElementById('inventory');
const invLogin = document.getElementById('invLogin');
const invLoginBtn = document.getElementById('invLoginBtn');
const formClose = document.getElementById('formClose');
const formStep1 = document.getElementById('formStep1');
const formStep2 = document.getElementById('formStep2');
const market = document.getElementById('market');
const skinMarket = document.getElementById('skin-market');
const marketClose = document.getElementById('marketClose');
const historyOpen = document.getElementsByClassName('classic-past-history')[0];
const historyClose = document.getElementById('historyClose');
const history = document.getElementById('history');
const supCreateBtn = document.getElementById('supCreateBtn');
const supListBtn = document.getElementById('supListBtn');
const supportTickets = document.getElementById('supportTickets');
const supForm = document.getElementById('supForm');
const supImg = document.getElementById('supImg');
const supFooter = document.getElementById('supFooter');
const ticketList = document.getElementById('ticketList');
const ticketDetails = document.getElementById('ticketDetails');
const ticket = document.getElementsByClassName('ticket');
const footerMoreBtn = document.getElementById('footerMoreBtn');
const footerPopup = document.getElementById('footerPopup');

let width;

function test(){
    gameMode() // Переключение режимов
    chat() // Работа чата и Бонусов

    //логин
    headerLogin.addEventListener('click', () => {
        headerLogin.classList.add('hide');
        headerDeposit.classList.remove('hide');
        multipliers.classList.remove('disable');
        invChoice.classList.remove('disable');
        invLogin.classList.add('hide');
    })

    invLoginBtn.addEventListener('click', () => {
        headerLogin.classList.add('hide');
        headerDeposit.classList.remove('hide');
        multipliers.classList.remove('disable');
        invChoice.classList.remove('disable');
        invLogin.classList.add('hide');
        inventory.classList.remove('hide');
    })

    logout.addEventListener('click', () => {
        headerLogin.classList.remove('hide');
        headerDeposit.classList.add('hide');
        multipliers.classList.add('disable');
        invChoice.classList.add('disable');
        invLogin.classList.remove('hide');
        inventory.classList.add('hide');
    })

    // Переключение окон

    // Страница аккаунта
    personalAccountBtn.addEventListener('click', ()=>{
        if(personalAccount.classList.contains('hide')) {
            personalAccount.classList.remove('hide');
            crash.classList.add('hide');
            classic.classList.add('hide');
            mobilePanel.classList.add('hide');
            deposit.classList.add('hide');
            support.classList.add('hide');
            body.classList.remove('body_games_height');
            main.classList.remove('overflow-y');
        }
    });

    // Страница депозита
    headerDeposit.addEventListener('click', () => {
        if(deposit.classList.contains('hide')) {
            deposit.classList.remove('hide');
            crash.classList.add('hide');
            classic.classList.add('hide');
            mobilePanel.classList.add('hide');
            personalAccount.classList.add('hide');
            support.classList.add('hide');
            body.classList.remove('body_games_height');
            main.classList.remove('overflow-y');
        }
    })

    // Страница поддержки
    supportBtn.addEventListener('click', () => {
        if(support.classList.contains('hide')) {
            support.classList.remove('hide');
            deposit.classList.add('hide');
            crash.classList.add('hide');
            classic.classList.add('hide');
            mobilePanel.classList.add('hide');
            personalAccount.classList.add('hide');
            body.classList.remove('body_games_height');
            main.classList.remove('overflow-y');
        }
    })



    //demo переключение чекбокса "выбрать всё" в инвентаре
    selectAll.addEventListener('click', function() {
        selectAllToggle.classList.toggle('select-all__toggle-active')
    })

    //demo переключение режимов
    modeToggle[0].addEventListener('click', function() {
        modeToggle[0].classList.add('lazy_link__active');
        modeToggle[1].classList.remove('lazy_link__active')
    });
    modeToggle[1].addEventListener('click', function() {
        modeToggle[1].classList.add('lazy_link__active');
        modeToggle[0].classList.remove('lazy_link__active')
    })

    //demo переключение кнопок (стандарт и блогер)
    refToggleBtn[0].addEventListener('click', function() {
        refToggleBtn[0].classList.add('ref-toggle__btn-active');
        refToggleBtn[1].classList.remove('ref-toggle__btn-active')
    });
    refToggleBtn[1].addEventListener('click', function() {
        refToggleBtn[1].classList.add('ref-toggle__btn-active');
        refToggleBtn[0].classList.remove('ref-toggle__btn-active')
    })

    //demo выделение предметов в инвентаре
    for ( let i = 0; i<item.length; i++) {
        item[i].addEventListener('click', () => item[i].classList.toggle('item-selected'))
    }

    //выделение предметов в магазине
    for (let i = 0; i < document.getElementsByClassName('buy__item').length; i++) {
        document.getElementsByClassName('buy__item')[i].addEventListener('click', () => document.getElementsByClassName('buy__item')[i].classList.toggle('buy__item-selected'))
    }

    //управление магазином
    skinMarket.addEventListener('click', () => {
        market.classList.toggle('market_active');
        history.classList.remove('history_active');
    });
    marketClose.addEventListener('click', () => market.classList.remove('market_active'));

    //управление формой депозит
    formClose.addEventListener('click', () => {
        document.getElementsByClassName('deposit-window')[0].classList.add('hide');
    })
    formStep1.addEventListener('click', () => {
        document.getElementsByClassName('deposit-qiwi__step2')[0].classList.remove('step_disable');
        document.getElementsByClassName('deposit-qiwi__step1')[0].classList.add('step_disable')
    })
    formStep2.addEventListener('click', () => {
        document.getElementsByClassName('deposit-qiwi__step2')[0].classList.add('step_disable')
        document.getElementsByClassName('deposit-qiwi__wrapper')[0].classList.add('hide');
        document.getElementsByClassName('deposit-qiwi__wrapper')[1].classList.remove('hide');
    })
    headerDeposit.addEventListener('click', () => {
        document.getElementsByClassName('deposit-window')[0].classList.remove('hide')
        document.getElementsByClassName('deposit-qiwi__wrapper')[1].classList.add('hide')
        document.getElementsByClassName('deposit-qiwi__wrapper')[0].classList.remove('hide')
        document.getElementsByClassName('deposit-qiwi__step2')[0].classList.add('step_disable')
        document.getElementsByClassName('deposit-qiwi__step1')[0].classList.remove('step_disable')
    });

    // classic история
    historyOpen.addEventListener('click', () => {
        history.classList.add('history_active');
        market.classList.remove('market_active');
    });
    historyClose.addEventListener('click', () => {
        history.classList.remove('history_active');
    });

    // окно поддержки
    supCreateBtn.addEventListener('click', () => {
        supCreateBtn.classList.add('ticket-btn_active');
        supListBtn.classList.remove('ticket-btn_active');
        supportTickets.classList.remove('support__tickets-list');
        supportTickets.classList.remove('support__tickets-details');
        supForm.classList.remove('hide');
        supImg.classList.remove('hide');
        ticketList.classList.add('hide');
        ticketDetails.classList.add('hide');
        supFooter.innerHTML = 'Предоставьте максимальное количество информации по интересующему Вас вопросу и наши специалисты помогут вам в кратчайшие сроки.';
    });

    supListBtn.addEventListener('click', () => {
        supListBtn.classList.add('ticket-btn_active');
        supCreateBtn.classList.remove('ticket-btn_active');
        supportTickets.classList.add('support__tickets-list');
        supportTickets.classList.remove('support__tickets-details');
        supForm.classList.add('hide');
        supImg.classList.add('hide');
        ticketList.classList.remove('hide');
        ticketDetails.classList.add('hide');
        supFooter.innerHTML = 'Обработка тикета от 10 до 45 минут.';
    });

    for(let i=0; i < ticket.length; i++) {
        ticket[i].addEventListener('click', ()=> {
            supportTickets.classList.remove('support__tickets-list');
            supportTickets.classList.add('support__tickets-details');
            ticketDetails.classList.remove('hide');
            ticketList.classList.add('hide')
        })
    }

    footerMoreBtn.addEventListener('click', () => {
        footerPopup.classList.toggle('active')
    })



}
test()

personalLinkBtn.onclick = (e) => e.preventDefault()


