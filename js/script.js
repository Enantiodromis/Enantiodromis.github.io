if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var run = countUpFromTime('1998-07-31', 'countup1');
window.onload = run

function countUpFromTime(countFrom, id) {
    var countFromDate = new Date(countFrom).getTime();
    var now = new Date().getTime();
    
    var timeDifference = now - countFromDate;

    var secondsInADay = 24 * 60 * 60 * 1000; // milliseconds in a day
    var secondsInAYear = 365.25 * secondsInADay; // average milliseconds in a year

    var years = Math.floor(timeDifference / secondsInAYear);
    var days = Math.floor((timeDifference % secondsInAYear) / secondsInADay);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}
