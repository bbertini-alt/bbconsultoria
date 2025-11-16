// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Efeito no banner (hero) ao rolar
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero"); // corrigido
    if (!hero) return;

    if (window.scrollY > 50) {
        hero.classList.add("scrolled");
    } else {
        hero.classList.remove("scrolled");
    }
});
