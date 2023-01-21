var models= [
    {
        "name" : "BMW 4.18d",
        "image" : "img/bmw.jpg",
        "link" : "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        "name" : 'Mazda CX-3',
        "image" : 'img/mazda.jpg',
        "link" : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        "name" : 'Volvo S60',
        "image" : 'img/volvo.jpg',
        "link" : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        "name" : 'Skoda Superb',
        "image" : 'img/skoda.jpg',
        "link" : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        "name" : 'Honda Civic',
        "image" : 'img/honda.jpg',
        "link" : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
]

var index = 0;
var slaytSayisi = models.length;
var interval;
var settings = {
    "duration" : "1000", // 1 saniye
    "random" : false
}

init(settings); // olayları başlatmak için burada fonksiyonu çağırdık.

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function(){
    index --;
    showSlide(index);
    console.log(index);
})

document.querySelector(".fa-arrow-circle-right").addEventListener("click", function(){
    index ++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval); // olaylar durduruldu.
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings); // olaylar üst kısımda durduğu için tekrar mouseleave durumunda tekrar başlaması için gerekli fonksiyonu burada çağırdık.
})
})

function init(settings){

    var prev; // üretilen sayıyı burada tutacağız.

    interval = setInterval(function(){
        if(settings.random){
            do{   
            index = Math.floor(Math.random() * slaytSayisi); // index değerini, slaytSayisi kadar (5) random şekilde oluştursun.Fakat index olduğu için slayt sayısının bir altına yuvarlamamız gerektiği için Math kütüphanesinden floor metodunu kullanarak değeri bir aşağıya yuvarladık.
            }
            while(index == prev){
                prev = index;
            }
        }
        else{
            // artan index
            if(slaytSayisi == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
}

function showSlide(i){
    
    index = i;
    if(i <0){
        index = slaytSayisi-1;
    }
    else if(i>=slaytSayisi){
        index = 0;
    }

document.querySelector(".card-title").textContent = models[index].name;
document.querySelector(".card-img-top").setAttribute("src",models[index].image);
document.querySelector(".card-link").setAttribute("href",models[index].link);
}