// Get current properties of a character from local storage
var characterGender = localStorage.getItem('characterGender');
var characterHair = localStorage.getItem('characterHair');
//if hair isn't picked yet, use default
if (characterHair == null) {
    characterHair = 'med';
}
var characterName = localStorage.getItem('characterName');

console.log('Character gender is '+characterGender);
console.log('Character hair is '+characterHair);
console.log('Character name is '+characterName);


//Later - see if I can store these all as one object in localstorage
//Needs to be stringified and then parsed to do this
var myCharacter = {
    "name": '',
    "gender": '',
    "level": 1
}

console.log(myCharacter);
localStorage.setItem('myCharacter', JSON.stringify(myCharacter));

var retrievedObject = localStorage.getItem('myCharacter');
console.log(JSON.parse(retrievedObject));

////////////////////////////////////////////////////////////////////


$(function() {
    //Load current character properties
    $('.char span').addClass(characterHair);

    //Set up initial steps of character creation
    //maybe a better way to do this later
    var stepHeading = $('.step-name');
    var step1 = 'Choose your adventurer!';
    var step2 = '<span>Fantastic choice!</span><br> How about some fancy hair?';
    var step3 = '<span>Very sophisticated!</span><br>Who are you anyway?';
    var step4 = 'Yay! Your character is ready!';

    $(stepHeading).html(step1);

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

    //STEP ONE - Pick a character
    $('.char').on('click', function() {
        if ($(this).hasClass('gal')) {
            localStorage.setItem('characterGender','gal');
            $('.hairstyles').addClass('gal-hair');
            $('.dude').addClass('hide');
            $(this).addClass('central');
        } else {
            localStorage.setItem('characterGender','dude');
            $('.hairstyles').addClass('dude-hair');
            $('.gal').addClass('hide');
            $(this).addClass('central');
        }
        characterGender = localStorage.getItem('characterGender');
        console.log('Gender is now ' + characterGender);

        //STEP TWO - Pick a hair colour
        $('.char-title').hide();
        $('.hairstyles').show();
        $(stepHeading).html(step2);

        $('.hairstyles li').on('mouseover', function() {
            var hoveredColour = $(this).attr('class');
            //show example of hair
            $('.char span').removeClass().addClass(hoveredColour);
        })

        $('.hairstyles li').on('click', function() {
            var hoveredColour = $(this).attr('class');
            localStorage.setItem('characterHair', hoveredColour);

            characterHair = localStorage.getItem('characterHair');
            console.log('Hair is now ' + characterHair);

            $('.hairstyles').hide();
            $('.character-name, .button').show();
            $(stepHeading).html(step3);

            //Pick a name
            $('.button').on('click', function() {
                var chosenName = $('.character-name').val();
                localStorage.setItem('characterName', chosenName);

                characterName = localStorage.getItem('characterName');
                console.log('Name is now ' + characterName);

                $('.character-name, .button').hide();
                $(stepHeading).html(step4);
            })
        })
    });

});