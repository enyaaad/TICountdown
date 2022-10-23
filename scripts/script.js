const days = document.getElementById('Days');
const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');

const currentTime = new Date().getFullYear();

const TI = new Date(`October 15 ${currentTime + 1} 00:00:00`)

function updateCurrentTime(){
    const currentTime = new Date();
    const diff = TI - currentTime;
    const d = Math.floor(diff/ 1000 / 60 / 60 / 24);
    const h = Math.floor(diff/ 1000 / 60 / 60) % 24;
    const m = Math.floor(diff/ 1000 / 60 ) % 60;
    const s = Math.floor(diff/ 1000 ) % 60;

days.innerHTML = d.toString();
hours.innerHTML = h <10 ? '0'+ h:h;
minutes.innerHTML = m<10 ? '0'+ m:m ;
seconds.innerHTML = s<10 ? '0'+ s:s;
console.log(d,h,m,s);
}
setInterval(updateCurrentTime, 1000)
updateCurrentTime();