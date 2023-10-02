document.querySelector('#btn-GenerarPDF1').addEventListener('click', function () {
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
          let modeloVehiculo = document.getElementById('modeloAuto').value;
          let modeloAnioVehiculo = document.getElementById('modeloAnio').value;
          let placasVehiculo = document.getElementById('placasInput').value;
          
          /* Dinero */
          let alimentacionDinero = document.getElementById('alimentacionDinero').value;
          let hotelDinero = document.getElementById('hotelDinero').value;
    
          
    
    // FORMATO 1 HTML
    
    // iframe.contentWindow.document.getElementById(" ")
    const iframe = document.getElementById("frame1");

    //******** EXTRAS ************/
    const d = new Date();
    let year = d.getFullYear();

    function mayusculas(palabra) {
        const mySentence = palabra;
        const words = mySentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        return words.join(" ");
    }

    function numeroALetra(numero){
        const wordnumber= ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
        return wordnumber[numero-1]
    }
   
    //******************* *********/
console.log(fechaDocumento)


iframe.contentWindow.document.getElementById("f1-UnidadResponsable").innerHTML = unidadResponsable;
iframe.contentWindow.document.getElementById("f1-NumeroOficio").innerHTML = numeroOficio + "/" + year;
iframe.contentWindow.document.getElementById("f1-FechaOficio").innerHTML = new Date(fechaDocumento).toLocaleDateString('es-mx', {  year:"numeric", month:"long", day:"numeric"})
iframe.contentWindow.document.getElementById("f1-NombreUsuario").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario").innerHTML = mayusculas(cargoUsuario);
iframe.contentWindow.document.getElementById("f1-DuracionDias").innerHTML = duracionDias;
iframe.contentWindow.document.getElementById("f1-DuracionDiasLetra").innerHTML = numeroALetra(duracionDias) +" días";
iframe.contentWindow.document.getElementById("f1-DescripcionDetalles").innerHTML = descripcionDetalles;
iframe.contentWindow.document.getElementById("f1-DescripcionDetalles2").innerHTML = descripcionDetalles;
iframe.contentWindow.document.getElementById("f1-LugarComision").innerHTML = lugarComision;
iframe.contentWindow.document.getElementById("f1-FechasComision").innerHTML = "Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', { day:"numeric"}) +" al "+ new Date(fechaFinal).toLocaleDateString('es-mx', {  month:"long", day:"numeric"}) +" de "+ new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"});

iframe.contentWindow.document.getElementById("f1-TipoVehiculo").innerHTML = tipoVehiculo;
iframe.contentWindow.document.getElementById("f1-MarcaVehiculo").innerHTML = marcaVehiculo;
iframe.contentWindow.document.getElementById("f1-ModeloVehiculo").innerHTML = modeloVehiculo;
iframe.contentWindow.document.getElementById("f1-AnioVehiculo").innerHTML = modeloAnioVehiculo;
iframe.contentWindow.document.getElementById("f1-PlacasVehiculo").innerHTML = placasVehiculo;

iframe.contentWindow.document.getElementById("f1-NombreUsuario2").innerHTML = mayusculas(nombreUsuario);
iframe.contentWindow.document.getElementById("f1-CargoUsuario2").innerHTML = mayusculas(cargoUsuario);


//SAVE IN LOCALSTORAGE
let todosCampos = [
    unidadResponsable,
    numeroOficio,
    fechaDocumento,
    mayusculas(nombreUsuario),
    mayusculas(cargoUsuario),
    duracionDias,
    numeroALetra(duracionDias),
    descripcionDetalles,
    lugarComision,
    fechaInicio,
    fechaFinal,
    tipoVehiculo,
    marcaVehiculo,
    modeloVehiculo,
    modeloAnioVehiculo,
    placasVehiculo
        ]
let string = JSON.stringify(todosCampos);
localStorage.setItem("Campos", string);


//PRINT
    let wspFrame = document.getElementById('frame1').contentWindow;
    wspFrame.focus();
    wspFrame.print();


});




