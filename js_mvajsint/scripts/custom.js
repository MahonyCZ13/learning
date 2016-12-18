// ex_0.0 Sandbox
function sandbox() {
    //ex_0.1 Itirrating through an Array
    function itArray() {
        var firstArray = [];
        
        firstArray[0] = "first";
        firstArray[1] = "second";
        firstArray[2] = "third";
        firstArray[3] = "fourth";

        for (var i = 0; i < firstArray.length; i++) {
            console.log('ex_0.1 [loop]: ' + firstArray[i]);
        }
    }
    itArray();

    // ex_0.2 FizzBuzz
    function fizzBuzz(topNumber) {
        var fizzNumber = 1;
        while (fizzNumber <= topNumber) {
            if(fizzNumber % 3 === 0 && fizzNumber % 5 === 0) {
                console.log('Fizz Buzz');
            }
            else if (fizzNumber % 3 === 0) {
                console.log('Fizz');
            }
            else if (fizzNumber % 5 === 0) {
                console.log('Buzz');
            }
            else {
                console.log(fizzNumber);
            }
            fizzNumber++;
        }
    }
    fizzBuzz(100);

    // ex_0.3 pyramid
    function pyramid() {
        for (var block = "#"; block.length < 8; block+= "#") {
            console.log(block);
        }
    }
    pyramid();

    // ex_0.4 chess board
    function chess() {
        var size = 8;
        var board = "";

        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                if ((x + y) % 2 == 0) {
                    board += " ";
                }
                else {
                    board += "#";
                }
            }
            board += "\n";
        }
        console.log(board);
    }
    chess();
}

// ex_1.0 Alive test
function pressMe() {
    var aliveText = "ex_1.1: Yes I am, here in the console";
    console.log(aliveText);
}

// ex_2.0 Change the content of paragraph tag with user inputed value
function subtitute() {
    var myValue = document.getElementById('myText').value;

    if(myValue.length == 0) {
        alert('ex_2.1: This is not a value...');
        return;
    }
    var myTitle = document.getElementById('title');
    myTitle.innerHTML = ('ex_2.1: ' + myValue);
}

// ex_3.0 Conditional statements function
function condition() {

    // ex_3.1 if statement
    var someValue = 24;

    if (someValue > 30) {
        console.log('ex_3.1: variable someValue is greater than 30');
    }
    else if (someValue < 30) {
        console.log('ex_3.1: variable someValue is lesser than 30');
    }
    // when 'if statement' is satisfied, it will not run further, therefor someValue === 24 will not verify
    else if (someValue === 24) {
        console.log('ex_3.1: variable someValue equals 24')
    }
    else {
        console.log('ex_3.1: the if statement no.1 was not satisfied');
    }

    //ex_3.2 evaluation of two values - AND
    var andValueOne = 25;
    var andValueTwo = 19;

    if (andValueOne > 20 && andValueTwo < 20) {
    console.log('ex_3.2: condition on both variables are met (AND)');
    }

    // ex_3.3 evaluation of two values - OR
    var orValueOne = 26;
    var orValueTwo = 16;

    if(orValueOne === 25 || orValueTwo === 16){
        console.log('ex_3.3: at least one condition of two variables is met (OR)');
    }

    // ex_3.4 evaluation of two values - not equal
    var notValueOne = 24;

    if (notValueOne !== 25){
        console.log('ex_3.4: variable is not equal 25 (not equal)');
    }

    // ex_3.5 true or false
    var tofResult = "";
    var tofValueOne = 25;

    myResult = (tofValueOne === 25) ? "equal" : "not equal";
    console.log('ex_3.5: ' + myResult);

    //ex_3.6 Switch statement
    var userName = "Rimmer";

    switch (userName) {
        case "Lister":
        console.log('ex_3.6: Care for a good curry?');
        break;
        case "Rimmer":
        console.log('ex_3.6: Welcome back, smeg head!');
        break;
        default:
        console.log('ex_3.6: Are you an emoHawk?');
    }

    // ex_3.7 switch time evaluation
    var rightNow = new Date();
    var currentHour = rightNow.getHours();

    switch(true) {
        case (currentHour > 8 && currentHour < 12):
        console.log('ex_3.7: Morning.');
        break;
        case (currentHour === 12):
        console.log('ex_3.7: Lunch.');
        break;
        case (currentHour > 12 && currentHour < 18):
        console.log('ex_3.7: Afternoon.');
        break;
        default:
        console.log('ex_3.7: After work, chill.');
    }
}

