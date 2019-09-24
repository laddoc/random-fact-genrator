// Random facts array
let randomList =
    ["Some Cats are allergic to humans",
        "The Moon is slowing the Earth’s rotation",
        "Hot water freezes faster than cold water",
        "The wave-like blob of toothpaste, you put on your toothbrush this morning, is called a nurdle",
        "An aglet is the plastic or metal tube on the tip of shoelaces",
        "Greenland is ice, Iceland is green",
        "In Switzerland, it is illegal to own a single Goldfish or Guinea Pig",
        "A bolt of lightning has enough energy to toast 100,000 slices of bread",
        "Cherophobia, is when a person has an irrational fear of happiness",
        "“Steady Ed” Headrick, the inventor of the frisbee, was turned into frisbees after he died"];

// This sets a random array as the first guess 
let facts = randomList[Math.floor(Math.random() * randomList.length)];

// This function changes the facts variable to a random array
let randomize = () => {
    return facts = randomList[Math.floor(Math.random() * randomList.length)];
}


// this hides the span
$("span").hide();
$('.reset').hide();

// to give the button a function
$(".btn").click(function () {
    // to reveal the big secret
    $("span").html(facts).show();
    // to show the reset button
    $('.reset').show();
    // to hide the button
    $(".btn").hide();
})

$('.reset').click(function () {
    $(this).hide();
    $('.btn').show();
    $("span").hide();
    randomize();
})

$('body').ready(function () {
    let move = 0;
    setInterval(function () {
        move += 1;
        $('body').css('background-position-x', + move + 'px');
    }, 50)
})

// $('#container').ready(function () {
//     let move = 0;
//     setInterval(function () {
//         move += 1;
//         $('#container').css('background-position-x', + move + 'px');
//     }, 1000)
// })