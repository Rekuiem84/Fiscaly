// lets you choose between the different service tabs

const serviceTabs = document.querySelectorAll(".services .tabs h3");
const serviceContents = document.querySelectorAll(".service .content");

serviceTabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		serviceTabs.forEach((tab) => tab.classList.remove("active"));
		tab.classList.add("active");
		console.log(index);
	});
});

// burger menu opens on click
const burger = document.querySelector(".burger-cont");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
});
