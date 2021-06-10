// Start date of 台灣 國小 109學年度 下學期 第ㄧ周 : 2021-02-21
var dateStart = new Date("2021-02-21T00:00:00.000+08:00"); //reguest a UTC+8 timestamp of 2021/2/21
//var dateStart = new Date("2021-06-09T00:00:00.000+08:00");

//count time diff, calculate week# for even/odd weeks
var msecStart = dateStart.getTime();
var msecNow = Date.now();  // get msec of Local-Time
var weekNo =  Math.floor((msecNow - msecStart) / ( 7* 24 * 3600000)) + 1;

// get Today's Date & Week String
const dateNow = new Date();
const weekdayStr = [ '日','ㄧ','二','三','四','五','六' ];

// assembly display string
var msgWeek = '今天是 ' + dateNow.toLocaleDateString();
msgWeek += ' 第' + weekNo + '周 ' ;
if ((weekNo % 2) == 0) {  msgWeek += " (雙周) "; } 
else { msgWeek += " (單周) "; };

msgWeek += '星期' + weekdayStr[dateNow.getDay()] ;

console.log(msgWeek);
document.getElementById("weekmsg").innerHTML = msgWeek ;