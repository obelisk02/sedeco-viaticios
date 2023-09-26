
  window.addEventListener("load", function (event) {
    console.log("Los recursos terminaron de cargar");

    /* const copyrightFooter = `
        <b class="textoguinda" >
        Gobierno del Estado de Michoacán ${new Date().getFullYear()} 
        </b>
        `;
        document.getElementById('gobFooterTag').innerHTML = copyrightFooter;
    */


    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBntIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBntIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    }
  });
