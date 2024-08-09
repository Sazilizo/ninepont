const openBtn = document.getElementById("open_nav");
const closeBtn= document.getElementById("close_nav");
const navContainer = document.getElementById("navigation_container");
const navigation = document.getElementById("navigation_items");
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlay-text");

openBtn.addEventListener("click", ()=>{

    navigation.classList.remove("closed_menu")
    navigation.classList.add("navigation_items");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", ()=>{
    navigation.classList.remove("navigation_items");
    navigation.classList.add("closed_menu");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
});

dropbtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
}
dropdownItems.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault(); 
        overlayText.textContent = item.textContent; 
        overlay.classList.add("active");
    });
});


