document.querySelector('form.input_date').addEventListener('input',function() {

	let nameInput = document.getElementById('final_date').value;

	date = nameInput.split("-").join(",");

	const deadline = new Date(date);

	let timerId = null;
	
	let currentDate = new Date().toLocaleDateString();

	document.querySelector('.currentDate_').innerHTML = 'сегодня ' + currentDate + ' года';

	function countdownTimer() {
	  const diff = deadline - new Date();
	  if (diff <= 0) {
		clearInterval(timerId);
	  }
	  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	  $days.textContent = days < 10 ? '0' + days : days;
	  $hours.textContent = hours < 10 ? '0' + hours : hours;
	  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  
	const $days = document.querySelector('.timer__days');
	const $hours = document.querySelector('.timer__hours');
	const $minutes = document.querySelector('.timer__minutes');
	const $seconds = document.querySelector('.timer__seconds');
	
	countdownTimer();
	
	timerId = setInterval(countdownTimer, 1000);

	

  });