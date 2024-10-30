window.onload = function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    var baloons = document.querySelector(".heartBaloons");
    baloons.style.top = "-170vh";
};

// on click grayscale change
var counter = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
function gray1(){
    var us1 = document.querySelector("#us1").style.filter = "grayscale(0)";
    var us1 = document.querySelector("#us1").src ="./images/us/1.svg"; //color change to  be done
    a = 1;
}
function gray2(){
    var us2 = document.querySelector("#us2").style.filter = "grayscale(0)"; 
    var us2 = document.querySelector("#us2").src ="./images/us/2.svg"; //color change to  be done
    b = 1;
}
function gray3(){
    var us3 = document.querySelector("#us3").style.filter = "grayscale(0)";    
    var us3 = document.querySelector("#us3").src ="./images/us/3.svg"; //color change to  be done
    c = 1;
}
function gray4(){
    var us4 = document.querySelector("#us4").style.filter = "grayscale(0)";    
    var us4 = document.querySelector("#us4").src ="./images/us/4.svg"; //color change to  be done
    d = 1;
}
function gray5(){
    var us5 = document.querySelector("#us5").style.filter = "grayscale(0)";    
    var us5 = document.querySelector("#us5").src ="./images/us/5.svg"; //color change to  be done
    e = 1;
}
var set1 =  setInterval(() => {
        if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1){
            var f = document.querySelector("#footer").style.display="none";
            var l = document.querySelector("#last").style.display="block";
            window.scrollTo(0,document.body.scrollHeight);
            // clearInterval(set2);
            clearInterval(set1);
        }
}, 2000);

function prmpt(){
    document.querySelector("#quiz").style.display = "block";
    document.querySelector("#customp").style.display = "none";
};
function sendEmail(){
    emailjs.send("service_i1vumm6","template_r66y0i5").then(alert("Apna email check kro"))
};
var ans1 = document.querySelector("#q11");
var ans2 = document.querySelector("#q22");
var ans3 = document.querySelector("#q34");

var set2 =  setInterval(() => {
    
}, 1000);

var allAnswer = document.querySelector("#pro");
allAnswer.addEventListener("mousedown",function(){
    allAnswer.style.transform = "scale(0.8)";
});
allAnswer.addEventListener("mouseup",function(){
    allAnswer.style.transform = "scale(1)";
});
function propose(){
    if(ans1.checked == true && ans2.checked == true && ans3.checked == true){
        document.querySelector("#customp").style.display = "block";
        document.querySelector("#quiz").style.display = "none";
    }
}
