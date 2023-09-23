
// Попапы всякие 


var contacts_popup = document.querySelector(".contact-us");
var contacts_popup_link = document.querySelector(".contacts-us-link");
var map_popup = document.querySelector(".map-popup");
var map_popup_link = document.querySelector(".map-img")
var close_popup = document.querySelectorAll(".close-popup");

contacts_popup_link.addEventListener("click", function (evt) {
	evt.preventDefault();
	contacts_popup.classList.remove("visually-hidden");
})

map_popup_link.addEventListener("click", function(evt) {
	evt.preventDefault();
	map_popup.classList.remove("visually-hidden");
})

for (var i = 0; i < close_popup.length; i++) {
	var correct_popup = close_popup.item(i);
	correct_popup.addEventListener("click", function(evt) {
		evt.preventDefault();
		evt.currentTarget.parentNode.classList.add("visually-hidden");
	})
}

// Кончились попапы

// Переключалки сервисов

var delivery_service_nav = document.querySelector(".delivery-button");
var guarantee_service_nav = document.querySelector(".guarantee-button");
var credit_service_nav = document.querySelector(".credit-button");

var delivery_service = document.querySelector(".delivery-service");
var guarantee_service = document.querySelector(".guarantee-service");
var credit_service = document.querySelector(".credit-service");

delivery_service_nav.addEventListener("click", function(evt) {
	evt.preventDefault();

	delivery_service_nav.id = "service-active";
	guarantee_service_nav.id = "";
	credit_service_nav.id = "";

	delivery_service.classList.remove("visually-hidden");
	guarantee_service.classList.add("visually-hidden");
	credit_service.classList.add("visually-hidden");
})

guarantee_service_nav.addEventListener("click", function(evt) {
	evt.preventDefault();

	delivery_service_nav.id = "";
	guarantee_service_nav.id = "service-active";
	credit_service_nav.id = "";

	delivery_service.classList.add("visually-hidden");
	guarantee_service.classList.remove("visually-hidden");
	credit_service.classList.add("visually-hidden");
})

credit_service_nav.addEventListener("click", function(evt) {
	evt.preventDefault();

	delivery_service_nav.id = "";
	guarantee_service_nav.id = "";
	credit_service_nav.id = "service-active";

	delivery_service.classList.add("visually-hidden");
	guarantee_service.classList.add("visually-hidden");
	credit_service.classList.remove("visually-hidden");
})

// Конец переключалок

// Выпадающее меню
var dropdown_menu_header = document.querySelector(".dropdown-menu-header")
var dropdown_menu_container = document.querySelector(".dropdown-menu");
var dropdown_menu = document.querySelector(".header-goods-list");

dropdown_menu_container.addEventListener("mouseover", function(evt) {
	dropdown_menu.classList.remove("visually-hidden");
	document.querySelector(".main-header").classList.add("main-header-active");
})


dropdown_menu_container.addEventListener("mouseout", function(evt) {
	dropdown_menu.classList.add("visually-hidden");
	document.querySelector(".main-header").classList.remove("main-header-active");
})

// Конец выпадающего меню



// Поле поиска

var search_input = document.querySelector(".search-input");
var search_button = document.querySelector(".search-button");

search_input.addEventListener("focus", function(evt) {
	evt.preventDefault();
	search_button.classList.remove("visually-hidden");
	search_input.parentNode.classList.add("form-focus");
})

search_input.addEventListener("blur", function(evt) {
	evt.preventDefault();
	search_button.classList.add("visually-hidden");
	search_input.parentNode.classList.remove("form-focus");
})

// Конец поля поиска

// Слайдер хуле 

var slider_items = document.querySelectorAll(".slide-item");
var slider_buttons = [];

for (let i = 0; i < slider_items.length; i++) {
	var slider_buttons = slider_items[i].querySelectorAll(".slider-btn");
	for (let l = 0; l < slider_buttons.length; l++) {
		if (i == l) {
			slider_buttons[l].classList.add("slider-btn-active");
		}
		else {
			slider_buttons[l].addEventListener("click", function(evt) {
				evt.preventDefault();
				var name = evt.currentTarget.getAttribute('name');
				var slider_controller = 0;
				if (name == "first") {
					slider_controller = 0;
				} else if (name == "second") {
					slider_controller = 1;
				} else if (name == "third") {
					slider_controller = 2;
				}
				var current_slide = slider_items[slider_controller];
				evt.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("visually-hidden");
				current_slide.classList.remove("visually-hidden");
			})
		}
	}
}

// Конец слайдера хуле

// Логотипы 

var logotypes = document.querySelector(".logotypes");
var logo_images = logotypes.querySelectorAll("img");
images_array = [];

for (var i = 0; i < logo_images.length; i++) {
	images_array.push(logo_images[i]);
	logo_images[i].addEventListener("mouseover", function(evt) {
		evt.currentTarget.src="img/logo-" + String(images_array.indexOf(evt.currentTarget) + 1) + "-wc.jpg"; 
		evt.currentTarget.style.opacity = "1";
	})
	logo_images[i].addEventListener("mouseout", function(evt) {
		evt.currentTarget.src="img/logo-" + String(images_array.indexOf(evt.currentTarget) + 1) + "-oc.jpg"; 
		evt.currentTarget.style.opacity = "0.2";
	})
}

