const slider = document.getElementById("sliderInner")
let index = 1


function nextImg() {
    if(index >= 4) {
        index = 0
    }
    let actuallyPosition = index * -100
    slider.style.transform = `translateX(${actuallyPosition}%)`
    index++
}
function previousImg() {
    index--;
    
    if (index <= 0) {
        index = 4; // Considerando que tienes un total de 4 imágenes (índices 0, 1, 2, 3)
    }
    
    let previousPosition = (index * 100) - 100;
    slider.style.transform = `translateX(-${previousPosition}%)`;
}
