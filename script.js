alert('Welcome to my website!')
var name = true;

var name = prompt('What is your name?');

alert('Hello '+name);

var audioPlaying = false;
        function music(){
            var audio = document.getElementById("bgMusic");
            if (!audioPlaying) audio.play();
            else audio.pause();
            audioPlaying = !audioPlaying;
        }