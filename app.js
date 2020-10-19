// express i projeye ekleyelim
var express = require("express");
// http yi projeye ekleyelim
var http = require("http");

// express i kullanalım
var app = express();


//bir istek olduğunda yani request old. ne cevap verecek response
/*
app.get('/', function(req,res){
    res.send('hi nodejs')
})
*/

//http ile bir istekte bulunalım, mesela yahoo dan
// http.get("http://www.yahoo.com/", function(res){
//     res.setEncoding('utf8')
//     res.on('data', function(data){
//         console.log(data)
//     })
// })

/* 
http ile google a bir istek yollayacağız, gelen response u utf8 e çevirsin ve data olarak atasın sonrada bu datayı console da biz versin
app ı yeniden çalıştıralım, node app
biz bir html sayfası kodu geldi, 
get veri getirmek için post ise veri yollamak için 
 */

//async programlama konusu, 3 tane method oluşturalım ve bunları önce sırasıyla çalıştıralım
let method1 = function(){
    setTimeout(() => {
        console.log("1")
    }, 5000);
    // console.log("1")
}
let method2 = function(){
    setTimeout(() => {
        console.log("2")
    }, 4000);
    // console.log("2")
}
let method3 = function(){
    setTimeout(() => {
        console.log("3")
    }, 2000);
    // console.log("3")
}

method1();
method2();
method3();
//sırasıyla 1 2 3 olarak ayrı satır halinde gelir
//ancak buradaki methodların farklı zamanlarda bitseydi ne olacaktı, 
// çalışma zamanlarını değiştrelim, setTimeout ile
// method1 5 sn sonra çalışsın, method2 4sn, method3 2 sn sonra çalışsın
// nodejs her şeyi aynı anda çalıştırabilir async çalışma bu, bizim buradaki çıktımızda hangi func erken biterse onun çıktısı önce gelir, kendi saniyesi geçen ekrana çıktısını veriyor, hepsine aynı anda başladı, önce çalıştırma komutu gelen başlayayım yapmadı, hiç bir işlem bir diğerini bloklamadı, 
//




 // app in çalışmasını istediğimiz port u tanımlayalım, port dinlendiğinde console...
app.listen(3000,function(){
    console.log("port listen...")
})
