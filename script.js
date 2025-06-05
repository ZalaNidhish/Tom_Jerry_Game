audiogo = new Audio('outsound.mp3');
audio   = new Audio('bgmusic.mp3');
audiojump= new Audio('jumpsound.mp3');

score = 0;

document.onkeydown = function(e){
	console.log("keycode is",e.keyCode);
	if(e.keyCode==38){
		jerry = document.querySelector('.jerry');
		jerry.classList.add('aniJerry');
		audiojump.play();
		setTimeout(function(){
			score+=10;
			updateScore(score);
			jerry.classList.remove('aniJerry')
		},700);
	}
	

	
	if(e.keyCode==13){
		tom = document.querySelector('.tom');
		tom.classList.add('aniTom');
		setTimeout(function(){
		audio.play()
		}, 100);
		gameOver.style.visibility = 'hidden';
	}
	
// if(e.keyCode==39){
	
// jerry = document.querySelector('.jerry');
// jerryX=parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
// jerry.style.left = jerryX + 100 +'px';
	
// }	
// if(e.keyCode==37){
	
// jerry = document.querySelector('.jerry');
// jerryX=parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
// jerry.style.left = jerryX - 100 +'px';
	
}	


setInterval(function(){
	
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
		gameOver.style.visibility = 'visible';
		tom.classList.remove('aniTom');
		audiogo.play();
		audio.pause();
	}		
}, 100);

function updateScore(score){
	scoreCont.innerHTML = "YOUR SCORE:" +score;
}
