$(document).ready(function() {
    setInterval(lightning, 3000);

    function lightning() {
        $('#lightning1').fadeIn(300).fadeOut(300);
        $('#lightning2').fadeIn(300).fadeOut(300);
        $('#lightning3').fadeIn(300).fadeOut(300);
    }
    let headIndex = 0;
    $('#head').click(function() {
        if (headIndex < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            headIndex++;
        } else {
            $(this).animate({ left: "0" }, 800);
            headIndex = 0;
        }
    });
});
