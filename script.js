audiogo = new Audio('outsound.mp3');
audio   = new Audio('bgmusic.mp3');
audiojump= new Audio('jumpsound.mp3');
score = 0;
collision = false;

player_scores = []

function updateScore(score){
	scoreCont.innerHTML = "YOUR SCORE:" + score;
}


function checkcollision(){
	
	jerry = document.querySelector('.jerry');
	gameOver = document.querySelector('.gameOver');
	tom = document.querySelector('.tom');
	
	jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
	jy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));
	tx = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
	ty = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));
	
	offsetX = Math.abs(jx-tx);
	offsetY = Math.abs(jy-ty);
	
	if(offsetX<80 && offsetY<40){
        collision = true;
        player_scores.push(score)
        console.log(player_scores);
		gameOver.style.visibility = 'visible';
		tom.classList.remove('aniTom');
		audiogo.play();
		audio.pause();
		audio.currentTime = 0;
	}	
}

document.onkeydown = function(e){

	if(e.keyCode==38 || e.keyCode==32){
		audiojump.play();
		jerry = document.querySelector('.jerry');
		jerry.classList.add('aniJerry');
		setTimeout(function(){
			jerry.classList.remove('aniJerry');
		},700);
	}

	if(e.keyCode==13 || e.keyCode==32){
		tom = document.querySelector('.tom');
		tom.classList.add('aniTom');

          	setInterval(() => {
            		if(collision==false){
                		score += 10
                		updateScore(score)
            		}
           	}, 500);
        }

		setTimeout(function(){
		audio.play()
		},100);
		gameOver.style.visibility = 'hidden';
}
	
setInterval(checkcollision, 100);
