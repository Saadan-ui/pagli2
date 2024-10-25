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
    var us1 = document.querySelector("#us1").src ="./images/us/1.svg"; //color change to  be done
    counter++;
}
function gray2(){
    var us2 = document.querySelector("#us2").style.filter = "grayscale(0)"; 
    var us2 = document.querySelector("#us2").src ="./images/us/2.svg"; //color change to  be done
    counter++ ;
}
function gray3(){
    var us3 = document.querySelector("#us3").style.filter = "grayscale(0)";    
    var us3 = document.querySelector("#us3").src ="./images/us/3.svg"; //color change to  be done
    counter++ ;
}
function gray4(){
    var us4 = document.querySelector("#us4").style.filter = "grayscale(0)";    
    var us4 = document.querySelector("#us4").src ="./images/us/4.svg"; //color change to  be done
    counter++ ;
}
function gray5(){
    var us5 = document.querySelector("#us5").style.filter = "grayscale(0)";    
    var us5 = document.querySelector("#us5").src ="./images/us/5.svg"; //color change to  be done
    counter++ ;
}
var set1 =  setInterval(() => {
        if(counter >= 5){
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
    alert("Apna email check kro")
    // email
};
