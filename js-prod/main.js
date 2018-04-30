$(window).on('load', function() {
    var headerEl = document.getElementById('page-header');
    var headPositionInfo = headerEl.getBoundingClientRect();
    var bottomOfHead = headPositionInfo.bottom;

    // var pageEl = document.getElementById('page-container');
    // var pagePositionInfo = pageEl.getBoundingClientRect();
    // var topOfPage = pagePositionInfo.top;

    var changeTopPos = $("#page-container");
    changeTopPos.css({
        top: bottomOfHead + "px"
    });
});
function toggleAbout() {
    var mydiv = document.getElementById('menu-2');
    // var otherdiv = document.getElementById('menu-2');
    if (mydiv.style.display === 'block' || mydiv.style.display === ''
    // && otherdiv.style.display === 'block'
){

        mydiv.style.display = 'none';
        // otherdiv.style.display = 'none';
    }
    else {

        mydiv.style.display = 'block';
        // otherdiv.style.display = 'none';
    }
}
function toggleMenu() {
    var mydiv = document.getElementById('menu-2');
    var otherdiv = document.getElementById('menu-1');
    if (mydiv.style.display === 'block' || mydiv.style.display === '') {
        mydiv.style.display = 'none';
//         otherdiv.style.display = 'none';
    }
    else {
        mydiv.style.display = 'none'
//         otherdiv.style.display = 'none';
    }
}

// JQuery
$(document).ready( function() {

        // $("#page-nave-lists").hide();
        $(window).resize(function() {

            var video = document.getElementById('frame');
            var vidPosition = video.getBoundingClientRect();
            var height = vidPosition.height;
            console.log("Video box height: " + height);


            var headerEl = document.getElementById('page-header');
            var positionInfo = headerEl.getBoundingClientRect();
            var bottom = positionInfo.bottom;
            var changeTopPos = $("#page-container");
            console.log("Bottom: " +  bottom);
            changeTopPos.css({
                top: bottom + "px"
            });
        });




// $("#current-year-button").click( function() {
//
//     console.log("YO");
//     console.log('HEY');
//     $("#page-nav-lists").hide();
// });
// $('#main-menu-button').hide();
// $('#current-year-button').hide();
    // $("#current-year-button").show();
    // $("#current-year").hide();
    // $("#current-year-button button").click(function() {
	// 		$("#current-year").show();
	// 	});
    // $('#enter-sp').on('click', function(){
    //     $('.vid-controller').fadeOut(400, function(){
    //         $(this).remove();
    //     });
    //     $('#videobg').animate({opacity: 0 }, 800).delay(1000, "fx").queue("fx", function (next) {
    //         $('#videobg-container').remove();
    //         next();
    //     });
    // });
    var container = $('#loaded-content');
    // $('.juror-img').on('click', function() {
    //     var index = $(this).index();
    //     container.empty( function(){
    //     });
    //     container.fadeIn(1000).load('pages/jurors.html');
    //     allSched.hide();
    //     home.hide();
    // });
    var screenings = $("#screenings");
    var home = $("#home");
    var education = $('#education');
    var maps = $("#maps");
    var allSched = $(".sched-containers");
    var hamburger = $('#hamburger-icon');
    var mobile = $('#mobile-menu');
    $('#logo-banner').on('click', function() {
        container.empty();
        allSched.hide();
        home.fadeIn(1000);
        // allSched.hide();
        $('#sched-list').fadeOut();
        $('#about-list').fadeOut();
        $('#mobile-menu').hide();
        container.hide().empty();
        hamburger.removeClass('active');
        // $('#hamburger-icon').toggleClass('active');
    });

    $('#sched-list div').on('click', function() {
        var index = $(this).index();
        container.empty();
        $('.nav-list').fadeOut();
        home.hide();
        allSched.hide();
        if (index === 0) {
            screenings.fadeIn(1000);
        }
        else {
            education.fadeIn(1000);
        }
    });
    $('#mobile-sched-list div').on('click', function() {
        var index = $(this).index();
        container.empty();
        hamburger.toggleClass('active');
        $('#mobile-menu').toggle();
        home.hide();
        allSched.hide();
        if (index === 0) {
            screenings.fadeIn(1000);
        }
        else {
            education.fadeIn(1000);
        }
    });
    $('#main-menu-button button').on('click', function() {
        var index = $(this).index();
        home.hide();
        allSched.hide();
        container.hide().empty();
        $('.nav-list').fadeOut();
        if (index === 0) {
            container.fadeIn(1000).load('pages/festival.html');
        }
        else if (index === 1) {
            maps.fadeIn(1000);
        }
        else if (index === 2) {
            container.fadeIn(1000).load('pages/jurors.html');
        }
        else if (index === 3) {
            container.fadeIn(1000).load('pages/the-team.html');
        }
        else if (index === 4) {
            container.fadeIn(1000).load('pages/history.html');
        }
        else if (index === 5) {
            container.fadeIn(1000).load('pages/press.html');
        }
        else if (index === 6) {
            container.fadeIn(1000).load('pages/sponsors.html');
        }
        else {
            container.fadeIn(1000).load('pages/guidelines.html');
        }
    });
    $('#mobile-about-list div').on('click', function() {
        var index = $(this).index();
        home.hide();
        allSched.hide();
        container.hide().empty();
        hamburger.toggleClass('active');
        $('#mobile-menu').toggle();
        // $('.nav-list').fadeOut();
        if (index === 0) {
            container.fadeIn(1000).load('pages/festival.html');
        }
        else if (index === 1) {
            maps.fadeIn(1000);
        }
        else if (index === 2) {
            container.fadeIn(1000).load('pages/jurors.html');
        }
        else if (index === 3) {
            container.fadeIn(1000).load('pages/the-team.html');
        }
        else if (index === 4) {
            container.fadeIn(1000).load('pages/history.html');
        }
        else if (index === 5) {
            container.fadeIn(1000).load('pages/press.html');
        }
        else if (index === 6) {
            container.fadeIn(1000).load('pages/sponsors.html');
        }
        else {
            container.fadeIn(1000).load('pages/guidelines.html');
        }
    });
    var hamburger = $('#hamburger-icon');
    var mobile = $('#mobile-menu');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        mobile.toggle('slow');
        return false;
    });
    // var $contactForm = $('#my-form');
    // $contactForm.submit(function(e) {
    // 	e.preventDefault();
    // 	$.ajax({
    // 		url: '//formspree.io/ivar@plusgallery.com',
    // 		method: 'POST',
    // 		data: $(this).serialize(),
    // 		dataType: 'json',
    // 		beforeSend: function() {
    // 			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    // 		},
    // 		success: function(data) {
    // 			$contactForm.find('.alert--loading').hide();
    // 			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
    // 		},
    // 		error: function(err) {
    // 			$contactForm.find('.alert--loading').hide();
    // 			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
    // 		}
    // 	});
    // });
});
