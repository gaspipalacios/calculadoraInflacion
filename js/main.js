//Multiplicadores a utilizar según el año
const tasas = [
    {pais: "Argentina", anios:2010, multiplicador: 30.09},
    {pais: "Argentina", anios:2011, multiplicador: 23.89},
    {pais: "Argentina", anios:2012, multiplicador: 19.22},
    {pais: "Argentina", anios:2013, multiplicador: 15.29},
    {pais: "Argentina", anios:2014, multiplicador: 12.3},
    {pais: "Argentina", anios:2015, multiplicador: 8.94},
    {pais: "Argentina", anios:2016, multiplicador: 6.99},
    {pais: "Argentina", anios:2017, multiplicador: 5.28},
    {pais: "Argentina", anios:2018, multiplicador: 4.23},
    {pais: "Argentina", anios:2019, multiplicador: 2.87},
    {pais: "Argentina", anios:2020, multiplicador: 1.86},
    {pais: "Argentina", anios:2021, multiplicador: 1},
    {pais: "Uruguay", anios:2010, multiplicador: 2.739},
    {pais: "Uruguay", anios:2011, multiplicador: 2.5676},
    {pais: "Uruguay", anios:2012, multiplicador: 2.3753},
    {pais: "Uruguay", anios:2013, multiplicador: 2.1974},
    {pais: "Uruguay", anios:2014, multiplicador: 2.0238},
    {pais: "Uruguay", anios:2015, multiplicador: 1.8588},
    {pais: "Uruguay", anios:2016, multiplicador: 1.7106},
    {pais: "Uruguay", anios:2017, multiplicador: 1.5602},
    {pais: "Uruguay", anios:2018, multiplicador: 1.423},
    {pais: "Uruguay", anios:2019, multiplicador: 1.2979},
    {pais: "Uruguay", anios:2020, multiplicador: 1.1838},
    {pais: "Uruguay", anios:2021, multiplicador: 1},
    {pais: "Paraguay", anios:2010, multiplicador: 1.6502},
    {pais: "Paraguay", anios:2011, multiplicador: 1.5768},
    {pais: "Paraguay", anios:2012, multiplicador: 1.4566},
    {pais: "Paraguay", anios:2013, multiplicador: 1.4005},
    {pais: "Paraguay", anios:2014, multiplicador: 1.3682},
    {pais: "Paraguay", anios:2015, multiplicador: 1.3027},
    {pais: "Paraguay", anios:2016, multiplicador: 1.2632},
    {pais: "Paraguay", anios:2017, multiplicador: 1.2136},
    {pais: "Paraguay", anios:2018, multiplicador: 1.166},
    {pais: "Paraguay", anios:2019, multiplicador: 1.1202},
    {pais: "Paraguay", anios:2020, multiplicador: 1.0762},
    {pais: "Paraguay", anios:2021, multiplicador: 1},
    {pais: "Chile", anios:2010, multiplicador: 1.473},
    {pais: "Chile", anios:2011, multiplicador: 1.4344},
    {pais: "Chile", anios:2012, multiplicador: 1.391},
    {pais: "Chile", anios:2013, multiplicador: 1.3611},
    {pais: "Chile", anios:2014, multiplicador: 1.3148},
    {pais: "Chile", anios:2015, multiplicador: 1.2599},
    {pais: "Chile", anios:2016, multiplicador: 1.2117},
    {pais: "Chile", anios:2017, multiplicador: 1.1675},
    {pais: "Chile", anios:2018, multiplicador: 1.1249},
    {pais: "Chile", anios:2019, multiplicador: 1.0839},
    {pais: "Chile", anios:2020, multiplicador: 1.0443},
    {pais: "Chile", anios:2021, multiplicador: 1}
];

//Guardado en variable de los elementos del form para facilitar el acceso 
const form = {
    inputMonto: $("#monto"),
    inputAnio: $("#anio"),
    inputPais: $("#pais"),

    argentina: $('#Argentina'),
    uruguay: $('#Uruguay'),
    paraguay: $('#Paraguay'),
    chile: $('#Chile'),

    btnCalcular: $("#btnCalcular")
};

//Guardado en variable de elementos del HTML para facilitar acceso
const elemHTML = {
    title: $("#title"),
    fuenteP: $("#fuenteP"),
    signoDinero: $("#signoDinero"),
    anchor1: $("#anchor1"),
    anchor2: $("#anchor2"),
    anchor3: $("#anchor3"),
    anchor4: $("#anchor4"),
};

//Se define la variable a usar para cambiar el html al mostrar el resultado o la validación del campo monto
let contenedor; 

