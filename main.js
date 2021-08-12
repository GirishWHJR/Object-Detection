status=""
function bedroom(){
    window.location="bedroom.html";
}
function fan(){
    window.location="fan.html"
}
function fruits(){
    window.location="fruits.html"
}
function desk(){
    window.location="desk.html"
}
function tv(){
    window.location="tv.html"
}
function ac(){
    window.location="ac.html"
}
function preload()
{
    img = loadImage ('');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
    {
     console.log("Model Loaded!");
     status= true;
     objectDetector.detect(img, gotResults);
    }

    function gotResults(error, results){
        if(error){
            console.log(error);
        }
        else
        console.log(results);
    }
