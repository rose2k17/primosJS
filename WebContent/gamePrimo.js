var nPrimo = true;
var res = 0;
function primo(num){
	var num;
	switch(num){
	case 1: return num; 
	case 2: return num;
	default: 
		for (var i=2; i<num;i++){
			if(num % i == 0){
				nprimo = false;
				return nPrimo;
				break;
			} 
		}
		if (nPrimo){
			return num;
		}
	}
	
	
}

function numPrimo(){
	while(true){
		var input = Number(prompt('Ingrese un número primo', ''));
		if (!input && input != 0) {
			window.alert("ERROR: El caracter que has introducido no es válido");
		} else if (input == 0){
			window.alert("¡¡Enhorabuena!!\nTu puntuación es de " + res + " punto(s)");
			res=0;
			break;
		} else{
			var a = primo(input);
			if (nPrimo && a == input){
				res = res + 1;
			} else {
				window.alert("¡¡Enhorabuena!!\nTu puntuación es de " + res + " punto(s)");
				res=0;
				break;
			}
		}
		
	}
	
}