//Se define la variable donde se guardarán los inputs del form
let datos;

//Se define la variable donde se guardará el value del select pais
let valuePais;

//Se define la variable donde se va a almacenar en forma de objetos cada búsqueda que el usuario realice
let store = [];


//Constructor de objeto
class Datos{
    constructor(
        monto,
        anio,
        pais,
        montoActual,
        inflacion
    ) {
        this.monto = monto;
        this.anio = anio;
        this.pais = pais;
        this.montoActual = montoActual;
        this.inflacion = inflacion
      }
};


//Función que guarda los datos del input en la variable datos
function agregaDatos(dato){
    datos = dato;
};

//Función que guarda el valor del select
function agregaPais(segunPais){
    valuePais = segunPais;
};

//Función que lleva los datos de búsqueda del usuario a localStorage y los recupera
const almacenLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
        
};

//Función que almacena los datos de la búsqueda del usuario en una variable
function almacenaDatos(almacen){
    let check = JSON.parse(localStorage.getItem("storeLocal"));
    console.log(check);
    if(check === null){

        store.unshift(almacen);
        console.log(store);

        almacenLocalStorage("storeLocal", JSON.stringify(store));

    }else{
        store = JSON.parse(localStorage.getItem("storeLocal"));
        store.unshift(almacen);
        console.log(store);

        almacenLocalStorage("storeLocal", JSON.stringify(store))
    }
};



//Función principal de la app que calcula los valores, llamada por el botón Calcular del form
function calcular(){
    let monto = datos.monto;
    let anio = datos.anio;
    let pais = datos.pais;
  
    let encontrar = tasas.filter(tasa => {
        return tasa.anios === anio && tasa.pais === "Argentina";
    });
    
    switch(valuePais){

        case "Argentina":
            encontrar = tasas.filter(tasa => {
                return tasa.anios === anio && tasa.pais === "Argentina";
            });
            break;
        
        case "Uruguay":
            encontrar = tasas.filter(tasa => {
                return tasa.anios === anio && tasa.pais === "Uruguay";
            });
            break;
        
        case "Paraguay":
            encontrar = tasas.filter(tasa => {
                return tasa.anios === anio && tasa.pais === "Paraguay";
            });
            break;
        
        case "Chile":
            encontrar = tasas.filter(tasa => {
                return tasa.anios === anio && tasa.pais === "Chile";
            });
            break;
        
        default:
            console.log("Es Argentina por default"); 
    };

    console.log(encontrar);
    let rdo = 0;

    rdo = monto * encontrar[0].multiplicador;

    let inflacion = 0;
    inflacion = (encontrar[0].multiplicador - 1) * 100;

    //Almaceno los datos de la búsqueda del usuario en una variable
    const almacen = new Datos(
        monto,
        anio,
        pais,
        rdo,
        inflacion
    );
    
    almacenaDatos(almacen);
           
    
    switch(anio){

        case 2010:
        case 2011:
        case 2012: 
        case 2013:
        case 2014:
        case 2015:
        case 2016:
        case 2017:
        case 2018: 
        case 2019: 
        case 2020:
        case 2021:
            contenedor = `<p> Tu dinero valdría hoy <b> $${rdo} </b>, la inflación acumulada desde el año ${anio} ha sido de <b> ${inflacion}% </b> </p>`;
            $('#hijo').empty().append(contenedor); 
            break;

        default: 
            contenedor = `<p> Lo lamentamos, no pudimos encontrar el país. Intenta refrescando el sitio web. </p>`;
            $('#hijo').empty().append(contenedor);   
    };
   
};

