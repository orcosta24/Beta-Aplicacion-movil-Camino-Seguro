const openMenu = document.querySelector('.open-button');
openMenu.addEventListener("click", OpenAppScreen);
function OpenAppScreen () {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');
}