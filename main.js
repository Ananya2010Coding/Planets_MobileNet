x = 0;
y = 0;
sun = "";
mercury = "";
venus = "";
earth = "";
mars = "";
jupiter = "";
saturn = "";
uranus = "";
neptune = "";

function setup(){
    canvas = createCanvas(900 , 500);
    canvas.position(300,190);
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function listen(){
    document.getElementById("status").innerHTML = "System is listening. Please speak.";
    recognition.listen();
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as: "+content;

    if(content == "mercury"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting MERCURY";
        mercury = "set";
    }

    if(content == "venus"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting VENUS";
        venus = "set";
    }

    if(content == "earth"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting EARTH";
        earth = "set";
    }

    if(content == "mars"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting MARS";
        mars = "set";
    }

    if(content == "jupiter"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting JUPITER";
        jupiter = "set";
    }

    if(content == "saturn"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting SATURN";
        saturn = "set";
    }

    if(content == "uranus"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting URANUS";
        uranus = "set";
    }

    if(content == "neptune"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting neptune";
        neptune = "set";
    }

    if(content == "sun"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Started putting SUN";
        sun = "set";
    }
}

function draw(){
    if(mercury == "set"){
        image("Mercury.png", x,y,100,100);
        document.getElementById("status").innerHTML = "Mercury is put in :)";
        mercury = "";
    }
    if(venus == "set"){
        image("Venus.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Venus is put in :)";
        venus = "";
    }
    if(earth == "set"){
        image("Earth.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Earth is put in :)";
        earth = "";
    }
    if(mars == "set"){
        image("Mars.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Mars is put in :)";
        mars = "";
    }
    if(jupiter == "set"){
        image("Jupiter.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Jupiter is put in :)";
        jupiter = "";
    }
    if(saturn == "set"){
        image("Saturn.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Saturn is put in :)";
        saturn = "";
    }
    if(uranus == "set"){
        image("Uranus.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Uranus is put in :)";
        uranus = "";
    }
    if(neptune == "set"){
        image("Neptune.png", x,y,60,60);
        document.getElementById("status").innerHTML = "Neptune is put in :)";
        neptune = "";
    }
    if(sun == "set"){
        image("Sun.png", x,y,80,80)
    }
}