let login = document.querySelector('.login')
let password = document.querySelector('.password')
let btn = document.querySelector('.sign-in')
let num1 = document.querySelector('.num1')
let znak = document.querySelector('.znak')
let num2 = document.querySelector('.num2')
let answer = document.querySelector('.answer')
let btn2 = document.querySelector('.btn2')
let year = document.querySelector('.year')

let age2 = document.querySelector('.age2')
let cal1 = document.querySelector('.cal1')
let login2 = document.querySelector('.login2')
let years = document.querySelector('.years')
let cal = document.querySelector('.cal')
let auf = document.querySelector('.auf')


btn.addEventListener("click", function () {
    if (login.value == "111" && password.value == "222" ) {
        alert("good")
    } 
    else {
        alert("error")
    }
})




btn2.addEventListener('click', function() {
    if (year.value <= 0 ){
        alert("Ошибка")
    }
    else if (year.value >= 120 ) {
        alert("Ошибка")
    }
    else if (year.value <= 120 && year.value >= 0 ) {
        alert("Ок")
    
    }
    else {
        alert("Неправильный набор текста")
    }
    
    
})



answer.addEventListener('click', function() {
    if( znak.value == "+"){
       let res = +num1.value + +num2.value
        alert(res)
    }
    else if( znak.value == "-"){
        let res = +num1.value - +num2.value
         alert(res)
     }
     else if( znak.value == "*"){
        let res = +num1.value * +num2.value
         alert(res)
     }
     else if( znak.value == "/"){
        let res = +num1.value / +num2.value
         alert(res)
     }
                    
})



age2.addEventListener("click", function () {
     cal.style.display = "none"
     auf.style.display = "none"    
     years.style.display = "inline-flex"         
})


cal1.addEventListener("click", function () {
    auf.style.display = "none"
    years.style.display = "none"       
    cal.style.display = "inline-flex"         
})


login2.addEventListener("click", function () {
    cal.style.display = "none"
    years.style.display = "none"       
    auf.style.display = "inline-flex"         
})