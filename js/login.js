function login() {
  email = document.getElementById('input_email').value;
  pass = document.getElementById('input_pass').value;

  if (email == 'gestor@gmail.com' && pass == "123") {
    window.location.href = 'dashboard.html';
  } else if (email == 'morador@gmail.com' && pass == "123") {
    window.location.href = 'morador.html?utilizador=morador';
  } else if (email == 'morador1@gmail.com' && pass == "123") {
    window.location.href = 'morador.html?utilizador=morador1';
  } else if (email == 'tecnico@gmail.com' && pass == "123") {
    window.location.href = 'dashboard.html';
  } else
    alert("E-mail ou password incorretos!");
}

function magia() {
  var t = document.getElementById("div")
  t.classList.remove("hide")
    var r = document.getElementById("formulario")
    r.className += "hide";
}