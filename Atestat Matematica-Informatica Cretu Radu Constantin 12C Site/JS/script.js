// VARIANTA 1 – mesaj de bun venit
alert("Bine ai venit pe site-ul despre pescuit!");

// VARIANTA 2 – evidențierea paginii active din meniu
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.textDecoration = "underline";
    }
});
