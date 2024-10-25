window.onload = function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    var baloons = document.querySelector(".heartBaloons");
    baloons.style.top = "-170vh";
};

// on click grayscale change
var counter = 0;
function gray1(){
    var us1 = document.querySelector("#us1").style.filter = "grayscale(0)";    
    counter++;
    console.log(counter);
}
function gray2(){
    var us2 = document.querySelector("#us2").style.filter = "grayscale(0)";    
    counter++;
    console.log(counter);
}
function gray3(){
    var us3 = document.querySelector("#us3").style.filter = "grayscale(0)";    
    counter++;
    console.log(counter);
}
var set1 =  setInterval(() => {
        if(counter>=3){
            var f = document.querySelector("#footer").style.display="none";
            var l = document.querySelector("#last").style.display="block";
            window.scrollTo(0,document.body.scrollHeight);
            clearInterval(set1);
        }
}, 500);

function prmpt(){
    var csp = document.querySelector("#customp").style.display = "block";
};
function sendEmail(){
    // email
};
