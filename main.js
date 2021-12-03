const menu = document.getElementById("menu"),
	menuList = document.getElementById("menu-list"),
	content = document.getElementById("content");

menu.addEventListener("click", function () {
	this.classList.toggle("active");
	menuList.classList.toggle("active");
});

window.onload = function () {
	content.classList.add("active");
};
