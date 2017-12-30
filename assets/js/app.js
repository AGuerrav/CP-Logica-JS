/*de cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detras de B, y D ha llegado en medio de A y de C ;
Podria calcular el orden de llegada

a b c d
a d b c
bcda
a d c */

//primer caso//
var a = {
  // posicion cero inicial
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  resultado: function () {
    if (a.C > a.B && //C ha llegado inmediatamente detras de B
        a.D > a.B && // y D ha llegado en medio de A y de C ;
        a.D > a.C &&
        a.D < a.A){
          return true;
        }
    return false;
  },
  intervalo: setInterval(function () {
    //Math.ceil  redondea el numero siguiente hacia arriba
    //Math.random numero aleatorio entre 0 y 1
    a.A = Math.ceil(Math.random()*4) // se multiplica x 4 ya que queremos que saque un numero del uno al 4
    a.B = Math.ceil(Math.random()*4)
    a.C = Math.ceil(Math.random()*4)
    a.D = Math.ceil(Math.random()*4)
    if(a.resultado() == true){
      clearInterval(a.intervalo);
      console.log("atleta A" , a.A);
      console.log("atleta B" , a.B);
      console.log("atleta C" , a.C);
      console.log("atleta D" , a.D);
    }


  },10)//QUE EVALUE CADA 10ms
}

// Caballos
/* el caballo de Mac es mas oscuro que el caballo de Smith , pero mas rapido y mas viejo que el caballo de jax
que es aun mas lento que el caballo de willi
que es mas joven que el de mac , que es mas viejo que el de smith que es mas claro que el de willi aunque el de jax es mas lento y ams oscuro que el de smith
mas viejo mas lento mas claro
edad| velocidad| tono|
tono claro 1 oscuro 2
velocidad rapido 2 lento 1
edad joven 1 viejo 2

Mac |edad 2| velocidad 2| tono 2|
Smith |edad 1| velocidad 2| tono 1|
Jax |edad 1| velocidad 1 | tono 2|
Willi |edad 1| velocidad 2| tono2| */

var b={
  Mac: {edad:0, velocidad:0, tono:0},
  Smith: {edad:0, velocidad:0, tono:0},
  Jax: {edad:0, velocidad:0, tono:0},
  Willi: {edad:0, velocidad:0, tono:0},
  resultado: function(){
    if(b.Mac.tono > b.Smith.tono &&
      b.Mac.velocidad > b.Jax.velocidad &&
      b.Mac.edad > b.Jax.edad &&
      b.Jax.velocidad < b.Willi.velocidad &&
      b.Mac.edad > b.Willi.edad &&

      b.Mac.edad > b.Smith.edad &&
      b.Smith.tono < b.Willi.tono &&
      b.Jax.velocidad < b.Smith.velocidad &&
      b.Jax.tono > b.Smith.tono
    ){
      return true;
    }
    return false;
  },

  intervalo: setInterval(function () {
    b.Mac.tono= Math.ceil(Math.random()*2)
    b.Mac.velocidad= Math.ceil(Math.random()*2)
    b.Mac.edad= Math.ceil(Math.random()*2)
    b.Smith.tono= Math.ceil(Math.random()*2)
    b.Smith.velocidad= Math.ceil(Math.random()*2)
    b.Smith.edad= Math.ceil(Math.random()*2)
    b.Jax.tono= Math.ceil(Math.random()*2)
    b.Jax.velocidad= Math.ceil(Math.random()*2)
    b.Jax.edad= Math.ceil(Math.random()*2)
    b.Willi.tono= Math.ceil(Math.random()*2)
    b.Willi.velocidad= Math.ceil(Math.random()*2)
    b.Willi.edad= Math.ceil(Math.random()*2)

    if (b.resultado()) {
      clearInterval(b.intervalo);
      console.log("caballo de mac", b.Mac);
      console.log("caballo de Smith", b.Smith);
      console.log("caballo de Jax", b.Jax);
      console.log("caballo de Willi", b.Willi);

    }

  },1)
}
