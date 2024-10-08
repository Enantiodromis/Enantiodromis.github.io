if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var run = countUpFromTime('1998-07-31 06:00:00', 'countup1');
window.onload = run

function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      timeDifference = now - countFrom;
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / secondsInADay);
  years = Math.floor(days / 365.25);  // 365.25 to account for leap years
  days = Math.floor(days % 365.25);   // Days remaining after full years
  
  hours = Math.floor((timeDifference % secondsInADay) / secondsInAHour);
  mins = Math.floor(((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000));
  secs = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('years')[0].innerHTML = years;
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}
