
$(window).on('load', function() {
    var headerEl = document.getElementById('page-header');
    var headPositionInfo = headerEl.getBoundingClientRect();
    var bottomOfHead = headPositionInfo.bottom;
    var changeTopPos = $("#page-container");
    changeTopPos.css({
        top: bottomOfHead + "px"
    });
});

// JQuery
$(document).ready( function() {
// keep content below header //
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
// keep content below header //
    $("#current-year-button").click(function(){
        $("#sub-menu-list").hide();
        $("#sched-map").hide();
        $("#jurors-page").hide();
        $("#team-page").hide();
        $("#sponsors-page").hide();
        $("#press-page").hide();
        $("#about-page").hide();
        $("#history-page").hide();
        $("#home-page").show();
    });
    $("#main-menu-button").click(function(){
        $("#sub-menu-list").toggle(function(){
        });
    });
    $("#map-sched").click(function(){
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
        $("#sub-menu-list").toggle(function(){
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
