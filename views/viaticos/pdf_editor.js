const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {

//DATES
var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];



      //DATA
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


      // Fetch an existing PDF document
      const url = './Oficios/OFICIO.pdf'
  		const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

      // Load a PDFDocument from the existing PDF bytes
      const pdfDoc = await PDFDocument.load(existingPdfBytes)

      // Embed the Helvetica font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

      // Get the first page of the document
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]

      // Get the width and height of the first page
      const { width, height } = firstPage.getSize()
      console.log(width,height)

      firstPage.drawText(unidadResponsable, {
        x: 117,
        y: 664,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      const d = new Date();
      let year = d.getFullYear();
      firstPage.drawText(numeroOficio + "/" + year, {
        x: 525,
        y: 623,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      firstPage.drawText(new Date(fechaDocumento).toLocaleDateString('es-mx', {  year:"numeric", month:"long", day:"numeric"}), {
        x: 460,
        y: 611,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      firstPage.drawText(nombreUsuario, {
        x: 20,
        y: 585,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      firstPage.drawText(cargoUsuario, {
        x: 20,
        y: 575,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })


      firstPage.drawText(duracionDias, {
        x: 145,
        y: 532,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      firstPage.drawText(descripcionDetalles, {
        x: 20,
        y: 519,
        size: 9,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      firstPage.drawText(lugarComision + ", Mich.", {
        x: 164,
        y: 460,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })

      //************************************* */
      firstPage.drawText("Del "+ new Date(fechaInicio).toLocaleDateString('es-mx', { day:"numeric"}) +" al "+ new Date(fechaFinal).toLocaleDateString('es-mx', {  month:"long", day:"numeric"}), {
        x: 328,
        y: 460,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })
      firstPage.drawText("de "+ new Date(fechaFinal).toLocaleDateString('es-mx', { year:"numeric"}), {
        x: 365,
        y: 448,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })
      //************************************ */


      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()

			// Trigger the browser to download the PDF document
      let firstName = nombreUsuario.split(' ')[0]
      download(pdfBytes, "Oficio_comision_"+firstName+" "+lugarComision+".pdf", "application/pdf");
    }