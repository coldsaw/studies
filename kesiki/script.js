function getRandomNumber(a, b) {
    return Math.round(Math.random() * (b - a) + a)
  }

// let el = document.querySelector("#cat-hp")
// let catHP = el.offsetWidth
// // console.log(catHP)
// el = document.querySelector("#dog-hp")
// let dogHP = el.offsetWidth
let catHP = 100
let dogHP = 100
let dogCounter = true
let catCounter = true
let catVHP = document.querySelector("#cat-hp").offsetWidth
let dogVHP = document.querySelector("#dog-hp").offsetWidth

document.querySelector("#dog-attack").onclick = function() {
    if (catCounter && catHP > 0 && dogHP > 0) {
        let damage = getRandomNumber(10, 20)
        catHP -= damage
        document.querySelector("#cat-hp").style.width = `${catVHP * catHP / 100}px`
        catCounter = false
        dogCounter = true
        document.querySelector(".log > p").innerHTML = `Пёсель атаковал котэка и нанёс ${damage} урон(а) <br>` + document.querySelector(".log > p").innerHTML
        if (catHP >=0) {
        document.querySelector(".hp-quan-cat").innerHTML = `Здоровье: ${catHP}/100`
        } else if (catHP < 0) {
        document.querySelector(".hp-quan-cat").innerHTML = `Здоровье: 0/100`
        }
        if (catHP <= 0) {
            document.querySelector(".log > p").innerHTML = '<span style="color: red;">Котэк умер :с </span><br>' + document.querySelector(".log > p").innerHTML
        }
    } else if (catHP <= 0) {
        alert("Котэк уже умер, не надо его бить :С")
    } else if (dogHP <= 0) {
        alert("Пёсель умер, он не может атаковать :с")
    } else if (!catCounter){
        alert("Нельзя бить 2 раза подряд!")
    }
    if (catHP <= 0) {
        document.querySelector("#cat-hp").style.width = "90%"
        document.querySelector("#cat-hp").style.backgroundColor = "transparent"
        document.querySelector("#cat-hp").style.borderStyle = "none"
        document.querySelector("#cat-hp").style.margin = "2px"
        document.querySelector("#cat-death").innerHTML = '<span style="color: red;">Котэк умер :с</span>'
    }
}

document.querySelector("#cat-attack").onclick = function() {
    if (dogCounter && dogHP > 0 && catHP >0) {
        let damage = getRandomNumber(10, 20)
        dogHP -= damage
        document.querySelector("#dog-hp").style.width = `${dogVHP * dogHP / 100}px`
        dogCounter = false
        catCounter = true
        document.querySelector(".log > p").innerHTML = `Котэк атаковал пёселя и нанёс ${damage} урон(а) <br>` + document.querySelector(".log > p").innerHTML
        if (dogHP >=0) {
            document.querySelector(".hp-quan-dog").innerHTML = `Здоровье: ${dogHP}/100`
        } else if (dogHP < 0) {
            document.querySelector(".hp-quan-dog").innerHTML = `Здоровье: 0/100`
        }
        if (dogHP <= 0) {
            document.querySelector(".log > p").innerHTML = '<span style="color: red;">Пёсель умер :с </span><br>' + document.querySelector(".log > p").innerHTML 
        }
    } else if (dogHP <= 0) {
        alert("Пёсель уже умер, не надо его бить :С")
    } else if (catHP <= 0) {
        alert("Котэк умер, он не может атаковать :с")
    } else if (!dogCounter) {
        alert("Нельзя бить 2 раза подряд!")
    }
    if (dogHP <= 0) {
        document.querySelector("#dog-hp").style.width = "90%"
        document.querySelector("#dog-hp").style.backgroundColor = "transparent"
        document.querySelector("#dog-hp").style.borderStyle = "none"
        document.querySelector("#dog-hp").style.margin = "2px"
        document.querySelector("#dog-death").innerHTML = '<span style="color: red;">Пёсель умер :с</span>'
    }
}