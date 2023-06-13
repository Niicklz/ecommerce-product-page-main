const menuIcon = document.getElementById("menuIcon")
const menu = document.getElementById("menu")


menu.addEventListener("click", (event)=> {
    console.log(event.target);
    if(event.target.classList.contains("menu-options")) {
        closeMenu()
    } 
})


function showMenu() {
    console.log("click");
    
    if(menuIcon.classList.contains("open")) {
       closeMenu()
        return
    }
    openMenu()
    
}

function openMenu() {

    if(!cartList.classList.contains("inactive")) {
        cartList.classList.add("inactive")
    }
    const menuIconClose = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>`
    menuIcon.innerHTML = menuIconClose
    menu.style.display = "block"
    menuIcon.classList.remove("closed")
    menuIcon.classList.add("open")
    document.body.style.overflow = "hidden"
}
function closeMenu() {
    menuIcon.innerHTML = `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>`
        menuIcon.classList.remove("open")
        menuIcon.classList.add("close")
        menu.style.display = "none"
        document.body.style.overflow = "auto"

}