document.querySelectorAll("nav li").forEach(el => {
    el.addEventListener("click", e => {
        document.getElementById("image").style.backgroundImage = `url("images/${e.target.textContent}.jpg")`;
    })
})
