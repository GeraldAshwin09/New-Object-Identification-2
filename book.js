status="";
img4="";
objects3=[];
function preload()
{
   img4= loadImage('gp.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status4").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status = true;

}

function draw()
{
image(img4 ,0, 0, 640, 420);
}  

function back4()
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
    
    objects4 = results;
}