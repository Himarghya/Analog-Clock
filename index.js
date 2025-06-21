var timeHr = document.getElementById("Hour");
var timeMin = document.getElementById("Minute");
var timeSec = document.getElementById("second");
function Clock()
{
   const time = new Date;
   const hour = time.getHours();
   const minute = time.getMinutes();
   const seconds = time.getSeconds();
   setTimeout(Clock , 1000);
   const hourDegree = (hour / 12) * 360;
   timeHr.style.transform = 'rotate('+hourDegree+'deg)';
   const MinuteDegree = (minute / 60) * 360;
   timeMin.style.transform = 'rotate('+MinuteDegree+'deg)';
   const secondDegree = (seconds / 60) * 360;
   timeSec.style.transform = 'rotate('+secondDegree+'deg)';

}
Clock();
