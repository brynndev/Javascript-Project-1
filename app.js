const closeFace = document.querySelector(".close");
const openFace = document.querySelector(".open");

// Switch from kissy face to heart-eyes
closeFace.addEventListener("click", () => {
    openFace.classList.add("active");
    closeFace.classList.remove("active");
});

// Switch from heart-eyes back to kissy face
openFace.addEventListener("click", () => {
    closeFace.classList.add("active");
    openFace.classList.remove("active");
});