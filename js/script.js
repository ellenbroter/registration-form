const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordion_toggle = accordion.querySelector('.accordion__toggle');
	const accordion_content = accordion.querySelector('.accordion__content');

	accordion_toggle.addEventListener('click', () => {
		accordion_content.classList.toggle('accordion__content--visible')		
	});
});

