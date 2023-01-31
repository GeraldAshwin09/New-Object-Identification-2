status2="";
img2="";
object2=[];
function preload()
{
   img2= loadImage('srk.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status2").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status = true;

}

function draw()
{
image(img2 ,0, 0, 640, 420);
}  

function back2()
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
    
    objects2 = results;
}