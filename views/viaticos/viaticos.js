const ciudadesMich = [
  "Acuitzio",
  "Aguililla",
  "Álvaro Obregón",
  "Angamacutiro",
  "Angangueo",
  "Apatzingán",
  "Aporo",
  "Aquila",
  "Ario",
  "Arteaga",
  "Briseñas",
  "Buenavista",
  "Carácuaro",
  "Coahuayana",
  "Coalcomán de Vázquez Pallares",
  "Coeneo",
  "Contepec",
  "Copándaro",
  "Cotija",
  "Cuitzeo",
  "Charapan",
  "Charo",
  "Chavinda",
  "Cherán",
  "Chilchota",
  "Chinicuila",
  "Chucándiro",
  "Churintzio",
  "Churumuco",
  "Ecuandureo",
  "Epitacio Huerta",
  "Erongarícuaro",
  "Gabriel Zamora",
  "Hidalgo",
  "La Huacana",
  "Huandacareo",
  "Huaniqueo",
  "Huetamo",
  "Huiramba",
  "Indaparapeo",
  "Irimbo",
  "Ixtlán",
  "Jacona",
  "Jiménez",
  "Jiquilpan",
  "Juárez",
  "Jungapeo",
  "Lagunillas",
  "Madero",
  "Maravatío",
  "Marcos Castellanos",
  "Lázaro Cárdenas",
  "Morelia",
  "Morelos",
  "Múgica",
  "Nahuatzen",
  "Nocupétaro",
  "Nuevo Parangaricutiro",
  "Nuevo Urecho",
  "Numarán",
  "Ocampo",
  "Pajacuarán",
  "Panindícuaro",
  "Parácuaro",
  "Paracho",
  "Pátzcuaro",
  "Penjamillo",
  "Peribán",
  "La Piedad",
  "Purépero",
  "Puruándiro",
  "Queréndaro",
  "Quiroga",
  "Cojumatlán de Régules",
  "Los Reyes",
  "Sahuayo",
  "San Lucas",
  "Santa Ana Maya",
  "Salvador Escalante",
  "Senguio",
  "Susupuato",
  "Tacámbaro",
  "Tancítaro",
  "Tangamandapio",
  "Tangancícuaro",
  "Tanhuato",
  "Taretan",
  "Tarímbaro",
  "Tepalcatepec",
  "Tingambato",
  "Tingüindín",
  "Tiquicheo de Nicolás Romero",
  "Tlalpujahua",
  "Tlazazalca",
  "Tocumbo",
  "Tumbiscatío",
  "Turicato",
  "Tuxpan",
  "Tuzantla",
  "Tzintzuntzan",
  "Tzitzio",
  "Uruapan",
  "Venustiano Carranza",
  "Villamar",
  "Vista Hermosa",
  "Yurécuaro",
  "Zacapu",
  "Zamora",
  "Zináparo",
  "Zinapécuaro",
  "Ziracuaretiro",
  "Zitácuaro",
  "José Sixto Verduzco"
];


//******************************************************************* */


//FORM controller
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }

  //textarea
  textAreaCheck = x[currentTab].getElementsByTagName("textarea");
  for (i = 0; i < textAreaCheck.length; i++) {
    // If a field is empty...
    if (textAreaCheck[i].value == "") {
      textAreaCheck[i].className += " invalid";
      valid = false;
    }
  }

  /*
  selectCheck = x[currentTab].getElementsByTagName("select");
  for (i = 0; i < selectCheck.length; i++) {
    // If a field is empty...
    if (selectCheck[i].value == "") {
      selectCheck[i].className += " invalid";
      valid = false;
    }
  }
*/

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


//*************************************************************************** */
//Autocomplete


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")  == val.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ) {
        
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("inputCiudades"), ciudadesMich);



//*************************************** */

/*   HIDE SELECTS ON OFICIAL VEHICLE     */
hideSelectsVehicle(document.getElementById("vehicleInput"));

function hideSelectsVehicle(selectValue) {

  selectValue.addEventListener("change", function(e) {

    let disableNode = document.querySelectorAll(".disableOption");
    console.log(disableNode)

    if (selectValue.options[selectValue.selectedIndex].value !== "Oficial"){
      for (let i = 0; i < disableNode.length; i++) {
        disableNode[i].disabled=true;
      }
    }
    else {
      for (let i = 0; i < disableNode.length; i++) {
        disableNode[i].disabled=false;
      }
    }
  })
}


/***************************************** */
// VALIDATE DATES - SUBSTRACT DAYS
checksMayDate(document.getElementById("fechaInicio"), document.getElementById("fechaFinal"));
function checksMayDate(inicioDate, finalDate) {
  
  finalDate.addEventListener("change", function(e) {
    console.log(inicioDate.value, finalDate.value)


    let date1 = new Date(inicioDate.value);
    let date2 = new Date(finalDate.value);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    diffDays = diffDays +1;
    console.log(diffDays)
    document.getElementById('duracionDias').value = diffDays
  })
}

/********************************************* */
/******************    VALUES FORM */

/* Comision */
let unidadResponsable = document.getElementById('idUnidadAdministrativa').value;
let numeroOficio = document.getElementById('numOficio').value;
let fechaDocumento = document.getElementById('documentDate').value;
let lugarComision = document.getElementById('inputCiudades').value;

/* USUARIO */
let nombreUsuario = document.getElementById('nombreUsuario').value;
let cargoUsuario = document.getElementById('cargoUsuario').value;

let duracionDias = document.getElementById('duracionDias').value;        //Duracion dias
let descripcionDetalles = document.getElementById('descripcionDetalles').value;
let fechaInicio = document.getElementById('fechaInicio').value;
let fechaFinal = document.getElementById('fechaFinal').value;

/*  Vehiculo  */
let tipoVehiculo = document.getElementById('vehicleInput').value;
let marcaVehiculo = document.getElementById('marcaVehiculo').value;
let submodeloVehiculo = document.getElementById('submodeloVehiculo').value;
let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
let placasVehiculo = document.getElementById('placasInput').value;

/* Dinero */
let alimentacionDinero = document.getElementById('alimentacionDinero').value;
let hotelDinero = document.getElementById('hotelDinero').value;
