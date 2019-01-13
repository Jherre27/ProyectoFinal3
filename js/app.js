var calculadora = {
  init:function(){
    numero1 = 0;
    numero2 = 0;
    signo="vacio";
    var listId = ["0","1","2","3","4","5","6","7","8","9","punto","on","sign","mas","menos","por","dividido","igual"];
  // Efecto presionar Tecla
    listId.forEach(function(idBoton, i){
      document.getElementById(idBoton).addEventListener('mousedown', function() {
        document.getElementById(idBoton).setAttribute("style", "transform:scale(0.95,0.95)")
        var numero= idBoton
        switch (idBoton) {
          case "punto":
            numero="."
            digitar_punto(numero)
            break;
          case "on":
            numero="0"
            borrar(numero)
            break;
          case "sign":
            numero=display.innerHTML
            negativoPositivo(numero)
            break;
          case "mas":
          case "menos":
          case "por":
          case "dividido":
            numero1 = display.innerHTML
            numero2 = 0
            display.innerHTML= 0
            signo= idBoton
            break;
          case "igual":
            if(numero2 > 0){
              numero1= display.innerHTML
            }else{
              numero2 = display.innerHTML
            }
            operacion(numero2)
            break;
          default:
          digitar(numero)
        }
      })
    })
    listId.forEach(function(idBoton, i){
      document.getElementById(idBoton).addEventListener('mouseup', function() {
        document.getElementById(idBoton).setAttribute("style", "transform:scale(1,1)")
      })
    })
  // 5- Digitar numeros
  function digitar(numero) {
     numero_anterior = display.innerHTML
     if(numero_anterior.length<8){ // 9- Digitar ON/C
         if(numero_anterior==0 && numero_anterior.length==1) {
            numero_nuevo= numero
         }else{
           numero_nuevo=  numero_anterior + numero
         }
          display.innerHTML= numero_nuevo
     }
  }
  // 6- Digitar ON/C
  function borrar(numero) {
     display.innerHTML = 0
     numero1=0
     numero2=0
     signo="vacio"
  }
  // 7- Digitar Punto
  function digitar_punto(numero){
      numero_anterior = display.innerHTML
      if(numero_anterior.includes(".") != 1){
          numero_nuevo=  numero_anterior + numero
          display.innerHTML=numero_nuevo
      }
  }
  // 8- Digitar Signo
  function negativoPositivo(numero){
    display.innerHTML= numero*-1
  }
  // 10- Operaciones Matermaticas
  function operacion(numero2){
      var resultado = 0
      switch (signo) {
        case "mas":
          resultado= Number(numero1) + Number(numero2);
          break;
        case "menos":
          resultado= Number(numero1) - Number(numero2)
        break;
        case "por":
          resultado= Number(numero1) * Number(numero2)
        break;
        case "dividido":
          resultado= Number(numero1) / Number(numero2)
        break;
        default:
      }
      display.innerHTML= resultado
    }
  },
}
calculadora.init()
