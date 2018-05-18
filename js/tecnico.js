var reservas= [
  {"col1":"Apartamento 202", //apartamento
    "col2": "Maio",// mes
    "col3": "20",//Dia
    "col4":"14",// hora de inicio
    "col5":"14:30",
    "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='myAddFunction(this)'>Modificar</button>"
    },// hora de fim

    {"col1":"Apartamento 203",
      "col2": "Maio",
      "col3": "21",
      "col4":"10",
      "col5":"14",
      "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='myAddFunction(this)'>Modificar</button>"},

    {  "col1":"Apartamento 205",
        "col2": "Maio",
        "col3": "30",
        "col4":"14",
        "col5":"16",
        "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='altera(this,reservas)'>Modificar</button>"
      }
]
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

  var i = a.parentNode.parentNode.rowIndex;
  //$('#table').empty();
  //alert(reservas[i-1].col4);
  reservas[i-1]["col4"] = "15";
  $('#table').DataTable().destroy();
  //var x = reservas[i-1];
  //document.getElementById("table").deleteRow(i);
  //console.log(x);
  tabela(reservas);

}
//fuction alterar(reservas)

//tabela(reservas);
