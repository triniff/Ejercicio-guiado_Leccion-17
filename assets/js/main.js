function intersection(l1,l2) {
	var l3 = [];
	var ejer1 = document.getElementById("ej1-imperativo");

	for(var i =0; i <l1.length; i++){
		for (var j = 0; j < l2.length ; j++) {
			if(l1[i] == l2[j]){
				l3.push(l1[i])
			}
		}
	}

	ejer1.innerHTML = "Resultado de la comparación arreglo entre l1 y l2 : " + l3;
}

intersection([1,2,3],[2,3,4]);
