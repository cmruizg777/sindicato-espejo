/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

var services_type= new Array();
 services_type["None"]=0;
 services_type["Overland"]=100;
 services_type["Ocean"]=160;
 services_type["Air"]=300;
 services_type["Cargo"]=200;
 services_type["Storage"]=125;
 services_type["Warehousing"]=75;

var goods_type= new Array();
 goods_type["None"]=0;
 goods_type["General"]=100;
 goods_type["Fragile"]=160;
 goods_type["Fine"]=300;
 goods_type["Hazardous"]=200;
	 
function getServicesType()
{
    var servicesType=0;
    var theForm = document.forms["calculationform"];
    var selectedServicesType = theForm.elements["services_type"];
     
    servicesType = services_type[selectedServicesType.value];

    return servicesType;
}

function getGoodsType()
{
    var goodsType=0;
    var theForm = document.forms["calculationform"];
    var selectedGoodsType = theForm.elements["goods_type"];
     
    goodsType = goods_type[selectedGoodsType.value];

    return goodsType;
}

function getExpressDelivery()
{
    var expressprice=0;
    var theForm = document.forms["calculationform"];
    var includeExpress = theForm.elements["expressdelivery"];

    if(includeExpress.checked==true)
    {
        expressprice=50;
    }
    return expressprice;
}

function getInsurance()
{
    var insuranceprice=0;
    var theForm = document.forms["calculationform"];
    var includeInsurance = theForm.elements["insurance"];

    if(includeInsurance.checked==true)
    {
        insuranceprice=75;
    }
    return insuranceprice;
}

function getPackaging()
{
    var packagingprice=0;
    var theForm = document.forms["calculationform"];
    var includePackaging = theForm.elements["packaging"];

    if(includePackaging.checked==true)
    {
        packagingprice=30;
    }
    return packagingprice;
}

function getFragileYes()
{
    var fragileyes=0;
    var theForm = document.forms["calculationform"];
    var includeFragile = theForm.elements["fragileyes"];

    if(includeFragile.checked==true)
    {
        fragileyes=30;
    }
    return fragileyes;
}
 
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var ServicesPrice = getServicesType() + getGoodsType() + getExpressDelivery() + getInsurance() + getPackaging() + getFragileYes();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price = $"+ServicesPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
}

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
 
jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es obligatorio.",
  remote: "Por favor, rellena este campo.",
  email: "Por favor, escribe una dirección de correo válida",
  url: "Por favor, escribe una URL válida.",
  date: "Por favor, escribe una fecha válida.",
  dateISO: "Por favor, escribe una fecha (ISO) válida.",
  number: "Por favor, escribe un número entero válido.",
  digits: "Por favor, escribe sólo dígitos.",
  creditcard: "Por favor, escribe un número de tarjeta válido.",
  equalTo: "Por favor, escribe el mismo valor de nuevo.",
  accept: "Por favor, escribe un valor con una extensión aceptada.",
  maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
  minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
  rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
  range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
  max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
  min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
});