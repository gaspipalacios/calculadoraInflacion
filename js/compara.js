//Variable donde se van a almacenar los datos extraídos del localStorage
let storeLocal = JSON.parse(localStorage.getItem("storeLocal"));
console.log(storeLocal);

//Capturo parte de la tabla donde se van a agregar hijos
const cuerpoTabla = $('tbody');


for(let i = 0; i < storeLocal.length; i++){
    
    let tr = document.createElement('tr');
    tr = $(tr);

    let th =  document.createElement('th');
    th = $(th);
    th.attr('scope', 'row');
    th.html(storeLocal.length - i);

    let td = document.createElement('td');
    td = $(td);
    td.html(storeLocal[i].pais);

    let td2 = document.createElement('td');
    td2 = $(td2);
    td2.html(storeLocal[i].anio);

    let td3 = document.createElement('td');
    td3 = $(td3);
    td3.html("$"+ storeLocal[i].monto);

    let td4 = document.createElement('td');
    td4 = $(td4);
    td4.html("$"+ storeLocal[i].montoActual);

    let td5 = document.createElement('td');
    td5 = $(td5);
    td5.html(storeLocal[i].inflacion +"%");
    
    tr.append(th, td, td2, td3, td4, td5);
    cuerpoTabla.append(tr);
    
    
};

//---------------------------------------------------------------------------------------------------------
containerJSON = $('#containerJSON')
muestraJSON = $("#muestraJSON");
verInflacion = $("#verInflacion");
limpiarTabla = $("#limpiarTabla");

const jqueryJSON = () => {
      
    $.getJSON(`tasas.json`, (respuesta, estado) => {
      console.log(estado);
      if (estado === "success") {
        console.log(respuesta);
        mostrar(respuesta);
      }
    });
  };
 
  const mostrar = (jsonObject) => {
    jsonObject.forEach(item => {
     const {anios, multiplicador, pais} = item;

     const divIndividual = $('#muestraJSON').prepend('<div id="elDiv"></div>');
          
      $('#elDiv').html(      

           `<p><strong>País: </strong> ${pais}</p>
            <p><strong>Desde: </strong> ${anios}</p>
            <p style = "border-bottom: 2px solid black"><strong>Inflación Acumulada: </strong> ${(multiplicador-1)*100}%</p>`
      );
      
      muestraJSON.prepend(divIndividual);

    });
  };

  jqueryJSON();
  containerJSON.prepend('<h2 style = "padding-bottom: %">Inflación acumulada de Latinoamérica</h2>');
  
  
  verInflacion.click(evt => {

      evt.preventDefault();
      
      containerJSON.toggle("slow");

  });

  limpiarTabla.click(evt => {

    evt.preventDefault();
    
    cuerpoTabla.empty();
    localStorage.clear();

});

  







