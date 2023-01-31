status3="";
img3="";
objects3=[];
function preload()
{
   img3= loadImage('amg.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status3").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status = true;

}

function draw()
{
image(img3 ,0, 0, 640, 420);
}  

function back3()
{
    window.location="index.html";
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    
    objects3 = results;
}