document.getElementById("miBoton").addEventListener("click", function() {
    document.getElementById("mensaje").textContent = "¡Has hecho clic en el botón!";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", function () {
        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
            sidebar.classList.add("visible");
        } else {
            sidebar.classList.remove("visible");
            sidebar.classList.add("hidden");
        }
    });
});

