function login() {
  email = document.getElementById('input_email').value;
  pass = document.getElementById('input_pass').value;

  if (email == 'gestor' && pass == "123") {
    window.location.href = 'menugestor.html';
  } else if (email == 'morador' && pass == "123") {
    window.location.href = 'morador.html?utilizador=morador';
  } else if (email == 'morador1' && pass == "123") {
    window.location.href = 'morador.html?utilizador=morador1';
  } else if (email == 'tecnico' && pass == "123") {
    window.location.href = 'tecnico.html';
  } else{
    var p = document.getElementById("errorLogin")
    p.classList.remove("hide")
    setTimeout(temporizador, 3000);
  }
}

function temporizador()
{
  var p = document.getElementById("errorLogin")
  p.className += " hide"
}

function magia()
{
  var t = document.getElementById ("div")
  t.classList.remove("hide")
  var r = document.getElementById("formulario")
    r.className += "hide"
    var f = document.getElementById("footer")
        f.classList.remove("hide")

}

function retorcede()
{
  var f = document.getElementById("footer")
  f.className += " hide"
  var t = document.getElementById ("formulario")
  t.classList.remove("hide")
  var r = document.getElementById("div")
  r.className += "hide"
}

function solicitar(){
  var nome = document.getElementById('input_nome').value;
  var apartamento = document.getElementById('input_apartamento').value;
  var p2 = document.getElementById("errorLogin2")
  if (nome === "" || apartamento === "") {

      p2.classList.remove("hide")
      setTimeout(temporizador1, 3000);

  } else{
    p2.className += " hide";
    var p3 = document.getElementById("errorLogin3")
    p3.classList.remove("hide")
    var b1 = document.getElementById("solicitarbotao")
    b1.className += " hide";
    var b2 = document.getElementById("voltarbotao")
    b2.classList.remove("hide");
  }
}

function temporizador1()
{
  var p = document.getElementById("errorLogin2")
  p.className += " hide"
}


function reescreve(z,y)
{
  var x = document.getElementById(z).value;
  document.getElementById(y).innerHTML = x;
}


function enterFunciona(id_text,id_butao)
{
  var input1 = document.getElementById(id_text);
  input1.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById(id_butao).click();
      }
  });
}

enterFunciona('input_email','submeterbotao');
enterFunciona('input_pass','submeterbotao');
enterFunciona('input_nome','solicitarbotao');
enterFunciona('input_apartamento','solicitarbotao');
