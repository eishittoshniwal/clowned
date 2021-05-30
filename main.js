noseX=0
noseY=0
wig=""
img=""
balloon=""
rightX=0
rightY=0
function preload() {
  img=loadImage("https://i.postimg.cc/KjvWKnDF/clowned-removebg-preview.png")
  wig=loadImage("https://i.postimg.cc/JntJG0Hv/CLOWN-WIGGED-removebg-preview.png")
  balloon=loadImage("https://i.postimg.cc/zfqGfGcN/ballooooooooooooon-removebg-preview.png")
}

function setup() {
   canvas=createCanvas(500,500)
   canvas.center() 
   //code for setting a live webcam
   video=createCapture(VIDEO)
   video.size(500,500)
   video.hide()
   //code for intializing pose net
   poseNet=ml5.poseNet(video,modelloaded)
//code for executing pose net
poseNet.on("pose",gotposes)
}

function draw() {
    image(video,0,0,500,500)
    fill("lime")
    stroke("black")
   circle(noseX,noseY,40)
   image(img,noseX-20,noseY-20,40,40)
   image(wig,noseX-110,noseY-230,220,240)
   image(balloon,rightX-100,rightY-350,300,300)
}

function snapshot() {
    save("life.png")
}

function modelloaded() {
    console.log("model is loadeddddd")
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)   
        console.log("nosex= "+ results[0].pose.nose.x) 
        console.log("nosey= "+ results[0].pose.nose.y)
        noseY=results[0].pose.nose.y
        noseX=results[0].pose.nose.x
        rightX=results[0].pose.rightWrist.x
        rightY=results[0].pose.rightWrist.y 
    
    }
    
}