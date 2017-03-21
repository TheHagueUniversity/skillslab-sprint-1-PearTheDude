

var subtitle = [
    "If i was a fish i would swim good - Martin",
    "-placeholder-",
    "No plebs allowed",
    "Drink water. Or you might die",
    "My name is (not) Jeff",
    "The cake is a lie",
    "When homeless is asking you something say CYKA BLYAT",
    "Both bullets hit each other, so they cancle each other out, and that's how you survive",
    "So, a dyslexic man walks into a bra...",
    "So Jesus happenned, like 2017 years ago...",
    "Will it joint?",
    "This thing is, like, INTENSE",
    "Its like dying pigs you know- AWEEEEAK",
    "You pass butter",
    "Spice it up"
    
    
    
    
];

var randomnumber = Math.floor(Math.random() * (14 - 0 + 0)) + 0;
console.log(randomnumber);

document.getElementById('subtitle').innerHTML = subtitle[randomnumber] ;