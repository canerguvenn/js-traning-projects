var saat=document.getElementById("saat");
var dakika=document.getElementById("dakika");
var saniye=document.getElementById("saniye");
var pmamEl=document.getElementById("pmam")

function guncelSaat(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let pmam="AM";
    if(h>12){
        h= h-12;                        
        pmam="PM";
    }
    
    h = h <10 ? "0"+ h : h;
    m = m <10 ? "0"+ m : m;
    s = s <10 ? "0"+ s : s;
    
    saat.innerText=h;
    dakika.innerText=m;
    saniye.innerText=s;
    pmamEl.innerText=pmam;
    setTimeout(() =>{
    guncelSaat();
    
    },1000);
    
    
}
guncelSaat();