// ex_4.0 Functions

function functionLesson() {

    // ex_4.1 First function
    function myNewFunction() {
        console.log('ex_4.1: First function print out');
    }
    myNewFunction();

    // ex_4.2 function with argument/parameter
    function parFunction(fuValue) {
        console.log('ex_4.2: Hello ' + fuValue);
    } 
    parFunction('Petr');

    // ex_4.3 function with multiple arguments
    function add(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }
    var addResult = add(5, 15);
    console.log('ex_4.3: ' + addResult);

    //ex_4.4 function with variable values
    function addTwo() {
        var tempValue = 0;

        for (i = 0; i < arguments.length; i++) {
            tempValue += arguments[i];
        }
        return tempValue;
    }
    var addTwoResult = addTwo(1,2,3,4,5);
    console.log('ex_4.4: ' + addTwoResult);

    // ex_4.5 function as variable aka Function Literal
    var addMe = function() {
        return arguments[0] + arguments[1];
    }
    var addMeResult = addMe(3,2);
    console.log('ex_4.5: ' + addMeResult);

    // ex_4.6 anonymous function - important concept for jQuery
    var myAnonResult = (function () {
       return arguments[0] + arguments[1]; 
    })
    (1,6);
    console.log('ex_4.6: ' + myAnonResult);

    //ex_4.7 calling anonymous function directly
    console.log('ex_4.7: ' + (function () {
       return arguments[0] + arguments[1]; 
    })(10,6));
}

// ex_5.0 Arrays
function jsArrays() {

    // ex_5.1 First Array
    var candidates = [];

    candidates[0] = "Petr";
    candidates[1] = "Pepa";
    candidates[2] = "Jirka";

    console.log('ex_5.1: Number two in the czech array is ' + candidates[1]);

    // ex_5.2 Array in one line
    var candidatesInLine = ["Thomas", "John", "Jim"];
    console.log('ex_5.2: Number three in an Array is: ' + candidatesInLine[2]);

    // ex_5.3 Array with mixed datatype
    var flightDate = new Date("September 24, 2010");
    var myFlight = ["Oceanic", 815, flightDate];

    for (i in myFlight){
        console.log('ex_5.3 [loop]: ' + myFlight[i]);
    }

    // ex_5.4 Associative arays
    var caveList = [];

    caveList["Richard"] = 4;
    caveList["Henry"] = 8;
    caveList["Tom"] = 15;
    caveList["Bones"] = 24;
    caveList["Eliot"] = 30;
    caveList["Yngrid"] = 41;

    console.log('ex_5.4: Richards number is ' + caveList["Richard"]);
}

// ex_6.0 Looping statements
function loopingStatements(){

    // ex_6.0 Iteration array
    var playlist = [];

    playlist[0] = "Rammstein";
    playlist[1] = "Two steps from hell";
    playlist[2] = "Dragon age";
    playlist[3] = "ElderScrolls";
    playlist[4] = "Witcher";

    // ex_6.1 While statement
    var i = 0;
    while (i < playlist.length) {
        console.log('ex_6.1 [loop]: Currently playing - ' + playlist[i]);
        i++;
    }

    //ex_6.2 Do While statement
    var someResult = false;
    do {
        console.log('ex_6.2: This is the only print out.');
    }
    while (someResult);

    // ex_6.3 For Loop
   for (var i = 0; i < playlist.length; i++) {
       console.log('ex_6.3 [loop]: Name of album is ' + playlist[i]);
   }

   // ex_6.4 For .... in
   for (i in playlist) {
       console.log('ex_6.4 [loop]: This is ' + playlist[i]);
   }
}

// ex_7.0 Function scope vs Global scope
function globalScope() {

    //ex_7.1 Global vs function
    myScope = "global";
    console.log('ex_7.1: Outside and before the function: ' + myScope);
    (function() {
        var myScope = "function";
        console.log('ex_7.1: Inside of the function: ' + myScope);
        myScope = "changed global";
    })();
    console.log('ex_7.1: Outside and after the function: ' + myScope);

    //ex_7.2 Changing global variable inside of a function
    myScope = "global";
    console.log('ex_7.2: Outside and before the function: ' + myScope);
    (function() {
        myScope = "changed global";
        console.log('ex_7.2: Inside of the function: ' + myScope);
    })();
    console.log('ex_7.2: Outside and after the function: ' + myScope);

    //ex_7.3 Hoisting
    (function() {
        if (true) {
            var myScope = "changed global";
        }
        console.log('ex_7.3: if (true) then: ' + myScope);
    })();

    //ex_7.4 Accessing global variable through DOM window
    myScope = "variable in DOM!";
    console.log('ex_7.4: global variable stored in DOM window is ' + window.myScope);
}

