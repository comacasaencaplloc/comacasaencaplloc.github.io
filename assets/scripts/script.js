var playlist = [{
    'date': '1',
    'label': 'The Wannadies - You & Me Song',
    'url': 'assets/songs/1 - The Wannadies - You & Me Song.mp3'
},
{
    'date': '2',
    'label': 'Second - Todas las Cosas',
    'url': 'assets/songs/2 - Second - Todas las Cosas.mp3'
}];

var imagelist = [
];


function showInfo(message) {
    snackbar.innerHTML = message || "";
    snackbar.className = "show";
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 5000);
}
function playSong(index) {
    var songData = playlist[index];
    audioSource.src = songData.url;
    music.load();

    var songInfo = "Now playing: " + songData.label;
    showInfo(songInfo);
    music.play();
}

// Load playlist
var currentTrack = 0;

music.addEventListener("ended", function () {
    currentTrack++;
    currentTrack = currentTrack % playlist.length;
    playSong(currentTrack);
});

// Start playing
playSong(currentTrack);

// Load imagelist
var root = document.querySelector('.splide__list');
for (var i in imagelist) {
    var elem = document.createElement('li')
    elem.className = 'splide__slide wrapper';
    var image = document.createElement('img');
    image.src = imagelist[i].url;
    elem.appendChild(image);
    var label = document.createElement('h1');
    label.className = 'trueCenter';
    label.innerHTML = imagelist[i].label;
    elem.appendChild(label);
    root.appendChild(elem);
}

var defaults = {
    words: { //words displayed into the countdown
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true, // use plurals
    inline: false, // set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, // Use UTC or not - default : false
    onEnd: function () { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: true
};
simplyCountdown('#together.countdown', Object.assign(defaults, {
    year: 2010, // required
    month: 10, // required
    day: 3, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0
}));
simplyCountdown('#married.countdown', Object.assign(defaults, {
    year: 2016, // required
    month: 4, // required
    day: 10, // required
    hours: 13, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0
}));
simplyCountdown('#family.countdown', Object.assign(defaults, {
    year: 2017, // required
    month: 3, // required
    day: 29, // required
    hours: 15, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 0
}));

new Splide('.splide', {
    perPage: 1,
    cover: false,
    height: '12rem',
    lazyLoad: 'nearby',
    cover: true,
    breakpoints: {
        height: '8rem',
    }
}).mount();
