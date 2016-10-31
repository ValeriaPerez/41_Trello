var boton = document.getElementById("nuevo");

boton.onclick = function() {
	crearTabla();
}

function crearTabla() {
	// CREO TABLA 
	var tabla = document.createElement('div');
	tabla.setAttribute("class","estilo");
	boton.parentNode.insertBefore(tabla, boton);

	// CREO INPUT
	var titulo = document.createElement('input');
	titulo.setAttribute("type","text");
	titulo.setAttribute("placeholder","Titulo lista...");
	tabla.appendChild(titulo);
	titulo.focus();

	// CREANDO UN BOTON
	var crear = document.createElement('button')
	crear.innerHTML = "OK";
	crear.setAttribute("class","fondo2");
	crear.setAttribute("type","submit");	
	tabla.appendChild(crear);

	crear.onclick = function(){
		crarTarjeta();
	}
	// TARJETA
	function crarTarjeta() {

		var textoTitulo = titulo.value;

		if(textoTitulo == 0)
			{
				alert("Ingresa una lista");
			} 
		else
			{
			var tarjeta = document.createElement('div');
			var title = document.createElement("h3");
			var btnLista = document.createElement("button");
			var agregar = document.createTextNode("Agregar una tarjeta");
			
			/*var title = document.createTextNode(textoTitulo);*/

			/*tabla.removeChild();*/

			title.appendChild(titulo);
			btnLista.appendChild(agregar);
			tarjeta.appendChild(title);
			tarjeta.appendChild(btnLista);
			tabla.appendChild(tarjeta);
			tabla.appendChild(boton);
			
		}

	}	
}



	