(function($){
	$.fn.setHeader = function(options){
		const el = $(this);
		$(this).append(` 
				<div class="logo">
					<img src="../image/logo-01.png" alt="">
					<img src="../image/mintve.svg" alt="">
					<img src="../image/r.svg" alt="">
					<img src="../image/se.svg" alt="">
				</div>
				<div class="menu-container">
					<div class="marquee" data-duplicated='true' data-direction='right'>
						<div class="container">
							<div class="item">
								<img src="../image/min-arrow.svg" alt="">
								<img class="item01" src="../image/pixel-word-1.png" alt="">
							</div>
							<div class="item">
								<img src="../image/min-arrow.svg" alt="">
								<img class="item02" src="../image/pixel-word-2.png" alt="">
							</div>
							<div class="item">
								<img src="../image/min-arrow.svg" alt="">
								<img class="item03" src="../image/pixel-word-3.png" alt="">
							</div>
						</div>
					</div>
					<div class="menu">
						<ul>
						 	<li data-target="/lang">瀕危語言</li>
						 	<li data-target="/hlaalua">拉阿魯哇</li>
						  	<li data-target="/nft">紀錄 NFT</li>
						  	<li class="ourthea">皇都電姬</li>
						</ul>
					</div>
				</div>
		`)
		// 本地修改
		// let path = location.pathname.split('/')[1];
		let path = location.pathname.split('/')[2];
		// let imgSrc = $("img")
		switch (path) {
			case 'lang':
				$(this).find('li').eq(0).addClass('active');
				break;
			case 'hlaalua':
				$(this).find('li').eq(1).addClass('active');
				break;
			case 'nft':
				$(this).find('li').eq(2).addClass('active');
				break;
			// case 'prove':
			// 	$(this).find('li').eq(3).addClass('active');
			// 	break;
			// case 'erc721':
			// 	$(this).find('li').eq(4).addClass('active');
			// 	break;
			default:
				// statements_def
				break;
		}

		$(this).find('.menu-container .marquee').marquee({
			duplicated: true,
			gap:0,
			delayBeforeStart:1000
		});

		setTimeout(function(){
			$('.menu-container .marquee .container').css('opacity', '1');
		},1000)

		$(this).find('.menu li.ourthea').click(function(event) {
			event.preventDefault();
			/* Act on the event */
			location.href = 'https://ourtheatre.net/thesateanddenki/';
		});

		$(this).find('.menu li').click(function(event) {
			/* Act on the event */
			if(event.currentTarget.attributes.length!=0 && event.currentTarget.classList[0] != 'ourthea'){
				if(event.currentTarget.attributes[0].value != 'active'){
					// location.href = event.currentTarget.attributes[0].value;
					// 本地修改
					location.href = '/mintverse' + event.currentTarget.attributes[0].value;
				}
			}
		});
		$(this).find('.logo').on('click',function(event) {
			event.preventDefault();
			/* Act on the event */
			// location.href = '/';
			// 本地修改
			location.href = '/mintverse';
		});
		console.log(location)
		// console.log('path',path)

		// 首頁img src 本地修改
		var imgSrc = [].slice.call($("header img"));
		if (path == '') {
			imgSrc.forEach(e => {
				let imgS = e.src.split('e-s.tw')
				e.src = "http://e-s.tw/mintverse" + imgS[1]
				console.log('imgSrc',e.sre)
			});
		}
	}

})(jQuery);