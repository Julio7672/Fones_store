const imgs = document.querySelectorAll(".img")

imgs.forEach(img => {
    img.addEventListener("mouseover", function() {        
        img.classList.add("selected")
    })
})

const img = document.querySelectorAll(".img")

img.forEach(img => {
    img.addEventListener("mouseleave", function() {        
        img.classList.remove("selected")
    })
})




$('.slide-principal').slick({
    dots: true,
    infinite: true,
    speed: 700,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2200,
});
