function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(800, 400);

	posenet = ml5.poseNet(video, modelloaded);
	posenet.on('pose', gotresult);
}
 
function modelloaded(){
	console.log("modelloaded");
}

function gotresult(results){
	if(results.length > 0){
		nosex = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}