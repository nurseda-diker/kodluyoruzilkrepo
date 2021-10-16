let name = prompt("Kullancı adınızı giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML=`${name}`;

let time=document.querySelector("#myClock");
time.innerHTML=`${time}`;

function showTime() {

    var tarih = new Date();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();
    var gun = tarih.getDay();

    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var bugun=days[tarih.getDay()];

    saat=(saat<10)? "0" +saat:saat;
    dakika=(dakika<10)? "0"+dakika:dakika;
    saniye=(saniye<10)?"0"+ saniye:saniye;

    let time=saat + ":" + dakika + ":" + saniye + " " + bugun;
    let myClock=document.querySelector("#myClock").innerHTML=`${time}`;
    // document.write(saat + ":" + dakika + ":" + saniye + gun);
    setTimeout(showTime,1000);
}



showTime()








