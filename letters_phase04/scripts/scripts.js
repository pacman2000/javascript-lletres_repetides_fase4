
function mostrar(){
  var myName = Array.from("AMPARO");
  var mySurname = Array.from("GARCIA");
  var myFullName = myName.concat([" "], mySurname);

  //mostrem el nom complert a la consola
  console.log("Partim del nom: " + myFullName.join(""));

}
