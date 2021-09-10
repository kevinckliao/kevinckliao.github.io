// Start date of 台灣 國小 109學年度 下學期 第ㄧ周 : 2021-02-21
//var dateStart = new Date("2021-02-21T00:00:00.000+08:00"); //109學年度 下學期 第ㄧ周 : 2021-02-21
var dateStart = new Date("2021-08-29T00:00:00.000+08:00"); //110上 第ㄧ周:8/29,開學:9/1

//count time diff, calculate week# for even/odd weeks
var msecStart = dateStart.getTime();
var msecNow = Date.now();  // get msec of Local-Time
var weekNo =  Math.floor((msecNow - msecStart) / ( 7* 24 * 3600000)) + 1;
var weekType = 0;

// get Today's Date & Week String
const dateNow = new Date();
const weekdayStr = [ '日','ㄧ','二','三','四','五','六' ];

// assembly display string
var msgWeek = '今天是 &nbsp;';
if ((weekNo % 2) == 0) {  msgWeek += " 雙周"; weekType = 1;} 
else { msgWeek += " 單周"; weekType = 0;};

msgWeek += ' - 周' + weekdayStr[dateNow.getDay()] ;
msgWeek += '  &nbsp; (' + dateNow.toLocaleDateString();
msgWeek += ' - 第' + weekNo + '周)' ;

//console.log(msgWeek);
document.getElementById("weekmsg").innerHTML = msgWeek ;

//
// mark Day
//
function markDay (weekType, dayNum) {
  var tableEl = document.getElementsByTagName('table') ;
  //console.log(tableEl);

  cellEl = tableEl[weekType].getElementsByTagName('th');

  //cellEl[ dayNum ].style.backgroundColor = '#fa520f' ;
  //cellEl[ dayNum ].style.color = '#ffffff' ;
  cellEl[ dayNum ].classList.add('marker-flash');
  //console.log('even/odd: ' + weekType + ' day: ' + dayNum);
}

//mark today
if (dateNow.getDay() >= 1 && dateNow.getDay() <=5) {
  markDay(weekType, dateNow.getDay());
}



