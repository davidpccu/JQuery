$(function() {

    lightning();

    var headIndex = 0,
        eyeIndex = 0,
        noseIndex = 0,
        mouthIndex = 0;

    $("#head").click(function() {
        if (headIndex < 9) {
            $("#head").animate({ left: "-=367px" }, 500);
            headIndex += 1;
        } else {
            headIndex = 0;
            $("#head").animate({ left: "0px" }, 500);
        }
    });

    $("#eyes").click(function() {
        if (eyeIndex < 9) {
            $("#eyes").animate({ left: "-=367px" }, 500);
            eyeIndex += 1;
        } else {
            eyeIndex = 0;
            $("#eyes").animate({ left: "0px" }, 500);
        }
    });

    function lightning() {
        $('#lightning1').fadeIn(300).fadeOut(300);
        $('#lightning2').fadeIn(300).fadeOut(300);
        $('#lightning3').fadeIn(300).fadeOut(300);
        setTimeout(lightning, 3000);
    }
});
