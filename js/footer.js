(function($){
	$.fn.setFooter = function(options){
		const el = $(this);
		$(this).append(` 
		<div class="arrow">
		<img src="../image/min-arrow.svg" alt="">
	</div>
	<p class="mintDescript" style="cursor: pointer;" >
		<span>
			<!-- <span>Freemint 5/26 12:00</span> -->
			<span class="button01">拉阿魯哇辭典</span>
			<span class="button02">領取 NFT</span>
		</span>
	</p>
	<!-- <div class="mint-container">
		<div class="mint">
			<label for="">鑄造</label>
			<p>2100</p>
		</div>
		<div class="total">
			<label for="">總量</label>
			<p>2100</p>
		</div>
	</div> -->
	<div class="social-container">
		<ul>
			<li data-target="https://m.facebook.com/ourtheatre/?locale2=zh_TW">
				<img src="../image/fb.svg" alt="">
			</li>
			<li data-target="https://instagram.com/our_theatre?igshid=YmMyMTA2M2Y=">
				<img src="../image/ig.svg" alt="">
			</li>
			<!-- <li data-target="https://discord.gg/rugpullfrens">
				<img src="../image/dc.svg" alt="">
			</li> -->
			<li data-target="https://opensea.io/collection/mintverseword">
				<img src="../image/os.svg" alt="">
			</li>
			<li data-target="https://ourtheatre.net/">
				<p>阮劇團</p>
			</li>
		</ul>
	</div>
	<!-- <p class="fontBtn"><span class="secondWorld">第二宇宙辭典<br>MINTVERSE</span></p> -->
	<p class="fontBtn fontBtn01">
		<span class="ourtheatre secondWorld03">阮劇團</span>
		<span class="secondWorld">第二宇宙辭典</span>
		<span class="secondWorld secondWorld02">MINTVERSE</span>
	</p>
	<p class="fontBtn fontBtn02"><span class="secondWorld">阮劇團</span></p>
				
		`)
		$(this).find('.social-container ul li').click(function(event) {
			/* Act on the event */
			if(event.currentTarget.attributes.length!=0){
				if(event.currentTarget.attributes[0].value != 'active'){
					location.href = event.currentTarget.attributes[0].value;
				}
			}
		});
		$(this).find('.law').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			location.href = '/law';
		});
		$(this).find('.secondWorld').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			location.href = 'https://mintverse.world/secondworld/';
		});
		function whiteListTimeCheck() {
	      let voteStart = new Date(2022, 4, 1, 20, 0, 0, 0);
	      let voteEnd = new Date(2022, 4, 7, 14, 0, 0, 0);
	      let now = new Date();
	      // console.log(voteStart+"\n"+voteEnd+"\n"+now);
	      if (now < voteStart) {
	     	return false;
	      } else if (now > voteEnd) {
	      	return 'whiteListEnd';
	      } else {
	      	return true;
	      }
	    }
		// 拉阿魯哇辭典＆領取NFT Tab切換
		// $(this).find('.mintDescript').on('click', function(event) {
		// 	event.preventDefault();
		// 	// if(whiteListTimeCheck())
		// 	location.href = '/mint';
		// });
	    if(whiteListTimeCheck() == true || whiteListTimeCheck() == 'whiteListEnd'){
			$(this).find('.mintDescript').addClass('whiteList');
			// $(this).find('.mintDescript span span:nth-of-type(1)').text('Sold out');
			// $(this).find('.mintDescript span span:nth-of-type(2)').text('已經全部鑄造完畢');
		}
	}

})(jQuery);