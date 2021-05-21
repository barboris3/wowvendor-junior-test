'use strict';
(() => {
	document.addEventListener("DOMContentLoaded", initDonutMoving);

	let jumpIId = null;
	let winIId = null;
	let beginIId = null;
	let isWin = null;
	let jumpPosition;
	let rockSize;
	let rockPosition;
	
	function initDonutMoving() {
		/*if win variable setted - push results to db*/
		if(isWin !== null) pushInDB();
		
		/*saving current position of props*/
		setParamsOfGameProps();
		/*checking during donut moving, is the rock on the way or is it at the end of the map*/
		jumpIId = setInterval(jumpIfRockOnTheWay, 10);
		winIId = setInterval(setWinIfDonutInTheEnd, 10);
		/*reset intervals id and init donut moving if it is at the begin of the path*/
		beginIId = setInterval(startMovingDonut, 10);
	}

	function startMovingDonut() {
		if(isDonutAtTheEnd()) {
			clearInterval(jumpIId);
			clearInterval(winIId);
			clearInterval(beginIId);
			initDonutMoving();
			window.character.run();
		}
	}
	
	/*if jump over the rock, clear interval, no another stones on the path*/
	function jumpIfRockOnTheWay() {
		if(isRockOnTheWayClose(jumpPosition)) {
			window.character.jump();
			clearInterval(jumpIId);
		}
	}
	
	/*checkin, if donut in the end - set isWin=true, window.character.isWin - unavaliable*/
	function setWinIfDonutInTheEnd() {	
		if(isDonutAtTheEnd()) {
			isWin = true;
			clearInterval(winIId);
		}
	}
	
	/*is donut(right side of it?) in the end*/
	function isDonutAtTheEnd() {
		return window.character.characterPosition + 50 >= 1020;
	}
	
	function isDonutAtTheBegin() {
		return window.character.characterPosition === 0;
	}
	
	/*checks is rock comming and rock isnt behind of donut*/
	function isRockOnTheWayClose() {
		return window.character.characterPosition >= jumpPosition && window.character.characterPosition < window.terrain.rockPosition;
	}
	
	function addSomeRandomForJumping() {
		return parseInt(Math.random() * (120 - 60) + 60);
	}
	
	function setParamsOfGameProps() {
		/*calc random position for jump near the stone*/
		jumpPosition = window.terrain.rockPosition - addSomeRandomForJumping();
		rockSize = window.terrain.rockSize;
		rockPosition = window.terrain.rockPosition;
		isWin = false;
	}

	/*sending result to server*/
	function pushInDB() {
		let result = {
			rockPosition: rockPosition,
			jumpPosition: jumpPosition,
			rockSize: rockSize,
			isWin: isWin
		};
		
		let formData = new FormData();
		for(let key in result) formData.append(key, result[key]);
		
		try {
			fetch('/absolutePath/wowvendor-junior-test/php/handler.php', {
					method: 'POST',
					body: formData
				})
				.catch((error) => console.log(error));
		} catch (error) {
			console.log('Something went wrong: ' + error);
		}
	}

	function c(v) { console.log(v); }
})();