console.log ("Hamburger icon script loaded successfully.");

(function() {
    const MAIN_OBJ = {
        INIT: function() {
            this.eventhandlers();
        },
        eventhandlers: function() {
           document.querySelector(".hamburger-icon").addEventListener("click", function() {
           
           document.querySelector(".menu-derecha").classList.toggle("menu-derecha-open");
        });
    }
    }
    MAIN_OBJ.INIT();
})()
