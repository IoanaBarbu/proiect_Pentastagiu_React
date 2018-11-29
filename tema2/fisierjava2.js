function maximNumbers(){
  var elem1 = document.getElementById("nr1");
  var elem2 = document.getElementById("nr2");
  var elem3 = document.getElementById("nr3");
  var a = parseInt(elem1.value);
  var b = parseInt(elem2.value);
  var c = parseInt(elem3.value);

  if (isNaN(a) && isNaN(b) && isNaN(c)){
    alert("introduceti minim o valoare valida");
  }
  else {
    if (!isNaN(a) && isNaN(b) && isNaN(c)) {
      var Nrmax = a
    }
    if (!isNaN(b) && isNaN(a) && isNaN(c)) {
        var Nrmax = b
    }
    if (!isNaN(c) && isNaN(b) && isNaN(a)) {
          var Nrmax = c
    }
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
      var Nrmax = a
      if (a<b){
        Nrmax = b
      }
      if (b<c){
        Nrmax = c
      }
    }
    if(!isNaN(a) && !isNaN(b) && isNaN(c)){
      Nrmax = a
      if(a<b){
        Nrmax = b
      }
    }
    if(!isNaN(b) && !isNaN(c) && isNaN(a)){
      Nrmax = b
      if(b<c){
        Nrmax = c
      }
    }
    if(!isNaN(a) && !isNaN(c) && isNaN(b)){
      Nrmax = a
      if(a<c){
        Nrmax = c
      }
    }
alert("Valoarea maxima este:" + Nrmax);
  }
}
