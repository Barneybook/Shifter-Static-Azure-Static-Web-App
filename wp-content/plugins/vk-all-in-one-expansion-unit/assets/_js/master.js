/*-------------------------------------------*/
/*  jquery.flatheights.js
/*-------------------------------------------*/
/*  snsCount
/*-------------------------------------------*/

/*-------------------------------------------*/
/*	jquery.flatheights.js
/*-------------------------------------------*/
var a = null;
(function($) {
	$(function() {
		$('.prArea > .subSection-title').flatHeights();
		$('.prArea > .summary').flatHeights();
		// $('.childPage_list_title').flatHeights();
	});
	// window.onload は複数使うと一つしか動作しなくなるので使用しない
	window.addEventListener('DOMContentLoaded', function() {
		$('.childPage_list_text').flatHeights();
		// $('.childPage_list_box').flatHeights();
	})
})(jQuery);

/*-------------------------------------------*/
/*	snsCount
/*-------------------------------------------*/
((window, document, parent_class) => {
	window.addEventListener('load', () => {
		let elements = document.getElementsByClassName('veu_count_sns_hb')
		if (elements.length == 0) {
			return
		}
		let linkurl = encodeURIComponent(location.href);

		// hatena
		fetch(
			vkExOpt.hatena_entry + linkurl,
			{
				method: 'GET',
			}
		).then((r)=>{
			if (r.ok) {
				r.json().then((body)=>{
					if (body.count === undefined) {
						return
					}
					Array.prototype.forEach.call(
						elements,
						(elm) => elm.innerHTML = body.count
					)

				})
			}
		})
		.catch((x)=>{})

		// facebook
		let fb_elements = document.getElementsByClassName('veu_count_sns_fb')
		if(vkExOpt.facebook_count_enable) {
			fetch(
				vkExOpt.facebook_entry + linkurl,
				{
					method: 'GET',
				}
			).then((r)=>{
				if (r.ok) {
					r.json().then((body)=>{
						if (body.count === undefined) {
							return
						}
						Array.prototype.forEach.call(
							fb_elements,
							(elm) => elm.innerHTML = body.count
						)

					})
				}
			})
			.catch((x)=>{})
		}

	}, false)

})(window, document, 'veu_socialSet');
