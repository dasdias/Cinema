import slideMenu from "./menu.js";

// const headerBurgerBtn = document.querySelector('.header__burger-btn');
// const navigation = document.querySelector('.navigation');
// const navigationClose = document.querySelector('.navigation__close');
slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close'
});

