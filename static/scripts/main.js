var kiguQuest = {};

//See if a character exists already and if not use character defaults
if (localStorage.getItem('kiguQuest.character')) {
    kiguQuest.character = JSON.parse(localStorage.getItem('kiguQuest.character'));
} else {
    kiguQuest.character = {
        hair: 'light',
        gender: 'dude',
        name: 'nameless',
        level: 1
    }
}
console.log(kiguQuest.character);

//Load current character properties
$('.char span').addClass(kiguQuest.character.hair);


//Set up initial steps of character creation
//maybe a better way to do this later
kiguQuest.currentStep = 1;
var stepHeading = $('.step-name');
var charImage = $('.char');
var charTitle = $('.char-title')
var charHair = $('.hairstyles')

//STEP ONE - Choose character
if (kiguQuest.currentStep = 1) {

    $(stepHeading).html('Choose your adventurer!');

    //Display character descriptions
    $(charImage).on('mouseover', function() {
        if ($(this).hasClass('gal')) {
            $(charTitle).html("Totally Awesome Gal");
        } else {
            $(charTitle).html("Super Amazing Dude");
        }
    });

    $(charImage).on('mouseout', function() {
        $(charTitle).html("Choices are tough, but they gotta be made...");
    });

    //Click a character
    $(charImage).on('click', function() {
        if ($(this).hasClass('gal')) {
            kiguQuest.character.gender = 'gal';
            $(charHair).addClass('gal-hair');
            $('.dude').addClass('hide');
            $(this).addClass('central');
        } else {
            kiguQuest.character.gender = 'dude';
            $(charHair).addClass('dude-hair');
            $('.gal').addClass('hide');
            $(this).addClass('central');
        }
        console.log('Gender is now ' + kiguQuest.character.gender);
        localStorage.setItem('kiguQuest.character', JSON.stringify(kiguQuest.character));
        $(charTitle).hide();
        $(charHair).show();
        kiguQuest.currentStep = 2;
    })
}

//STEP TWO - Choose hair
if (kiguQuest.currentStep = 2) {
    var currentHair = $('.hairstyles li');

    $(stepHeading).html('<span>Fantastic choice!</span><br> How about some fancy hair?');

    $(currentHair).on('mouseover', function() {
        var hoveredColour = $(this).attr('class');
        //show example of hair
        $('.char span').removeClass().addClass(hoveredColour);
    });

    $(currentHair).on('click', function() {
        var hoveredColour = $(this).attr('class');
        kiguQuest.character.hair = hoveredColour;
        localStorage.setItem('kiguQuest.character', JSON.stringify(kiguQuest.character));
        console.log('Hair is now ' + kiguQuest.character.hair);

        $(charHair).hide();
        $('.character-name, .button').show();
        kiguQuest.currentStep = 3;
    });
}

//STEP THREE - Choose name
if (kiguQuest.currentStep = 3) {
    $(stepHeading).html('<span>Very sophisticated!</span><br>Who are you anyway?');
        //Pick a name
        $('.button').on('click', function() {
            var chosenName = $('.character-name').val();

            $('.character-name, .button').hide();
            kiguQuest.character.name = chosenName;
            localStorage.setItem('kiguQuest.character', JSON.stringify(kiguQuest.character));
            console.log('Name is now ' + kiguQuest.character.name);
            kiguQuest.currentStep = 4;
        });
}

//STEP FOUR - Complete
if (kiguQuest.currentStep = 4) {
    $(stepHeading).html('Yay! Your character is ready!');
}
