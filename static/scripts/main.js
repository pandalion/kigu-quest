// Teh Javascripts!
localStorage.setItem('character_gender','gal');
var character_gender = localStorage.getItem('character_gender');

$(function() {
    //Display character descriptions
    $('.char').on('mouseover', function() {
        var galDesc = "Totally Awesome Gal";
        var dudeDesc = "Super Amazing Dude";

        if ($(this).hasClass('gal')) {
            $('.char-title').html(galDesc);
        } else {
            $('.char-title').html(dudeDesc);
        }
    });

    $('.char').on('mouseout', function() {
        var nochoiceDesc = "Choices are tough, but they gotta be made...";
        $('.char-title').html(nochoiceDesc);
    });
});