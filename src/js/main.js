import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {
	//* --- Slider --- *//
	$('.sellers__slider').slick({
		dots: false,
		arrows: true,
		prevArrow: $('.sellers-prev-arrow'),
		nextArrow: $('.sellers-next-arrow'),
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: true
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true
			  }
			}
		]
	});

	$('.product__items').slick({
		dots: false,
		arrows: true,
		appendArrows: $('.product-arrows'),
		prevArrow: $('.product-prev-arrow'),
		nextArrow: $('.product-next-arrow'),
		infinite: true,
		variableWidth: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true
			  }
			}
		]
	});

	//* --- Input Range --- *//
	const valueRange = document.querySelector('.discover__value');
	const valueNumber =  valueRange.querySelector('span');
	const inputRange = document.querySelector('.discover-range');
	inputRange.oninput = (() => {
		let value = inputRange.value;
		valueNumber.textContent = value + ' ETH';
		valueNumber.style.left = (value * 10) + '%';
		valueNumber.style.marginLeft = '2px';
	})

	//* --- Disabling anchors --- *//
	const heroArrows = document.querySelector('.hero-arrows');
	for (let i = 0; i < heroArrows.children.length; i++) {
		heroArrows.children[i].addEventListener('click', (e) => {
			e.preventDefault();
		})
	}

	const discoverButtons = document.querySelectorAll('.discover__button');
	const discoverFilterBtn = document.querySelector('.discover__sign');
	discoverButtons.forEach((discoverButton) => {
		discoverButton.addEventListener('click', (e) => {
			e.preventDefault();
			discoverButton.classList.toggle('active');
		})
	});
	discoverFilterBtn.addEventListener('click', (e) => {
		e.preventDefault();
	})
	
	//* --- Media --- *//
	const heroName = document.querySelector('.hero__name');
	const heroImage = document.querySelector('.hero-img');
	if (document.body.clientWidth <= 1024) {
		heroName.textContent = 'Marco carrillo®';
		heroImage.src = 'img/hero/auction-1x.jpg';
	}

	if (document.body.clientWidth < 575) {
		$('.collection__items').slick({
			dots: false,
			arrows: true,
			appendArrows: $('.collection-arrows'),
			prevArrow: $('.collection-prev-arrow'),
			nextArrow: $('.collection-next-arrow'),
			infinite: true,
			variableWidth: true,
			centerMode: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		$('.discover__items').slick({
			dots: false,
			arrows: true,
			appendArrows: $('.discover-arrows'),
			prevArrow: $('.discover-prev-arrow'),
			nextArrow: $('.discover-next-arrow'),
			infinite: true,
			variableWidth: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	const burgerMenu = document.querySelector('.header__right');
	const burgerList = [burger, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
	});

	// Anchor crossing
	const navButtons = burgerMenu.querySelectorAll('.btn-header');
	navButtons.forEach((navButton) => {
		navButton.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});
});