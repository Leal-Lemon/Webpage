const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hour = document.getElementById('hour');

function update() {
    const now = new Date();
    const ms = now.getMilliseconds();
    const s = now.getSeconds();
    const m = now.getMinutes();
    const h = now.getHours();
   
    sec.style.transform = `rotate(${(s + ms/1000)/60}turn)`; 
    min.style.transform = `rotate(${m/60}turn)`;
    hour.style.transform = `rotate(${h/12}turn)`;

    _DateAndTime(); //updates date and time
}

const _DateAndTime = () => {
  document.querySelector("#currentTime").innerHTML = new Date().toLocaleDateString('en-gb', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, second60: true});
} //gets date and time (date order is the uk standard (dd/mm/yy))

setInterval(update);
update();
