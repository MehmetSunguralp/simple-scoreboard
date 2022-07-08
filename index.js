let counterHome = 0;
let counterGuest = 0;

let homeScore = document.getElementById('home');
let guestScore = document.getElementById('guest');

let period = document.getElementById('current-period');
let periodCounter = 1;

//------------------------------------Home Buttons

function homeOne() {
	counterHome += 1; // Plus 1 Button
	homeScore.textContent = counterHome;
}

function homeTwo() {
	counterHome += 2; // PLus 2 Button
	homeScore.textContent = counterHome;
}

function homeThree() {
	counterHome += 3; // Plus 3 Button
	homeScore.textContent = counterHome;
}

//------------------------------------Guest Buttons

function guestOne() {
	counterGuest += 1; // Plus 1 Button
	guestScore.textContent = counterGuest;
}

function guestTwo() {
	counterGuest += 2; // PLus 2 Button
	guestScore.textContent = counterGuest;
}

function guestThree() {
	counterGuest += 3; // Plus 3 Button
	guestScore.textContent = counterGuest;
}

//------------------------------------Config Buttons

// Highlight winner

function highlight() {
	if (counterHome > counterGuest) {
		homeScore.style.color = '#10B981';
		guestScore.style.color = '#f94f6d';
	} else if (counterGuest > counterHome) {
		guestScore.style.color = '#10B981';
		homeScore.style.color = '#f94f6d';
	} else {
		homeScore.style.color = '#F59E0B';
		guestScore.style.color = '#F59E0B';
	}
}

// Set period

function incPeriod() {
	if (periodCounter >= 4) {
		periodCounter = 0;
	}
	periodCounter += 1;
	period.textContent = periodCounter;
}

function decPeriod() {
	if (periodCounter == 1) {
		periodCounter = 5;
	}

	periodCounter -= 1;
	period.textContent = periodCounter;
}

function resetScore() {
	// Reset scores
	counterHome = 0;
	homeScore.textContent = counterHome;

	counterGuest = 0;
	guestScore.textContent = counterGuest;

	// Reset background
	homeScore.style.color = '#F59E0B';
	guestScore.style.color = '#F59E0B';

	// Reset period
	periodCounter = 1;
	period.textContent = periodCounter;
}

// Countdown timer			

let minutes = 15;
let seconds = 60;

let time = document.getElementById('count-down');

const startInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
	seconds--;
	time.textContent = minutes + ':' + seconds;

	if (minutes == 0 && seconds == 0) {
		// Stop timer
		clearInterval(startInterval);
	} else if (seconds == 0) {
		// Decrease minutes
		seconds = 60;
		minutes--;
	}
}

