const newYear="1 Jan 2024";
const daysId= document.getElementById("days");
const hoursId= document.getElementById("hours");
const minutesId= document.getElementById("min");
const secondsId= document.getElementById("sec");
const countDown = ()=>{
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    const totalSeconds=(newYearDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const minutes = Math.floor(totalSeconds / 60)% 60;
    const seconds = Math.floor(totalSeconds) %60;
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    return{
        "day": days,
        "hrs": hours,
        "min": minutes,
        "sec": seconds
    }
}

const updateCountDown=({day, hrs, min, sec})=>{
    daysId.innerHTML = addingZero(day);
    hoursId.innerHTML = addingZero(hrs)
    minutesId.innerHTML = addingZero(min)
    secondsId.innerHTML = addingZero(sec)
    console.log(day);
    console.log(hrs);
    console.log(min);
    console.log(sec);
}

const addingZero = (time) =>{
    return time <10 ? `0${time}` : time;
}

setInterval(() => {
    const propsCd=countDown();
    updateCountDown(propsCd);
}, 1000);