// ex_8.0 Organizing and simplifying - Object literals
function simple() {

    // ex_8.1 Object literal
    var batwing = {
        status: "Ready",
        rescueBatman: function() {
            console.log('ex_8.1: Locating his transponder...');
        }
    }
    if (batwing.status === "Ready") {
        batwing.rescueBatman();
    }

    // ex_8.2 Object literal print all properties form batwing object
    var utilities = {
        printAllMembers: function(targetObject) {
            for (i in targetObject) {
                console.log('ex_8.2 [loop]: ' + targetObject[i]);
            }
        }
    }
     utilities.printAllMembers(batwing);

     // ex_8.3 empty object literal
     var iAmEmpty = { };
     console.log('ex_8.3: This should be undefined: ' + utilities.printAllMembers(iAmEmpty));

     // ex_8.4 Nested object properties
     var planet = {
         id: 34,
         name: "Impetemsta Nox",
         faction: {
             factionId: 2,
             name: "Nex",
             notification: function() {
                 console.log('ex_8.4: Nex alliance...Unite!');
             }
         },
         cities: [
             { locationId: 15, name: "Gladius" },
             { locationId: 16, name: "Cletius"},
             { locationId: 17, name: "Ensis"}
         ],
         orbit: "Low"
     };
     planet.faction.notification();
     console.log('ex_8.4: ' + planet.cities[1].name);
     console.log('ex_8.4: ' + planet.orbit);

     // ex_8.5 Changing the values
     console.log('ex_8.5: Original Value: ' + planet.name);
     planet.name = "Vultus";
     console.log('ex_8.5: New Value: ' + planet.name);

     // ex_8.6 object properties as variables
     var z = planet;
     console.log('ex_8.6: ' + z.name);

     // ex_8.7 adding new properties to an object
     if (typeof planet.defense === "undefined") {
         planet.defense = "Ion cannon";
     }
     console.log('ex_8.7: ' + planet.defense);

     // ex_8.8 iteration through the members of an object
     for (member in planet) {
         console.log('ex_8.8 [loop]: ' + member + " ==> " + planet[member]);
     }

     // ex_8.9 Using constructor 'this.'
     function car (make, model, year) {
         this.make = make;
         this.model = model;
         this.year = year;
     }
     var myCar = new car("Hyundai","i30","2014");
     var myOtherCar = new car("Skoda", "Fabia", "2004");
     console.log('ex_8.6: ' + myCar.make + " " + myCar.model);
     console.log('ex_8.6: ' + myOtherCar.make + " " + myOtherCar.model);
}

//ex_9.0 Document Object Model
function DOM() {

    // ex_9.1 getting the type of the element
    var myElement = document.getElementById('first'); 
    var myNode = myElement.nodeName;

    console.log('ex_9.1: ' + myNode);

    // ex_9.2 getting elements by tag name
    var listOfParagraphs = document.getElementsByTagName('p');
    console.log('ex_9.2: Number of paragraphs : ' + listOfParagraphs.length);

    // ex_9.3 getting specific paragraph
    var secondParagraph = listOfParagraphs[1];
    console.log('ex_9.3: Content of second paragraph: ' + secondParagraph.innerHTML);

    // ex_9.4 Get parent element
    mySecondElement = document.getElementById('first');
    console.log('ex_9.4: Parent is: ' + mySecondElement.parentNode.nodeName);

    // ex_9.4.1 DOM Tree retrievel

    /*
    myElement.childNodes[0];
    myElement.firstChild;
    myElement.lasChild;
    myElement.nextSibling;
    myElement.previousSibling;
    */

    // ex_9.5 Attributes retrievel
    var topLink = document.getElementById('top');
    var topLinkDestination = topLink.getAttribute('href');
    console.log('ex_9.5: ' + topLinkDestination);
}

