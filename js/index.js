import slideMenu from "./menu.js"; // импортируем функцию по default
import renderVideo from "./renderVideo.js";

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close'
}); // вызываем функцию открытия (закрытия) меню

renderVideo();