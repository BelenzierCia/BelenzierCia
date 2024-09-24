let stars = document.getElementsByClassName("stars")
for (let i = 0; i < stars.length; i++) {
    for (let j = 0; j < 5; j++) {
        let star = document.createElement("img")
        star.src = "images/reviews/star.png"
        star.style.width = "15px"
        star.style.height = "15px"
        stars[i].appendChild(star)
    }
}