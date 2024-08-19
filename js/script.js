if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var run = countUpFromTime("Jul 31, 1998 06:00:00", 'countup1');
window.onload = run

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date().getTime();
    
    var timeDifference = now - countFrom;
    
    var secondsInADay = 60 * 60 * 24,
        secondsInAnHour = 60 * 60,
        secondsInAMinute = 60;

    var years = Math.floor(timeDifference / (secondsInADay * 365.25 * 1000)),
        days = Math.floor((timeDifference % (secondsInADay * 365.25 * 1000)) / (secondsInADay * 1000)),
        hours = Math.floor((timeDifference % (secondsInADay * 1000)) / (secondsInAnHour * 1000)),
        minutes = Math.floor((timeDifference % (secondsInAnHour * 1000)) / (secondsInAMinute * 1000)),
        seconds = Math.floor((timeDifference % (secondsInAMinute * 1000)) / 1000);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = minutes;
    idEl.getElementsByClassName('seconds')[0].innerHTML = seconds;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}
