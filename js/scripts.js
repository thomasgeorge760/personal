/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);




let name = document.getElementById("cname");
let email = document.getElementById("cemail");

let message = document.getElementById("cmessage");
let form = document.getElementById("gform");



function namecheck(){
    let regx1=/\d/;
    
    if(name.value==="" || name.value===" " || regx1.test(name.value)==true){
        name.style.borderColor="red";
        document.getElementById("noname").innerHTML="Please enter a valid name..";
    }else{
        name.style.borderColor="green";
        document.getElementById("noname").innerHTML="";
    }
}

function emailcheck(){
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;

    if(email.value==="" || email.value===" " || regx.test(email.value)==false){
        email.style.borderColor="red";
        document.getElementById("noemail").innerHTML="Please enter a valid email id..";
    }else{
        email.style.borderColor="green";
        document.getElementById("noemail").innerHTML="";
    }

}
function messagecheck(){
    if(message.value==="" || message.value===" "){
        message.style.borderColor="red";
        document.getElementById("nomessage").innerHTML="Please enter some details..";
    }else{
        message.style.borderColor="green";
        document.getElementById("nomessage").innerHTML="";
    }
}

 
form.addEventListener("submit", (e)=>{
    let flag = 0;
   
    

    if (name.value === "" || name.value===" "){
        document.getElementById("noname").innerHTML = "Name required."
        flag++;
    }
    
    if (email.value === "" || email.value===" "){
        flag ++;
        document.getElementById("noemail").innerHTML = "Email required."
    }
     

    if (message.value === "" || message.value===" "){
        flag ++;
        document.getElementById("nomessage").innerHTML = "Message required"
        
    }
    if ( flag===0){
        alert("form submitted successfully")
    }

    if (flag > 0){
        e.preventDefault()
        
    }
  
})