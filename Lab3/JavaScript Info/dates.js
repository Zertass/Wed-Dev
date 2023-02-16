// first task
let firstDate = new Date(2012, 1, 20, 3, 12);
alert( firstDate );
// second task
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
}
// third task
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
        day = 7;
    }
  
    return day;
}
// fourth task
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
// fifth task
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
// sixth task
function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000);
}
// seventh task
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}
// eighth task
function formatDate(date) {
    let diff = new Date() - date;
  
    if (diff < 1000) {
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(diff / 1000);
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000);
    if (min < 60) {
      return min + ' мин. назад';
    }
  
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));
  
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}