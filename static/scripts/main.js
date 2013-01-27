// Teh Javascripts!
var characterGender = localStorage.getItem('characterGender');
console.log(characterGender);

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

    //Pick a character
    $('.char').on('click', function() {
        if ($(this).hasClass('gal')) {
            localStorage.setItem('characterGender','gal');
            $('.dude').addClass('hide');
            $(this).addClass('central');
        } else {
            localStorage.setItem('characterGender','dude');
            $('.gal').addClass('hide');
            $(this).addClass('central');
        }
        characterGender = localStorage.getItem('characterGender');
        console.log('is now ' + characterGender);


    });

});