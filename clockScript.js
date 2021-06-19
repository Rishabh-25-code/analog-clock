setInterval(setClock,1000);
const handHour = document.querySelector('[data-hand-hour]')
const handMinute = document.querySelector('[data-hand-minute]')
const handSecond = document.querySelector('[data-hand-second]')
function setClock(){
     const currentDate = new Date();
     const secondsRatio = currentDate.getSeconds()/60
     const minutesRatio = (secondsRatio+currentDate.getMinutes())/60
     const hoursRatio = (minutesRatio+currentDate.getHours())/12
     setRotation(handSecond,secondsRatio)
     setRotation(handMinute,minutesRatio)
     setRotation(handHour,hoursRatio)
}
function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio*360) 
}
setClock()