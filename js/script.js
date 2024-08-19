if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var run = countUpFromTime('1998-07-31 06:00:00', 'countup1');
window.onload = run

function countUpFromTime(countFrom, id) {
    var countFromDate = new Date(countFrom).getTime();
    var now = new Date().getTime();
    
    var timeDifference = now - countFromDate;

    var secondsInAMinute = 60;
    var secondsInAnHour = 60 * 60;
    var secondsInADay = 24 * 60 * 60;
    var secondsInAYear = 365.25 * 24 * 60 * 60;

    var years = Math.floor(timeDifference / (secondsInAYear * 1000));
    var days = Math.floor((timeDifference % (secondsInAYear * 1000)) / (secondsInADay * 1000));
    var hours = Math.floor((timeDifference % (secondsInADay * 1000)) / (secondsInAnHour * 1000));
    var minutes = Math.floor((timeDifference % (secondsInAnHour * 1000)) / (secondsInAMinute * 1000));
    var seconds = Math.floor((timeDifference % (secondsInAMinute * 1000)) / 1000);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = minutes;
    idEl.getElementsByClassName('seconds')[0].innerHTML = seconds;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}
