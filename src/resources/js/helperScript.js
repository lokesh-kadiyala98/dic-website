const $ = window.$;

$(document).ready(function() {
    $('.fa-hand-holding-heart').click(() => {
        var $i = $("<i>", {"class": "fa fa-heart icon-small"});
        $(".fa-hand-holding-heart").append($i);
        $('.fa-heart').fadeIn(1).animate({'marginTop': '-15px'});
        $('.fa-heart').fadeOut(1);
        setTimeout(() => {
            $('.fa-hand-holding-heart .fa-heart').first().remove();
        }, 500)
    });
});