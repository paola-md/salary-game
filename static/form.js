
var app = angular.module('miApp', []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

app.controller("miCtrl", function($scope) {
  $scope.div = ["AGENCIA DE ATENCION ANIMAL DE LA CDMX", "AGENCIA DE GESTION URBANA DE LA CIUDAD DE MEXICO", "AGENCIA DE RESILIENCIA DE LA CIUDAD DE MEXICO", "AGENCIA DIGITAL DE INNOVACION PUBLICA", "ALCALDIA DE ALVARO OBREGON", "ALCALDIA DE AZCAPOTZALCO", "ALCALDIA DE BENITO JUAREZ", "ALCALDIA DE COYOACAN", "ALCALDIA DE CUAJIMALPA DE MORELOS", "ALCALDIA DE CUAUHTEMOC", "ALCALDIA DE GUSTAVO A. MADERO", "ALCALDIA DE IZTACALCO", "ALCALDIA DE IZTAPALAPA", "ALCALDIA DE LA MAGDALENA CONTRERAS", "ALCALDIA DE MIGUEL HIDALGO", "ALCALDIA DE MILPA ALTA", "ALCALDIA DE TLAHUAC", "ALCALDIA DE TLALPAN", "ALCALDIA DE VENUSTIANO CARRANZA", "ALCALDIA DE XOCHIMILCO", "AUTORIDAD DEL ESPACIO PUBLICO DEL D.F.", "CAJA DE PREVISION DE LA POLICIA AUXILIAR DE LA CDMX", "CAJA DE PREVISION DE LA POLICIA PREVENTIVA DE LA CDMX", "CAJA DE PREVISION DE LA POLICIA PREVENTIVA DEL D.F.", "CAJA DE PREVISION P/TRABAJADORES A LISTA DE RAYA DEL GOB. D. F.", "CAJA DE PREVISION P/TRABAJADORES A LISTA DE RAYA DEL GOB.DE LA CDMX", "COMISION DE BUSQUEDA DE PERSONAS DE LA CIUDAD DE MEXICO", "CONSEJERIA JURIDICA Y DE SERVICIOS LEGALES", "CONSEJERIA JURIDICA Y DE SERVICIOS LEGALES DE LA CDMX", "COORD. GRAL. DE LA AUT. DE LA ZONA PATRIMONIAL, MUNDIAL NAT. Y CULTURAL DE LA HUMANIDAD EN XOCHIMILCO, TLAHUAC Y MILPA ALTA", "COORDINACION GENERAL DE LA AUTORIDAD DEL CENTRO HISTORICO", "COORDINACION GENERAL DE LA AUTORIDAD DEL CENTRO HISTORICO DE LA CDMX", "COORDINACION GENERAL DE LA COMISION DE ATENCION A VICTIMAS DE LA CIUDAD DE MEXICO", "COORDINACION GENERAL DEL CENTRO DE COMANDO, CONTROL, COMPUTO, COMUNICACIONES Y CONTACTO CIUDADANO DE LA CIUDAD DE MEXICO", "COORDINACION GENERAL DEL INSTITUTO DE FORMACION PROFESIONAL", "DIR. GRAL. DE LA AGENCIA DE PROTECC. SANITARIA DE LA CDMX", "DIR. GRAL. DE LA AGENCIA DE PROTECC. SANITARIA DEL GDF", "DIR. GRAL. DE LA COORD. DE LOS CNTROS. DE TRANSFERENCIA MODAL DEL D. F.", "DIR. GRAL. DEL MECANISMO DE PROTECCION INTEGRAL DE PERSONAS DEFENSORAS DE DERECHOS HUMANOS Y PERIODISTAS DE LA CDMX", "DIR. GRAL. DEL MECANISMO DE PROTECCION INTEGRAL DE PERSONAS DEFENSORAS DE DERECHOS HUMANOS Y PERIODISTAS DEL D.F.", "DIR. GRAL. DEL REGIMEN DE PROTECCION SOCIAL EN SALUD DE LA CDMX", "DIR. GRAL. DEL REGIMEN DE PROTECCION SOCIAL EN SALUD DEL D.F.", "DIRECCION GENERAL DEL SISTEMA DE RADIO Y TELEVISION DIGITAL", "DIRECCION GENERAL DE LA PLANTA DE ASFALTO", "DIRECCION GENERAL DEL ORGANO REGULADOR DE TRANSPORTE DE LA CDMX", "DIRECCION GRAL. DEL CENTRO DE ATENCION A EMERGENCIAS Y PROTECCION CIUDADANA DE LA CD. DE MEXICO", "ESCUELA DE ADMINISTRACION P?BLICA DEL D.F.", "FIDEICOMISO EDUCACION GARANTIZADA DE LA CDMX", "FIDEICOMISO EDUCACION GARANTIZADA DEL DISTRITO FEDERAL", "FIDEICOMISO MUSEO DE ARTE POPULAR DE ARTE MEXICANO", "FIDEICOMISO MUSEO ESTANQUILLO", "FIDEICOMISO PARA LA PROMOCION Y DESARROLLO DEL CINE MEXICANO EN LA CIUDAD DE MEXICO", "FIDEICOMISO PARA LA RECONSTRUCCION INTEGRAL DE LA CIUDAD DE MEXICO", "HEROICO CUERPO DE BOMBEROS DEL D. F.", "INSTITUTO DE CAPACITACION PARA EL TRABAJO DE LA CIUDAD DE MEXICO", "INSTITUTO DE ESTUDIOS SUPERIORES DE LA CIUDAD DE MEXICO ROSARIO CASTELLANOS", "INSTITUTO DE LAS MUJERES DEL DISTRITO FEDERAL", "INSTITUTO DEL DEPORTE DEL DISTRITO FEDERAL", "INSTITUTO PARA LA ATENCION Y PREVENCION DE LAS ADICCIONES EN LA CD. DE MEX.", "JEFATURA DE GOBIERNO DE LA CDMX", "JEFATURA DE GOBIERNO DEL DISTRITO FEDERAL", "OFICIALIA MAYOR", "PROCURADURIA GENERAL DE JUSTICIA DE LA CDMX", "PROCURADURIA GENERAL DE JUSTICIA DEL DISTRITO FEDERAL", "SECRETARIA DE ADMINISTRACION Y FINANZAS DE LA CDMX", "SECRETARIA DE CULTURA DE LA CDMX", "SECRETARIA DE DESARROLLO ECONOMICO", "SECRETARIA DE DESARROLLO ECONOMICO DE LA CDMX", "SECRETARIA DE DESARROLLO SOCIAL", "SECRETARIA DE DESARROLLO URBANO Y VIVIENDA", "SECRETARIA DE DESARROLLO URBANO Y VIVIENDA DE LA CDMX", "SECRETARIA DE EDUCACION", "SECRETARIA DE EDUCACION, CIENCIA, TECNOLOGIA E INNOVACION DE LA CDMX", "SECRETARIA DE FINANZAS", "SECRETARIA DE GESTION INTEGRAL DE RIESGOS Y PROTECCION CIVIL DE LA CDMX", "SECRETARIA DE GOBIERNO", "SECRETARIA DE GOBIERNO DE LA CDMX", "SECRETARIA DE INCLUSION Y BIENESTAR SOCIAL DE LA CDMX", "SECRETARIA DE LA CONTRALORIA GENERAL DE LA CDMX", "SECRETARIA DE LA CONTRALORIA GENERAL DE LA CIUDAD DE MEXICO", "SECRETARIA DE LAS MUJERES DE LA CDMX", "SECRETARIA DE MOVILIDAD", "SECRETARIA DE MOVILIDAD DE LA CDMX", "SECRETARIA DE OBRAS Y SERVICIOS", "SECRETARIA DE OBRAS Y SERVICIOS DE LA CDMX", "SECRETARIA DE PROTECCION CIVIL", "SECRETARIA DE PUEBLOS Y BARRIOS ORIGINARIOS Y COMUNIDADES INDIGENAS RESIDENTES DE LA CDMX", "SECRETARIA DE SALUD", "SECRETARIA DE SALUD DE LA CDMX", "SECRETARIA DE SEGURIDAD CIUDADANA DE LA CDMX", "SECRETARIA DE SEGURIDAD PUBLICA", "SECRETARIA DE TRABAJO Y FOMENTO AL EMPLEO", "SECRETARIA DE TRABAJO Y FOMENTO AL EMPLEO EN LA CDMX", "SECRETARIA DE TURISMO", "SECRETARIA DE TURISMO DE LA CDMX", "SECRETARIA DEL MEDIO AMBIENTE", "SECRETARIA DEL MEDIO AMBIENTE DE LA CDMX", "SECRETARIA EJECUTIVA DE MECANISMOS DE SEGUIMIENTO Y EVALUACION DEL PROGRAMA DE DERECHOS HUMANOS", "SISTEMA DE AGUAS DE LA CIUDAD DE MEXICO", "SISTEMA PUBLICO DE RADIODIFUSION DE LA CIUDAD DE MEXICO", "UNIVERSIDAD DE LA POLICIA DE LA CIUDAD DE MEXICO", "OTRO"]


});


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
    document.getElementById("nextBtn").innerHTML = "Next";
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
  y = x[currentTab].getElementsByClassName("mytext") //mytext
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


// OTHER
function AddOther(val){
var element=document.getElementById('otro');
if(val=="OTRO")
  element.style.display='block';
else
  element.style.display='none';
}


//Auto
autocomplete(document.getElementById("persona1"), countries);
autocomplete(document.getElementById("persona2"), countries);
autocomplete(document.getElementById("persona3"), countries);
autocomplete(document.getElementById("persona4"), countries);
autocomplete(document.getElementById("persona5"), countries);


//SLIDERS
var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}


//Dropdowns
function AddOther_1(val){
var element=document.getElementById('otro_1');
if(val==102)
  element.style.display='block';
else
  element.style.display='none';
}

function AddOther_2(val){
var element=document.getElementById('otro_2');
if(val==102)
  element.style.display='block';
else
  element.style.display='none';
}

function AddOther_3(val){
var element=document.getElementById('otro_3');
if(val==102)
  element.style.display='block';
else
  element.style.display='none';
}

function AddOther_4(val){
var element=document.getElementById('otro_4');
if(val==102)
  element.style.display='block';
else
  element.style.display='none';
}

function AddOther_5(val){
var element=document.getElementById('otro_5');
if(val==102)
  element.style.display='block';
else
  element.style.display='none';
}
