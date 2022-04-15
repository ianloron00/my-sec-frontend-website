const menu = document.querySelector( '#mobile-menu' )
const menuLinks = document.querySelector( '.navbar_menu' )

// Display Mobile Menu
const openMobileMenu = () => {
    menu.classList.toggle( 'is-active' )
    menuLinks.classList.toggle( 'active' )
}

menu.addEventListener( 'click', openMobileMenu );