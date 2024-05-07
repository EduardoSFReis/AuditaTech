document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.r');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var targetOffset = targetSection.offsetTop;
            var headerOffset = document.querySelector('.navbar1').offsetHeight;

            window.scrollTo({
                top: targetOffset - headerOffset,
                behavior: 'smooth'
            });
        });
    });
});

window.revelar = ScrollReveal({reset:false})
revelar.reveal('.efeito-home',{
    duration: 1200,
    distance: '200px'
})