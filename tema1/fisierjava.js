function divideNumbers(){
  var elem1 = document.getElementById("nr1");
  var elem2 = document.getElementById("nr2");
  var elem3 = document.getElementById("nr3")
  var a = parseInt(elem1.value);
  var b = parseInt(elem2.value);
  var c = parseInt(elem3.value);

  if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("introduceti o valoare valida");
  }
  else {
    if (a+b !=0) {
      alert ("Rezultatul pentru ((a*b) + (b*c)) / (a+b) este" + ((a*b) + (b*c)) / (a+b));
    }
    else {
      alert("a+b nu poate sa fie zero");
    }
  }
}
