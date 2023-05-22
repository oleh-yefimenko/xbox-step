// Меню
const menu = document.querySelector(".menu");
const icon = document.querySelector(".menu-icon");
const body = document.querySelector("body");

if (icon) {
	icon.addEventListener("click", function (e) {
		menu.classList.toggle("active");
		icon.classList.toggle("active");
		body.classList.toggle("active");
	});
}
