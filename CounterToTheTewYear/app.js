const countDate= new Date('Jan 1,2023 00:00:00').getTime();
function newYear() {
    const now=new Date().getTime();

    let fark= countDate - now ;

    let second =1000;
    let minute=second*60;
    let hour=minute*60;
    let day=hour*24;

    let d= Math.floor (fark / (day));
    let h= Math.floor (( fark %  (day)) /(hour));
    let m= Math.floor (( fark % (hour)) /(minute));
    let s= Math.floor (( fark %  (minute)) /(second));

    document.getElementById("day").innerHTML=d; 
    document.getElementById("hours").innerHTML=h;
    document.getElementById("minutes").innerHTML=m;
    document.getElementById("seconds").innerHTML=s;
    
}
setInterval(function(){
    newYear()
},1000)


