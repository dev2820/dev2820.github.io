//clock javascript
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    if(hr) hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    if(mn) mn.style.transform = `rotateZ(${mm}deg)`;
    if(sc) sc.style.transform = `rotateZ(${ss}deg)`;
},1000)