const second=document.querySelector('#second');
const minute=document.querySelector('#minute');
const hour=document.querySelector('#hour');
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const reset=document.querySelector('#reset');

let sec=0,min=0,hr=0,count=0;
var countsec;
const startcount = () => {
    start.disable=true;
    clearInterval(countsec);
    function startSetInterval() {
        count++;
        sec=count%60;
        min=parseInt((count/60)%60);
        hr=parseInt((count/60)/60);
        second.innerHTML= sec<10? `0${sec}`: `${sec}`;
        minute.innerHTML=min<10? `0${min}`: `${min}`;
        hour.innerHTML=hr<10? `0${hr}`: `${hr}`;
    }
    startSetInterval();
    countsec = setInterval(startSetInterval, 1000)
}
const stopcount = () => {
    start.disable=false;
    clearInterval(countsec);
}
const resetcount = () => {
    start.disable=false;
    clearInterval(countsec);
    count=0;
    sec=0;
    min=0;
    hr=0;
    second.innerHTML=`0${sec}`;
    minute.innerHTML=`0${min}`;
    hour.innerHTML=`0${hr}`;
}
start.addEventListener("click", startcount);
stop.addEventListener("click", stopcount);
reset.addEventListener("click", resetcount);
