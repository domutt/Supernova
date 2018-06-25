
// JQuery

$(window).on('load', function() {

    var headerEl = document.getElementById('banner');
    var headPositionInfo = headerEl.getBoundingClientRect();
    var bottomOfHead = headPositionInfo.bottom;
    // console.log("Bottom: " +  bottomOfHead);
    var changeTopPos = $("#page-container");
    changeTopPos.css({
        top: bottomOfHead + "px"
    });
    $('#overlay').delay(1000).fadeOut(function (){
    });
    // $('#page-header').fadeIn(function(){
    // });

    // $('#page-container').fadeIn();





});

$(document).ready( function() {
// keep content below header //
    $('#play-video').on('click', function(e) {
        $("#v-frame-overlay").fadeOut(function(){

        });
        $("#frame")[0].src += "&autoplay=1";
        e.preventDefault();
    });
    $(window).resize(function() {
        // var video = document.getElementById('frame');
        // var vidPosition = video.getBoundingClientRect();
        // var height = vidPosition.height;
        // console.log("Video box height: " + height);
        var headerEl = document.getElementById('banner');
        var positionInfo = headerEl.getBoundingClientRect();
        var bottom = positionInfo.bottom;
        var changeTopPos = $("#page-container");
        changeTopPos.css({
            top: bottom + "px"
        });

        // var programEl = document.getElementsByClassName('program');
        // var programBase = programEl.getBoundingClientRect();
        // var bottomOfProgram = programBase.bottom;
        // var changeImagePos = $(".award-image");
        // changeImagePos.css({
        //     bottom: bottomOfProgram + "px"
        // });
    });
// keep content below header //
    $("#current-year-button").click(function(){
        $("#sub-menu-list").fadeOut(function(){
            // $("#home-page").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#sched-map").hide();
        });
        $("#home-page").show();
    });
    $("#main-menu-button").click(function(){
        $("#sub-menu-list").fadeToggle();

        // if ($("#sub-menu-list").css("right", "-250px")){
        //     $( "#sub-menu-list" ).animate({
        //         // opacity: 0.25,
        //         "right" : "+16"
        //         // height: "toggle"
        //     }, 1000);
        //
        // }
        // else if ($("#sub-menu-list").css("right", "16px")) {
        //     $( "#sub-menu-list" ).animate({
        //         // opacity: 0.25,
        //         "left": "-250px"
        //         // height: "toggle"
        //     }, 1000);
        // }


        // $("#flip").click(function () {
           // $("#sub-menu-list").toggle("slide", { direction: "left" }, 1000);
       // });
        // $("#sub-menu-list").show().animateCss({"margin-right": "16px;"}, 500, function(){
        });
    // });
    $("#map-sched").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#sched-map").show();
        });
    });
    $("#jurors").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#jurors-page").show();
        });
    });
    $("#team").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#jurors-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#team-page").show();

        });
    });
    $("#sponsors").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#sponsors-page").show();

        });
    });

    $("#press").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#about-page").hide();
            $("#history-page").hide();
            $("#press-page").show();

        });
    });

    $("#about").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#history-page").hide();
            $("#about-page").show();

        });
    });

    $("#history").click(function(){
        $("#sub-menu-list").fadeToggle(function(){
            $("#home-page").hide();
            $("#sched-map").hide();
            $("#jurors-page").hide();
            $("#team-page").hide();
            $("#sponsors-page").hide();
            $("#press-page").hide();
            $("#about-page").hide();
            $("#history-page").show();

        });
    });


});

//# sourceMappingURL=../maps/app.js.map
