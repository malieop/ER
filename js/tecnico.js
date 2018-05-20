var reservas= [
  {"col1":"Apartamento 202", //apartamento
    "col2": "Maio",// mes
    "col3": "20",//Dia
    "col4":"14",// hora de inicio
    "col5":"14:30",
    "col6":"<button class='btn btn-success botao_margem' onclick='myDeleteFunction(this)'>Eliminar</button><button class='btn btn-success botao_margem' onclick='altera(this,reservas)'>Modificar</button>"
    },// hora de fim

    {"col1":"Apartamento 203",
      "col2": "Maio",
      "col3": "21",
      "col4":"10",
      "col5":"14",
      "col6":"<button class='btn btn-success botao_margem' onclick='myDeleteFunction(this)'>Eliminar</button><button class='btn btn-success botao_margem' onclick='altera(this,reservas)'>Modificar</button>"},

    {  "col1":"Apartamento 205",
        "col2": "Maio",
        "col3": "30",
        "col4":"14",
        "col5":"16",
        "col6":"<button class='btn btn-success botao_margem' onclick='myDeleteFunction(this)'>Eliminar</button><button class='btn btn-success botao_margem' onclick='altera(this,reservas)'>Modificar</button>"
      }]

var linha = "";
function tabela(reservas) {
            $('#table').DataTable({
                data: reservas,
                columns: [
                    { data: 'col1' },
                    { data: 'col2' },
                    { data: 'col3' },
                    { data: 'col4' },
                    { data: 'col5' },
                    { data: 'col6' }
                ]
            })

  }
  function limpaTabela(){
    $('#table').empty();
  }
function altera(a,reservas){
  var div = document.getElementById("modificar");
  div.classList.remove("hide");
  var i = a.parentNode.parentNode.rowIndex;
  document.getElementById('apartamento').innerHTML= reservas[i-1]["col1"];
  $('#dia').val(reservas[i-1]["col2"]);
  $('#mes').val(reservas[i-1]["col3"]);
  $('#hora_inicio').val(reservas[i-1]["col4"]);
  $('#hora_fim').val(reservas[i-1]["col5"]);
  linha = i;
  }

function modifica(i){
  var div = document.getElementById("modificar");
  reservas[i-1]["col2"]= $('#dia').val();
  reservas[i-1]["col3"]= $('#mes').val();
  reservas[i-1]["col4"]= $('#hora_inicio').val();
  reservas[i-1]["col5"]= $('#hora_fim').val();
  div.className += "hide";
  $('#table').DataTable().destroy();
  alert("Alteração concluída com sucesso.");
  //var x = reservas[i-1];
  //document.getElementById("table").deleteRow(i);
  //console.log(x);
  tabela(reservas);

}
//fuction alterar(reservas)

//tabela(reservas);
