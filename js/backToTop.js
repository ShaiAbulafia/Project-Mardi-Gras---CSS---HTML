let toTop = document.getElementById('toTopArrow');

window.addEventListener("scroll",() => {
    if(window.pageYOffset > 200){
        toTop.classList.add("activeToTop");
    }
    else {
        toTop.classList.remove("activeToTop");
    }
})