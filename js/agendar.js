// Nome, Dia, Mês, Acoes, Tipo, Valor, hora, é de visitante
var agendamentos = [
  ["Rui", 11, 22, 0, "1", "90", 12, 0],
  ["André", 9, 1, 1, "0", "1", 13, 1],
];

preencherTabela();

function preencherTabela() {
  setTimeout(
    function() {
      var t = document.getElementsByClassName('TableBody');
      t[0].innerHTML = "";

      var e = t[0];


      for (var i = 0; i < agendamentos.length; i++) {
        var acoes = '<div class="col-sm"></div><div><button onclick="cancelar(' + "'" + i + "'" + ')"  class="btn btn-danger botao_margem">Cancelar</button> </div> ';
        var id = "btn_" + i;
        switch (agendamentos[i][3]) {
          case 1:
            acoes += '<div class="col-sm"></div><div><button id="' + id + '" onclick="autorizar(' + "'" + i + "'" + ')" class="btn btn-success botao_margem">Autorizar</button> </div> ';
            break;


        }
        // Nome, Dia, Mês, Acoes, Tipo, Valor, hora

        var tipo = "";
        var valor_sufix = "";
        console.log((agendamentos[i][4]));
        switch (agendamentos[i][4]) {
          case "0":
          case 0:
            tipo = "Percentagem";
            valor_sufix = "%";
            break

          case "1":
          case 1:
            tipo = "Tempo";
            valor_sufix = "h";
            break;
        }
        var _TR = "<tr>";
        if (agendamentos[i][7] == "1") {
          _TR = "<tr class='active'>";
        }
        e.innerHTML = e.innerHTML + _TR + " <td>" + agendamentos[i][0] + "</td><td>" + agendamentos[i][6] + "</td><td>" + agendamentos[i][1] + "</td><td>" + agendamentos[i][2] + "</td><td>" + tipo + "</td><td>" + agendamentos[i][5] + valor_sufix + "</td><td>" + acoes + "</td></tr>";
      }



    }, 100);
}


function inserirAgendamento() {
  dia = document.getElementById('input_dia').value;
  mes = document.getElementById('input_mes').value;
  hora = document.getElementById('input_hora').value;
  radio_1 = document.getElementById('radio_1').value;
  radio_2 = document.getElementById('radio_2').value;
  valor = document.getElementById('input_valor').value;

  tipo = 0;
  if (radio_2.checked) {
    tipo = 1;
  }
  // Nome, Dia, Mês, Acoes, Tipo, Valor, hora, é de visitante
  var array = ["Rui", dia, mes, 0, tipo, valor, hora, 0];

  agendamentos.push(array);

  preencherTabela();
}

function autorizar(ind) {
  agendamentos[parseFloat(ind)][3] = 0;

  preencherTabela();
}

function cancelar(ind) {
  agendamentos.splice(parseFloat(ind), 1)

  preencherTabela();
}

function enterFunciona(id_text, id_butao) {
  var input1 = document.getElementById(id_text);
  input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById(id_butao).click();
    }
  });
}

function smartRetorcede()
{
  var url_string = window.location.href
  var url = new URL(url_string);
  var utilizador = url.searchParams.get("utilizador");

  if(utilizador=="morador1")
  {
    window.location.href = 'morador.html?utilizador=morador1';
  }
  else
  {
    window.location.href = 'morador.html?utilizador=morador';
  }
}

enterFunciona('input_hora', 'submeter');
enterFunciona('input_dia', 'submeter');
enterFunciona('input_mes', 'submeter');
enterFunciona('input_valor', 'submeter');
