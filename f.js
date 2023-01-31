status5="";
img5="";
objects5=[];
function preload()
{
   img5= loadImage('fr.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status5").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status = true;

}

function draw()
{
image(img5 ,0, 0, 640, 420);
}  

function back5()
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
    
    objects5 = results;
}