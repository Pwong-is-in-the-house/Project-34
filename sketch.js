const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint=Matter.MouseConstraint
var pendObj,pendObj2,pendObj3,pendObj4,pendObj5
var sling,sling2,sling3,sling4,sling5;
var canvasmouse,options;
function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5)
 	engine = Engine.create();
	world = engine.world;
	let canvasmouse= Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options= {
		mouse:canvasmouse
	};
	mConstraint= MouseConstraint.create(engine,options);
	World.add(world,mConstraint)
	pendObj=new Pendulum(200,450,40);
	pendObj2=new Pendulum(200,450,40);
	pendObj3=new Pendulum(200,450,40);
	pendObj4=new Pendulum(200,450,40);
	pendObj5=new Pendulum(200,450,40);
	sling=new Sling(200,450,10,40)
	sling2=new Sling(200,450,10,40)
	sling3=new Sling(200,450,10,40)
	sling4=new Sling(200,450,10,40)
	sling5=new Sling(200,450,10,40)
	Engine.run(engine);
  
}


function draw() {
	pendObj.display();
	pendObj2.display();
	pendObj3.display();
	pendObj4.display();
	pendObj5.display();
	sling.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
}
function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}
