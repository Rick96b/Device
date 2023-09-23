

var priceSlider = document.getElementById("r-slider")

noUiSlider.create(priceSlider, {
	start: [10,200],
	tooltips: true,
	connect: true,
	range: {
		"min": 0,
		"max": 200
	}
});