//Función que modifica el HTML según el país
function cambiarHTML(segunPais){
    
    switch(segunPais){

        case "Argentina":
            elemHTML.title.html("República Argentina");
            elemHTML.fuenteP.html('El ajuste de precios se realiza usando el índice de precios a consumidor. A partir de principios de 2017 se comienzan a usar datos oficiales del INDEC. Los datos del índice de precios al consumidor anteriores fueron extraídos del trabajo "Online and official price indexes: Measuring Argentina’s inflation (Febrero 2012, MIT Sloan Research Paper No. 4975-12, doi:10.2139/ssrn.1906704)". Este trabajo contiene los índices de inflación de Argentina desde 2010.');
            elemHTML.signoDinero.html("$");
            elemHTML.anchor1.attr("class", "nav-link active");
            //Me aseguro que sólo haya una clase "active" según en qué país esté calculando la inflación 
            elemHTML.anchor2.attr("class", "nav-link");
            elemHTML.anchor3.attr("class", "nav-link");
            elemHTML.anchor4.attr("class", "nav-link");
            form.argentina.attr("selected", "selected");
            //Elimino los otros selected para que siempre haya solo 1 atributo selected entre las opciones...
            //...de modo que al cambiar el HTML desde el nav cambie también el inputPais del form
            form.uruguay.removeAttr("selected");
            form.paraguay.removeAttr("selected");
            form.chile.removeAttr("selected");

            break;

        case "Uruguay":
            elemHTML.title.html("República Oriental del Uruguay");
            elemHTML.fuenteP.html("Los datos de inflación fueron extraídos de los datos de inflación del índice de precios al consumidor (IPC) del Banco Mundial. Los datos de inflación del Banco Mundial son de año a año.");
            elemHTML.signoDinero.html("$");
            elemHTML.anchor1.attr("class", "nav-link");
            elemHTML.anchor2.attr("class", "nav-link active");
            elemHTML.anchor3.attr("class", "nav-link");
            elemHTML.anchor4.attr("class", "nav-link");
            form.uruguay.attr("selected", "selected");
            form.argentina.removeAttr("selected");
            form.paraguay.removeAttr("selected");
            form.chile.removeAttr("selected");
            break;
        
        case "Paraguay":
            elemHTML.title.html("República del Paraguay");
            elemHTML.fuenteP.html("Los datos de inflación fueron extraídos de los datos de inflación del índice de precios al consumidor (IPC) del Banco Mundial. Los datos de inflación del Banco Mundial son de año a año.");
            elemHTML.signoDinero.html("₲");
            elemHTML.anchor1.attr("class", "nav-link");
            elemHTML.anchor2.attr("class", "nav-link");
            elemHTML.anchor3.attr("class", "nav-link active");
            elemHTML.anchor4.attr("class", "nav-link");
            form.paraguay.attr("selected", "selected");
            form.uruguay.removeAttr("selected");
            form.argentina.removeAttr("selected");
            form.chile.removeAttr("selected");
            break;
        
        case "Chile":
            elemHTML.title.html("República de Chile");
            elemHTML.fuenteP.html("Los datos de inflación fueron extraídos de los datos de inflación del índice de precios al consumidor (IPC) del Banco Mundial. Los datos de inflación del Banco Mundial son de año a año.");
            elemHTML.signoDinero.html("$");
            elemHTML.anchor1.attr("class", "nav-link");
            elemHTML.anchor2.attr("class", "nav-link");
            elemHTML.anchor3.attr("class", "nav-link");
            elemHTML.anchor4.attr("class", "nav-link active");
            form.chile.attr("selected", "selected");
            form.uruguay.removeAttr("selected");
            form.paraguay.removeAttr("selected");
            form.argentina.removeAttr("selected");
            break;
        
        default:
            alert("Lo siento, ha ocurrido un error. Refresca la página")
    };


};

//1ra forma de cambiar el HTML
//Evento CHANGE en selec "pais" del form para modificar el html
form.inputPais.change(evt => {
    console.log(evt);
    evt.preventDefault();

    const segunPais = form.inputPais.val();
    console.log(segunPais);

    
    agregaPais(segunPais);
    cambiarHTML(segunPais);
});

//2da forma de cambiar el HTML
//Evento CLICK en los <a> para que también se modifique el HMTL con la función cambiarHTML
//Argentina
elemHTML.anchor1.click(evt => {
    console.log(evt);
    evt.preventDefault();
    
    cambiarHTML("Argentina");
    
});
//Uruguay
elemHTML.anchor2.click(evt => {
    console.log(evt);
    evt.preventDefault();

    cambiarHTML("Uruguay");
    
});
//Paraguay
elemHTML.anchor3.click(evt => {
    console.log(evt);
    evt.preventDefault();

    cambiarHTML("Paraguay");
    
});
//Chile
elemHTML.anchor4.click(evt => {
    console.log(evt);
    evt.preventDefault();

    cambiarHTML("Chile");
    
});



//Evento CLICK en botón del form para calcular los valores
form.btnCalcular.click(evt =>{
    console.log(evt);
    evt.preventDefault();

    if($('#monto').val() == "" || $('#monto').val() < 0){

        contenedor = `<p><b> Por favor introduce un monto mayor a 0 </b></p>`;
        $('#hijo').empty().append(contenedor);

    }else{

    const monto = parseFloat(form.inputMonto.val());
    const anio = parseInt(form.inputAnio.val());
    const pais = form.inputPais.val();

    const dato = new Datos(
        monto,
        anio,
        pais
    );

    console.log(dato);
    
    //Agregar inputs a la variable ya definida
    agregaDatos(dato);
    console.log(datos);

    //Calcular resultados
    calcular();
    };    

});





