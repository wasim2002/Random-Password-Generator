const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const rangeInput = document.querySelector("#rangeInput")
const passlength = document.querySelector(".passlength")
const options = document.querySelectorAll(".options input")
const copy = document.querySelector(".copy")
const display = document.querySelector(".show input")
const reset = document.querySelector(".reset")
const strength = document.querySelector(".strength")
const images = document.querySelector(".images")


passlength.textContent = passlength.textContent < 10 ? 0 + passlength.value : passlength.value
function range() {
    passlength.textContent = rangeInput.value
    if (rangeInput.value < 5) {
        strength.id = "weak"
        images.id = "weak"
    } else if (rangeInput.value < 8) {
        strength.id = "good"
        images.id = "good"
    } else if (rangeInput.value < 11) {
        strength.id = "strong"
        images.id = "strong"
    } else {
        strength.id = "very_strong"
        images.id = "verystrong"
    }
    run()
}
range()
plus.addEventListener("click", function () {
    rangeInput.value++
    if (passlength.textContent < 20) {
        passlength.textContent++
    }
})
minus.addEventListener("click", function () {
    rangeInput.value--
    if (passlength.textContent > 1) {
        passlength.textContent--
    }
})
function run() {
    const chart = {
        abc: "abcdefghijklmnopqrstuvwxyz",
        ABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        number: "0123456789",
        symbol: "~!@#$%^&*()-_+=}{][:;?><.,"
    }
    let length = rangeInput.value
    let staticPass = ""
    let Password = ""
    options.forEach(option => {
        if (option.checked) {
            staticPass += chart[option.id]
        }
    })
    while (Password.length < length) {
        Password += staticPass[Math.floor(Math.random() * staticPass.length)]
    }
    display.value = Password
}

rangeInput.addEventListener("input", range);
options.forEach(function (checkB) {
    checkB.addEventListener("change", function () {
        run()
    })
})
reset.addEventListener("click", function () {
    run()
})
copy.addEventListener("click", function () {
    navigator.clipboard.writeText(display.value)
    copy.innerHTML = `<svg id='Checkmark_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


    <g transform="matrix(1.15 0 0 1.15 12 12)" >
    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -11.84)" d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z" stroke-linecap="round" />
    </g>
    </svg>`
    setTimeout(() => {
        copy.innerHTML = "Copy"
    }, 1500);
})