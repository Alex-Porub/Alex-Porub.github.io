$('.ft_btn-sities').click(function(){
	let btn = $(this);
	$('.dropdown-info').css('display','none');
	btn.next().fadeIn().css('display','flex');
})