// ex_10.0 Starting with jQuery
function jQueryStart() {

    // ex_10.1 jQuery test
    $(document).ready(function() {
        console.log('ex_10.1: jQuery works!');
        $.myCustomMethod();
    });

    // ex_10.2 Creating jQuery methods
    $.myCustomMethod = function() {
        console.log('ex_10.2: This log is written by custom jQuery method.');
    };

    // ex_10.3 Accessing elements using jQuery
    $('#top').html('<h2>ex_10.3: This is alternative Top title</h2>');

    $('#title').prepend('<h4>ex_10.3: Text above #title</h4>');

    $('#title').append('<h4>ex_10.3: Text bellow #title</h4>');
}

// ex_11 jQuery Selectors
function jqSelectors() {

     // ex_11.1 Selecting By element/tag
    $('p').addClass('pHighlight');

    // ex_11.2 Selecting By id
    $('#title').removeClass('pHighlight').addClass('IdHighlight');

    // ex_11.3 Selecting By class
    $('.chosen').removeClass('pHighlight').addClass('cHighlight');

    // ex_11.4 Selecting multiple elements
    $('#top, .alsoFirst').removeClass('pHighlight').addClass('comboHighlight');

    // ex_11.5 Selecting element using 'contains'
    $('li:contains("Three")').addClass('sliHighlight');

    // ex_11.6 Selecting element using 'next' and 'previous'
    $('li:contains("Three")').next().addClass('nliHighlight');
    
    $('li:contains("Three")').prev().addClass('nliHighlight');

    // ex_11.7 Selecting element using siblings and parent
    $('li:contains("Three")').siblings().removeClass('nliHighlight').addClass('sibliHighlight');

    $('li:contains("Three")').parent().addClass('parHighlight');

    // ex_11.8 Selecting element using children
    $('li:nth-child(1)').removeClass('sibliHighlight').addClass('childHighlight');

    // ex_11.9 Selecting by attributes - We can also use not equal $('p[name!="condition"]')
    $('p[name="condition"]').removeClass('pHighlight').addClass('attHighlight');

        // Select all paragraphs, that not include 'name' attribute in them
        $('p').not('[name]');

    // ex_11.10 Selecting by jQuery specific Selectors
    $(':header').addClass('headHighlight');

    $('p:empty').text('ex_11.10: jQuery added text');
}

// ex_12.0 jQuery Events
$(function () {
    // ex_12.1 
    $('#success').hide();
    $('#again').addClass('hoverOut');
    var score = 0;
    $('#gameImg').click(function() {
        score++;
        $('#score').text(score);
        $('#success').show('slow').fadeOut(500);
    });

    $('#again').hover(function() {
        score = 0;
        $('#score').text(score);
        $('#again').addClass('hoverIn').removeClass('hoverOut');
    }, 
    function() {
        $('#again').removeClass('hoverIn').addClass('hoverOut');
    });
});

// ex_13.0 Utilizing jQuery plugins
function jqPlugin() {

    // ex 13.1 standard plugins to jQuery like jQuery datepicker
    console.log('ex_13.1: jQuery UI plugin is referenced on this page.');
}

// ex_14.0 Unobtrusive JavaScript
function unJs() {

    //ex_14.1
    console.log('ex_14.1: All notes are saved in OneNote.');
}

// ex_15.0 jQuery retrieve JSON via Ajax
$(function() {

    // ex_15.1 getJSON method
    $('#clickMe').click(function() {
        $.getJSON('scripts/data.json', function(data) {
            var items = [];

            $.each(data, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');
            });
            $('<ul/>', {
                'class' : 'interest list',
                html: items.join('')
            }).appendTo('body');
        });
    });

    // ex_15.2 ajax method
    $('#clickMeAjax').click(function() {
        $.ajax({
            url: 'scripts/data.json',
            dataType: 'json',
            success: function(data) {
                var items = [];

            $.each(data, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');
            });
            $('<ul/>', {
                'class' : 'interest list',
                html: items.join('')
            }).appendTo('body');
            },
            statusCode: {
                404: function() {
                    alert('404 not found');
                }
            }
        });
    });
});

// ex_16.0 JavaScript closures
$(function() {
    function buildACat() {
        var catName = "Mr. Tribbles";
        function catFactory() {
            alert(catName);
        }
        catFactory();
    }
    $('#buildcat').click(function() {
        buildACat();
    });
});