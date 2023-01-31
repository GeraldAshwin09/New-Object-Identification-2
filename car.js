status="";
img="";
objects=[];

function preload()
{
   img= loadImage('c.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status1").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status = true;

}

function draw()
{
image(img ,0, 0, 640, 420);
}  


function back1()
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
    
    objects = results;
}