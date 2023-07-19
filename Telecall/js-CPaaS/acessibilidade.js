const changeThemebtn = document.querySelector("#change-theme")

    // Tema Dark
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

    // Carregar Preferência do Usuário

changeThemebtn.addEventListener("change", function(){
    toggleDarkMode();

    // Salvar ou Remover tema Dark
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }


});

    