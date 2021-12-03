const targets = document.querySelectorAll(".animated"),
	overview = document.getElementById("overview"),
	discover = document.getElementById("discover");

function checkTargets() {
	targets.forEach((el, key) => {
		if (
			el.offsetTop < document.documentElement.scrollTop + 650 &&
			el.offsetTop > document.documentElement.scrollTop - 500
		) {
			el.classList.add("visible");
		} else {
			el.classList.remove("visible");
		}
	});
}

discover.addEventListener("click", () => {
	overview.scrollIntoView()
})

window.addEventListener("scroll", () => {
	checkTargets();
});
