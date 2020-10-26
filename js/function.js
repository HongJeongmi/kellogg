$(function() {
	const $gnb = $('header > nav > .gnb > li:last-child')
	const $lnb = $('header > nav > .gnb > li > .lnb')

	$gnb.on({
		mouseenter: function() {
			$lnb.stop().slideDown()
		},
		mouseleave: function() {
			$lnb.stop().slideUp()
		}
	})
})

// shop
$(function(){
	const $shop = $('header > .shop > li')
	let nowIdx = 0

	$shop.eq(nowIdx).addClass('on').show()

	setInterval(function(){
		if(nowIdx<1){
			nowIdx++
		}else{
			nowIdx=0
		}
		$shop.filter('.on').stop().hide().removeClass('on')
		$shop.eq(nowIdx).stop().show().addClass('on')
	},1000)
})

// visual slide
$(function() {
	const $slides = $('#visual > .slides > .slides-container')
	const $prev = $('#visual > .prev')
	const $next = $('#visual > .next')
	let nowIdx = 0

	setInterval(function() {
		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' },700)
	}, 5000)

	// 이전
	$prev.on('click',function(evt){
		evt.preventDefault()

		if(nowIdx>0){
			nowIdx--
		}else{
			nowIdx=3
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' },700)
	})

	// 다음
	$next.on('click', function(evt){
		evt.preventDefault()

		if(nowIdx<3){
			nowIdx++
		}else{
			nowIdx=0
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' },700)
	})
})

// detail slide
$(function() {
	const $detailSlides = $('#detail > .detail_slides')
	const $detailPrev = $('#detail > .detail_prev')
	const $detailNext = $('#detail > .detail_next')
	let nowIdx = 0

	// 이전
	$detailPrev.on('click', function(evt) {
		evt.preventDefault()
		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 3
		}
		$detailSlides.stop().animate({ left: -1180 * nowIdx })
	})

	// 다음
	$detailNext.on('click', function(evt) {
		evt.preventDefault()
		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$detailSlides.stop().animate({ left: -1180 * nowIdx })
	})
})

// footer
$(function() {
	const $show = $('#bottom > a')
	const $lang = $('#bottom > .lang')

	$show.on('click', function(evt) {
		evt.preventDefault()

		$('#top').toggle()
	})

	$lang.on('click', function(evt) {
		evt.preventDefault()

		$('#bottom > .lang > li > .lang_list').toggle()
	})

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 800) {
			$('aside').fadeIn()
		} else {
			$('aside').fadeOut()
		}
	})
	$('aside').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 400)
		return false
	})
})
