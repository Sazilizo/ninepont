const openBtn = document.getElementById("open_nav");
const closeBtn= document.getElementById("close_nav");
const navContainer = document.getElementById("navigation_container");
const navigation = document.getElementById("navigation_items");

openBtn.addEventListener("click", ()=>{
    const list = navigation.classList;
    if(String(list).includes("navigation_items")){
        navigation.style.display = "none"
    };
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    navContainer.style.backgroundColor= "white";
    navContainer.style.color = "black";
});

closeBtn.addEventListener("click", ()=>{
    const list = navigation.classList;
    if(String(list).includes("navigation_items")){
        navigation.style.display = "block"
    };
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    navContainer.style.backgroundColor= "black";
    navContainer.style.color = "white";
});
