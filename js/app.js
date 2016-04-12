

//fixed header
$(document).ready(function() {
    (function() {
        //settings
    var fadeSpeed = 200, fadeTo = 1, topDistance = 3
    0;
    var topbarME = function() { $('#uberbar').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#uberbar').fadeTo(fadeSpeed,fadeTo); };
    var inside = false;
    //do
    $(window).scroll(function() {
        position = $(window).scrollTop();
        if(position > topDistance && !inside) {
        //add events
        topbarML();
        $('#uberbar').bind('mouseenter',topbarME);
        $('#uberbar').bind('mouseleave',topbarML);
        inside = true;
    }
    else if (position < topDistance){
        topbarME();
        $('#uberbar').unbind('mouseenter',topbarME);
        $('#uberbar').unbind('mouseleave',topbarML);
        inside = false;
    }
    });
    })();
    });

//changing header on home page

// $("#body").scroll( function() {
//     var value = $(this).scrollTop();
//     if ( value > 120 )
//         $("#header").css("border", "1px solid blue");
//     else
//         $("#header").css("border", "1px solid green");
// });
























