// JavaScript Document
jQuery(document).ready(function($){
	
	$('.wp_shopify_product .prod-gallery ul li a').on('click', function(event){
		  event.preventDefault();
		  $('.wp_shopify_product .prod-left > a img').attr('src', $(this).find('img').attr('src'));
	});
});