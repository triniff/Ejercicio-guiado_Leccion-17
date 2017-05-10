//*EJERCICIO N° 1
function intersection(l1,l2) {	//* RESOLUCIÓN EJERCICIO 1 VERSIÓN IMPERATIVA
	var l3 = [];									//* variable auxiliar para guardar
	var ejer1 = document.getElementById("ej1-imperativo");

	for(var i =0; i <l1.length; i++){				//* recorre el arreglo l1
		for (var j = 0; j < l2.length ; j++) { 		//* recorre el arreglo l2
			if(l1[i] == l2[j]){						//* compara si un elemento del arreglo l1 y 12 es igual
				l3.push(l1[i])						//* pushea la comparación a l3
			}
		}
	}

	ejer1.innerHTML = "Resultado de la comparación arreglo entre l1 y l2 : " + l3; 		//* muestra el resultado final en el html
}

intersection([1,2,3],[2,3,4]);


function intersectionSet2 (l1,l2){		//* RESOLUCIÓN EJERCICIO 1 VERSION DECLARATIVA
	var ejer1 = document.getElementById("ej1-declarativo");
	var resultado = l1.filter(function(n){			//* recorre l1
		return l2.indexOf(n) !== -1;				//* compara l1 y l2 con la funcion indexOf y si el resultado es diferente a -1 (son iguales) retorna el elemento
	})
	ejer1.innerHTML = "Resultado de la comparación arreglo entre l1 y l2 : " + resultado; 	//* muestra el resultado final en el html
}

intersectionSet2([1,2,3],[2,3,4]);



//*EJERCICIO N° 2

var productos = [				//* Arreglo de objetos
	{
		nombre: "pijama",
		tipo: "ropa"
	},
	{
		nombre: "nevera",
		tipo: "electrodoméstico"
	},
	{
		nombre: "asus",
		tipo: "computador"
	},
	{
		nombre: "macbook",
		tipo: "computador"
	},
	{
		nombre: "pijama",
		tipo: "ropa"
	},
	{
		nombre: "toshiba",
		tipo: "computador"
	},
]

function arregloImperativo(){				//* RESOLUCIÓN EJERCICIO 1 VERSIÓN IMPERATIVA
	var computadores = [];					//* variable donde se guardaran los elementos
	var ejer2 = document.getElementById("ej2-imperativo");
	var mostrar = "";						//* variable donde se guardara solo el nombre del elemento para mostrar

	for(var i =0; i < productos.length; i++){		//* recorre el arreglo de objetos
		if(productos[i].tipo == "computador"){		//* compara si la propiedad tipo coincide con computador
			computadores.push(productos[i]);		//* guarda el producto que coicide en la variable computadores
		}
	}
	for (var i = 0; i < computadores.length ; i++) {	//* por cada elemento que se guardo en computadores 
		mostrar += computadores[i].nombre + " "			//* sumara solo el nombre del elemento a la variable mostrar
	}

	ejer2.innerHTML = "Búsqueda de un elemento en un arreglo de objetos: " + mostrar;		//*muestra en el html el resultado final
		
}

arregloImperativo()