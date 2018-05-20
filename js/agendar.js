// Nome, Dia, Mês, Acoes,
var agendamentos = [
  ["Rui", 11, 22, 0],
  ["André", 9, 1, 1],
];

preencherTabela();

function preencherTabela()
  {
  setTimeout(
      function() {
        var t = document.getElementsByClassName('TableBody');
        t[0].innerHTML = "";

        var e = t[0];


        for(var i = 0; i < agendamentos.length; i++)
        {
          var acoes = '<div class="col-sm-2"> <button onclick="cancelar('+"'"+i+"'"+')"  class="btn btn-danger">Cancelar</button> </div> ';
          var id = "btn_"+i;
          switch(agendamentos[i][3])
          {
            case 1:
              acoes += '<div class="col-sm-2"> <button id="'+id+'" onclick="autorizar('+"'"+i+"'"+')" class="btn btn-success">Autorizar</button> </div> ';
            break;


          }
          e.innerHTML = e.innerHTML + "<tr> <td>"+agendamentos[i][0]+"</td><td>"+agendamentos[i][1]+"</td><td>"+agendamentos[i][2]+"</td><td>"+acoes+"</td></tr>";
        }


      }, 100);
}


function inserirAgendamento()
{
  dia = document.getElementById('input_dia').value;
  mes = document.getElementById('input_mes').value;

  var array = ["Rui", dia,mes,0];
  agendamentos.push(array);

  preencherTabela();
}

function autorizar(ind)
{
  agendamentos[parseFloat(ind)][3] = 0;

  preencherTabela();
}

function cancelar(ind)
{
  agendamentos.splice(parseFloat(ind),1)

  preencherTabela();
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

enterFunciona('input_dia','submeter');
enterFunciona('input_mes','submeter');
