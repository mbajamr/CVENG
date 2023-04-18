var xmlHttp = new Array();
var xi = new Array(0); // ARRAY OF XML-HTTP REQUEST INDEXES
xi[0] = 1; // FIRST INDEX SET TO 1 MAKING IT AVAILABLE

function showData(url,celda){ 
var xmlHttpIndex = xi.length;
var myClass;

for (var i=0; i<xi.length; i++) {
  if (xi[i] == 1) {
    xi[i] = 0;
    xmlHttpIndex = i;
    break;
  }
}

xi[xmlHttpIndex] = 0;

xmlHttp[xmlHttpIndex]=GetXmlHttpObject();
if (xmlHttp[xmlHttpIndex]==null){
  alert ("Your browser does not support AJAX!");
  return;
} 

xmlHttp[xmlHttpIndex].onreadystatechange=function(){
  if (xmlHttp[xmlHttpIndex].readyState==4){ 
    if (xmlHttp[xmlHttpIndex].status == 200) {
      document.getElementById(celda).innerHTML=xmlHttp[xmlHttpIndex].responseText;
      document.getElementById(celda).className=myClass;
      xi[xmlHttpIndex] = 1;
    } else {
      alert("Ha habido un problema con la URL.");
    }
    xmlHttp[xmlHttpIndex] = null;
  }
}

xmlHttp[xmlHttpIndex].open("GET",url,true);

xmlHttp[xmlHttpIndex].send(null);

}

function noTexto(thefield)
    {  
      if (event.keyCode < 46 || event.keyCode > 57 || event.keyCode == 47  ) 
      {
     //alert("Solo se permiten valores numericos para este campo");
          event.returnValue = false;
      }
    } 

function noTextoCopyPaste(thefield)
    {  
      if (event.keyCode < 46 || event.keyCode > 57 || event.keyCode == 47  ) 
      {
     alert("Solo se permiten valores numericos para este campo");
          event.returnValue = false;
      }
    } 

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}

      function hide() {
         document.getElementById('AWS').style.visibility = 'hidden';
      }
      function show() {
         document.getElementById('AWS').style.visibility = 'visible';
      }
