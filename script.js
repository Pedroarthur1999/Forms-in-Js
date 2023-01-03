let resultado = fizzBuzz(11)

console.log(resultado);

function fizzBuzz(entrada){
    
if(typeof(entrada) == 'number'){
        
    if(entrada % 3 == 0 && entrada % 5 == 0 ){
        return 'fizzBuzz';
    }
    else if(entrada % 3 == 0) {
        return 'fizz'
    } 
    else if(entrada % 5 == 0){

        return'buzz';
    }
    else {
        return entrada;
    }
}
    else{
        return 'NaN';
    }
    
}

