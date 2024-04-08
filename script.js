 document.addEventListener('DOMContentLoaded', function() {

    var menuButton = document.getElementById('menu-button')

    menuButton.addEventListener('click', function(){
        var menu = document.getElementById('menu')
        menu.classList.add('active')
    })
    
 })