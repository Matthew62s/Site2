document.addEventListener("DOMContentLoaded", function(){
    var menuButton = document.getElementById("menu-button");
    var menuWrapper = document.getElementById("menu-wrapper");
    var isOpen = false;

    menuButton.addEventListener("click", function() {
        if (isOpen) {
            menuWrapper.style.right = "-250px"; /* Скрываем меню при закрытии */
        } else {
            menuWrapper.style.right = "0"; /* Отображаем меню при открытии */
        }
        isOpen = !isOpen;
    });
});