const btnHome = document.getElementById("btn_home");
const btnGames = document.getElementById("btn_games");
const btnCategories = document.getElementById("btn_categories");
const btnCompanies = document.getElementById("btn_companies");
const btnPlatforms = document.getElementById("btn_platforms");

btnHome.addEventListener('click', e => {
    e.preventDefault();
    activeMenuBtn(btnHome);
});
btnGames.addEventListener('click', e => {
    e.preventDefault();
    activeMenuBtn(btnGames);
});
btnCategories.addEventListener('click', e => {
    e.preventDefault();
    activeMenuBtn(btnCategories);
});
btnCompanies.addEventListener('click', e => {
    e.preventDefault();
    activeMenuBtn(btnCompanies);
});
btnPlatforms.addEventListener('click', e => {
    e.preventDefault();
    activeMenuBtn(btnPlatforms);
});

function activeMenuBtn(btn) {
    if (!btn.classList.contains('active')) {
        btn.classList.add('active');
        sessionStorage.setItem('active', btn.id);
    }
    deactiveMenu(btn);
}

function deactiveMenu(btn) {
    const menu = document.getElementsByClassName('nav-link');
    for (let i = 0; i < menu.length; i++) {
        if (menu[i] != btn && menu[i].classList.contains('active')) {
            menu[i].classList.remove('active');
        }
    }
    window.location.href = btn.href;
}

$(document).ready(e => {
    const activeBtn = document.getElementById(sessionStorage.getItem('active'));
    console.log('lolkek' + activeBtn);
    activeBtn.classList.add('active');
});