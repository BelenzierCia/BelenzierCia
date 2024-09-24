let slideIndex = 0;
let intervalId;
const slideFornec = document.getElementById('slide-fornec');
const slideTrack = document.getElementById('slideTrackFornec');

// Criar todas as imagens dos fornecedores
const list_forn = ["eaton.png", "meritor.png", "hengst.png", "elring.png", "continental.png", "schadek.png",
    "cobreq.png", "driveway.png", "zm.png", "ikro.png", "ds.jpg", "cabovel.png", "dellarosa.png", "rei.png",
    "suporterei.png", "cinpal.png", "dana.png", "spicer.png", "albarus.png", "fama.png", "maxon.png",
    "dnk.png", "moura.png", "eletran.png", "ospina.png", "olimpic.png", "florio.png", "aje.png", "spaal.png",
    "universal.png", "mds.png", "raven.png", "tuper.png", "mastra.png", "scapex.png", "originalflex.png",
    "kitcia.png", "first.png", "ampri.png", "columbia.png", "triade.png", "grazzimetal.png", "mtf.png",
    "atemis.png", "fitam.png", "orgus.png", "jcv.png", "mundialprime.png", "orbiquimica.png", "dda.png",
    "jamaica.png", "veb.png", "devigili.png"]

let counter = 0
let div_counter = document.createElement("div")
div_counter.className = "div_fornec_group"
slideTrack.appendChild(div_counter)
for (let i = 0; i < list_forn.length; i++) {
    let img = document.createElement("img")
    img.src = "images/fornecedores/" + list_forn[i]
    img.alt = list_forn[i]
    img.draggable = false

    if (counter >= 12) {
        counter = 0
        div_counter = document.createElement("div")
        div_counter.className = "div_fornec_group"
        slideTrack.appendChild(div_counter)
    }
    counter += 1
    div_counter.appendChild(img)
}

let start_mouse = null
let slide_left = null
let mouse_move = null
slideFornec.addEventListener("mousedown", (evt) => {
    start_mouse = evt.clientX
    slide_left = slideFornec.scrollLeft
})
slideFornec.addEventListener("mousemove", (evt) => {
    if (start_mouse != null) {
        if (intervalId != null) {
            clearInterval(intervalId)
            intervalId = null
        }

        mouse_move = start_mouse - evt.clientX
        slideFornec.scrollTo({
            left: slide_left + start_mouse - evt.clientX
        })
    }
})

function scrollToPosition(slideFornec, div, targetY, duration) {
    const startX = slideFornec.scrollLeft;
    const distance = targetY - startX;
    const startTime = performance.now();

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Percentual concluído

        // Easing function (easeInOut)
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        slideFornec.scrollTo(startX + distance * ease, 0);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

let mouseUp = (evt) => {
    if (start_mouse != null) {
        if (mouse_move < - 100) { // right
            setTimeout(prevSlideFornec, 300);
        } else if (mouse_move > 100) { // left
            setTimeout(nextSlideFornec, 300);
        } else {
            let div = slideTrack.children[slideIndex]
            scrollToPosition(slideFornec, div, div.offsetLeft, 800)
        }
        start_mouse = null
        mouse_move = null
        slide_left = slideFornec.scrollLeft
    }
}

let prevSlideFornec = () => {
    slideIndex -= 1
    if (slideIndex < 0) {
        slideIndex = 0
    }
    let div = slideTrack.children[slideIndex]
    scrollToPosition(slideFornec, div, div.offsetLeft, 800)
}

let nextSlideFornec = () => {
    slideIndex += 1
    if (slideIndex >= slideTrack.children.length) {
        slideIndex = 0
    }
    let div = slideTrack.children[slideIndex]
    scrollToPosition(slideFornec, div, div.offsetLeft, 800)
}

slideFornec.addEventListener("mouseleave", mouseUp)
slideFornec.addEventListener("mouseup", mouseUp)

intervalId = setInterval(nextSlideFornec, 5000)