function raffle() {
    const LIST = $("#list li")

    let interval = setInterval(() => {
        LIST.removeClass("luck");
        LIST[Math.floor(Math.random() * LIST.length)].classList.add("luck");
    }, 100)

    setTimeout(() => clearInterval(interval), 3000)
}

function delLastTel() {
    $("#list li:last-child").remove()
}

function addTel() {
    const TEL_INPUT = $("#telInput")
    if (/^1[3-9]\d{9}$/.test(TEL_INPUT[0].value)) {
        $("#list").append(`<li>${TEL_INPUT[0].value}</li>`)
        TEL_INPUT[0].value = ""
    } else {
        alert("输入的号码不规范！")
    }
}
