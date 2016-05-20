export function getTime() {
  const today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  if(hh < 10) {
    hh = '0' + hh;
  }
  if(mm < 10) {
    mm = '0' + mm;
  }
  if(ss < 10) {
    ss = '0' + ss;
  }
  const timeString = `${hh}:${mm}`;
  return timeString;
}

export function getDay() {
  const today = new Date();
  const day = today.getDay();
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  const dayString = weekday[day];

  let date = today.getDate();
  if (date < 10) {
    date = '0' + date;
  }

  let month = today.getMonth();
  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${dayString}, ${monthNames[month]} ${date}`;
}
