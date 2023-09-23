// Поле поиска

var search_input = document.querySelector(".search-input");
var search_button = document.querySelector(".search-button");

search_input.addEventListener("focus", function(evt) {
	evt.preventDefault();
	search_button.classList.remove("visually-hidden");
	search_input.parentNode.classList.add("form-focus");
});

search_input.addEventListener("blur", function(evt) {
	evt.preventDefault();
	search_button.classList.add("visually-hidden");
	search_input.parentNode.classList.remove("form-focus");
});

// Конец поля поиска




// Выпадающее меню

var dropdown_menu_header = document.querySelector(".dropdown-menu-header")
var dropdown_menu_container = document.querySelector(".dropdown-menu");
var dropdown_menu = document.querySelector(".header-goods-list");

dropdown_menu_container.addEventListener("mouseover", function(evt) {
	dropdown_menu.classList.remove("visually-hidden");
	document.querySelector(".main-header").classList.add("main-header-active");
});


dropdown_menu_container.addEventListener("mouseout", function(evt) {
	dropdown_menu.classList.add("visually-hidden");
	document.querySelector(".main-header").classList.remove("main-header-active");
});

// Конец выпадающего меню

var goods_list = document.querySelectorAll(".good-cart");

for (var i = 0; i < goods_list.length; i++) {
	goods_list[i].addEventListener("mouseover", function(evt) {
		evt.currentTarget.querySelector(".good-hover-wrapper").classList.remove("visually-hidden");
	})
	goods_list[i].addEventListener("mouseout", function(evt) {
		evt.currentTarget.querySelector(".good-hover-wrapper").classList.add("visually-hidden");
	});
}

var sort_buttons = document.querySelectorAll(".sort-item")

for (var i = 0; i < sort_buttons.length; i++) {
	sort_buttons[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		for (var i = 0; i < sort_buttons.length; i++) {
			if (evt.currentTarget != sort_buttons[i]) {
				sort_buttons[i].classList.remove("active");
			}
		}
		evt.currentTarget.classList.add("active");
	});
}

var switch_buttons = document.querySelectorAll(".switch-item")

for (var i = 0; i < switch_buttons.length; i++) {
	switch_buttons[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		for (var i = 0; i < switch_buttons.length; i++) {
			if (evt.currentTarget != switch_buttons[i]) {
				switch_buttons[i].classList.remove("active");
			}
		}
		evt.currentTarget.classList.add("active");
	});
}

var pages_buttons_raw = document.querySelectorAll(".pages-item");
var pages_buttons = [];
for (var i = 0; i < pages_buttons_raw.length; i++) {
	pages_buttons[i] = pages_buttons_raw[i];
}


for (var i = 0; i < pages_buttons.length; i++) {
	pages_buttons[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		for (var i = 0; i < pages_buttons.length; i++) {
			if (evt.currentTarget != pages_buttons[i]) {
				pages_buttons[i].classList.remove("active");
			}
		}
		evt.currentTarget.classList.add("active");
	});
}

var pages_back_button = document.querySelector(".pages-back-button")

pages_back_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	current_page = pages_buttons.indexOf(document.querySelector(".pages-item.active"));
	current_page -= 1;
	if (current_page != -1) {
		document.querySelector(".pages-item.active").classList.remove("active");
		pages_buttons[current_page].classList.add("active");
	}
});


var pages_forward_button = document.querySelector(".pages-forward-button")

pages_forward_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	current_page = pages_buttons.indexOf(document.querySelector(".pages-item.active"));
	current_page += 1;
	if (current_page != pages_buttons.length) {
		document.querySelector(".pages-item.active").classList.remove("active");
		pages_buttons[current_page].classList.add("active");
	}
});



var priceSlider = document.getElementById("r-slider")

noUiSlider.create(priceSlider, {
	start: [0,5000],
	tooltips: true,
	connect: true,
	range: {
		"min": 0,
		"max": 9000
	}
});