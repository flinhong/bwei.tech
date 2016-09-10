/*
* Theme Name: Zeit
* File name: app.js
* Theme URL: zeit.mordorthemes.com
* Description: Zeit - Coming Soon Template
* Author: Mordorthemes
* Author URL: http://www.mordorthemes.com
* Support: support@mordorthemes.com
* Version: 1.0
*/



// initialize foundation framework
$(document).foundation()


/* ==============================================
	Page Preloader
=============================================== */
$(window).load(function() { 
    'use strict';
    $("#loader").delay(500).fadeOut(); 
    $(".mask").delay(1000).fadeOut("slow");
});


// start ready function
$(document).ready(function() {

    "use strict";



    // countdown settings
    $("#clock").countdown("2016/12/01", function(event) {
        $(this).text(event.strftime('%D days %Hh %Mm %Ss'));
    });


    // Text Rotator 
    $("#rotate").rotator({
        speed:3e3,
        transition_speed:500,
        sub_selector:".rotate"
    });






    // show/hide content in homepage
    $('#main-menu a').click(function() {

        $('.home-content').fadeOut('slow');

    });

    $('.reveal .close-button').click(function() {

        $('.home-content').fadeIn('slow');

    });


    /*Portfolio Carousel */
    $("#portfolio-carousel").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        pagination: true,
        paginationSpeed : 400,
        autoPlay: false,
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : 2 // itemsMobile disabled - inherit from itemsTablet option
    });	

    $('#portfolio-carousel a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0,2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
        // other options
    });





    /* ==============================================
    Contact Form
    =============================================== */
    $('#contactform').submit(function(){

        'use strict';

        var action = $(this).attr('action');

        $("#message").slideUp(300,function() {
            $('#message').hide();

            $('#submit')
                .after('<img src="img/ajax-loader.gif" class="loader" />')
                .attr('disabled','disabled');

            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val()
            },
                   function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(300);
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
                  );

        });

        return false;

    });
    
    

    /* ==============================================
    Newsletter Subscription Form
    =============================================== */
    $('#subscribe').submit(function(){

        var action = $(this).attr('action');

        $("#message-subscribe").slideUp(300,function() {
            $('#message-subscribe').hide();

            $('#ssubmit')
                .after('<img src="img/ajax-loader.gif" class="subscribe-loader" />')
                .attr('disabled','disabled');

            $.post(action, {
                email: $('#semail').val()
            },
                   function(data){
                document.getElementById('message-subscribe').innerHTML = data;
                $('#message-subscribe').slideDown(300);
                $('#subscribe img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
                $('#ssubmit').removeAttr('disabled');
                if(data.match('success') != null) $('#subscribe').slideUp('slow');

            }
                  );

        });

        return false;

    });


});
// end ready function



