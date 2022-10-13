function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var amPm = ( hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours-12 : hours;
    hours = ("0" + hours);
    minutes = ("0" + minutes);
    seconds = ("0" + seconds);
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realtimeClock,500);
  }