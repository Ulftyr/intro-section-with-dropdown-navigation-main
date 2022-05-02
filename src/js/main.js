const arrow = document.querySelector('.arrow-features')
const arrow2 = document.querySelector('.arrow-company')
const itemArr = document.querySelectorAll('.nav__items-item--features-item')
const itemArr2 = document.querySelectorAll('.nav__items-item--company-item')
const menu1 = document.querySelector('.nav__items-item--features')
const menu2 = document.querySelector('.nav__items-item--company')
const clickMenu = document.querySelector('.menu-click1')
const clickMenu2 = document.querySelector('.menu-click2')

const burgerBtn = document.querySelector('.nav__burger')
const shadowBgc = document.querySelector('.nav__shadow')
const boxMenu = document.querySelector('.nav__box')

const dropdownMenu1 = () => {
	if (menu1.style.display === 'block') {
		menu1.style.display = 'none'
		arrow.src = './dist/img/icon-arrow-down.svg'
	} else {
		menu1.style.display = 'block'
		arrow.src = './dist/img/icon-arrow-up.svg'
	}
	itemArr.forEach(el => {
		el.classList.add('active')
	})
}

const dropdownMenu2 = () => {
	if (menu2.style.display === 'block') {
		menu2.style.display = 'none'
		arrow2.src = './dist/img/icon-arrow-down.svg'
	} else {
		menu2.style.display = 'block'
		arrow2.src = './dist/img/icon-arrow-up.svg'
	}
	itemArr2.forEach(el => {
		el.classList.add('active')
	})
}

const enterMenu = () => {
	if (shadowBgc.style.opacity === '1') {
		boxMenu.style.transform = 'translateX(100%)'
		shadowBgc.style.opacity = '0'
		burgerBtn.style.backgroundImage = "url('./dist/img/icon-menu.svg')"
	} else {
		boxMenu.style.transform = 'translateX(0)'
		shadowBgc.style.opacity = '1'
		burgerBtn.style.backgroundImage = "url('./dist/img/icon-close-menu.svg')"
	}
}

burgerBtn.addEventListener('click', enterMenu)
clickMenu.addEventListener('click', dropdownMenu1)
clickMenu2.addEventListener('click', dropdownMenu2)
