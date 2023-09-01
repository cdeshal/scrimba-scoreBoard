let leftScore = document.getElementById("leftscore")
let rightScore = document.getElementById("rightscore")

let ls = 0
let rs = 0

function lsadd1() {
    ls += 1
    leftScore.textContent = ls
}

function lsadd2() {
    ls += 2
    leftScore.textContent = ls
}

function lsadd3() {
    ls += 3
    leftScore.textContent = ls
}

function rsadd1() {
    rs += 1
    rightScore.textContent = rs
}

function rsadd2() {
    rs += 2
    rightScore.textContent = rs
}

function rsadd3() {
    rs += 3
    rightScore.textContent = rs
}

function reset() {
    ls = 0
    rs = 0
    leftScore.textContent = 0
    rightScore.textContent = 0
}
