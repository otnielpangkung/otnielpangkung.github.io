// let timer = 0
let answer = document.getElementById("answer")
let point = document.getElementById("nilai").textContent
let choose = ""
let limit = 10
let random = Math.floor(Math.random()*19)
let nilai = 0
let data = [
    ["good","bagus"],
    ["bad","buruk"],
    ["home","rumah"],
    ["car","mobil"],
    ["cat","kucing"],
    ["dog","anjing"],
    ["cow","sapi"],
    ["monkey","monyet"],
    ["crocodile","buaya"],
    ["pen","pulpen"],
    ["door","pintu"],
    ["widow","janda"],
    ["money","uang"],
    ["honey","madu"],
    ["paper","kertas"],
    ["straw","sedotan"],
    ["pail","timba"],
    ["fair","adil"],
    ["medicine","obat"]
]

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // document.getElementById("play").style.display = "none"
            // document.getElementById("end").style.display = "block"
        }
        if( timer === 0) {
            document.getElementById("play").style.display = "none"
            document.getElementById("end").style.display = "block"
            document.getElementById("finalScore").textContent = document.getElementById("nilai").textContent
        }
    }, 1000);
}

function clickStart (param) {
    if (param){
        choose = param
    }
    startTimer(limit, document.getElementById("time"))

    document.getElementById("welcome").style.display = "none"
    document.getElementById("play").style.display = "block"
    document.getElementById("end").style.display = "none"
    console.log(param)

    if(param === "english") {
        // document.getElementById("answer").value = data[random][1]
        document.getElementById("question").innerHTML = data[random][0]
    } else { 
        document.getElementById("question").innerHTML = data[random][1]    
    }

}


function question (data) {
    for(let i = 0; i < data.length; i++) {
        if (document.getElementById("english")){
            
        }
    }
}

function answering() {
    let jawaban = document.getElementById("answer").value
    // console.log(jawaban)
    let pertanyaan = document.getElementById("question").innerHTML
    // console.log(pertanyaan)
    if (choose === "english"){
        if( jawaban === data[random][1]) {
            document.getElementById("nilai").textContent = Number( document.getElementById("nilai").textContent)+ 10
            random = Math.floor(Math.random()*19)
            document.getElementById("answer").value = ""
            document.getElementById("question").innerHTML = data[random][0]
        }
    } else {
        if( jawaban === data[random][0]) {
            document.getElementById("nilai").textContent = Number( document.getElementById("nilai").textContent)+ 10
            random = Math.floor(Math.random()*19)
            document.getElementById("answer").value = ""
            document.getElementById("question").innerHTML = data[random][1]
        }
    }
} 