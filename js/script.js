var borrar = false;
	function deletecarac(){
		var caja2 = document.formularioCalculadora.displayResultado.value;
            if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel!=true){
            	document.formularioCalculadora.displayResultado.value = "0";
            }
            else if(blocdel!=true){
             	var res = caja2.substring(0,caja2.length-1);
             	document.formularioCalculadora.displayResultado.value = res;
            }
	}
	function aritmetica(o){
		var numerosEntrada = document.formularioCalculadora.displayNumerosEntrada.value;
		var resultado = document.formularioCalculadora.displayResultado.value;
		var unum = numerosEntrada.substring(numerosEntrada.length-1);
		calcular()
		if (unum == "+" || unum == "-" || unum=="*" || unum=="/") {
			unum = unum.replace(unum,o);
			var res = numerosEntrada.substring(0,numerosEntrada.length-1);
			document.formularioCalculadora.displayNumerosEntrada.value = res+unum;
		}
		if (numerosEntrada == "" && resultado != ""){
			document.formularioCalculadora.displayNumerosEntrada.value = resultado + o;
		}
		else{
			document.formularioCalculadora.displayNumerosEntrada.value = numerosEntrada + resultado + o;
 		}
 		borrar = true;
	}

   function escribir(n){
		var resultado = document.formularioCalculadora.displayResultado.value;
		if (borrar) {
			//alert("se borro");
			document.formularioCalculadora.displayResultado.value="";
			borrar = false;
			document.formularioCalculadora.displayResultado.value = n;
		}
		else if (resultado == "0" && n != "."){
			cajao = resultado.replace("0", "")
			document.formularioCalculadora.displayResultado.value = cajao + n;
		}
		else{
			document.formularioCalculadora.displayResultado.value = resultado + n;
		}
	}
	function calcular(){
		var caja1 = document.formularioCalculadora.displayNumerosEntrada.value;
		var caja2 = document.formularioCalculadora.displayResultado.value;
		document.formularioCalculadora.displayResultado.value = eval(caja1 + caja2);
		document.formularioCalculadora.displayNumerosEntrada.value = "";
		borrar = true;
		blocdel = true;
	}
