var reservas= [
  {"col1":"Apartamento 202", //apartamento
    "col2": "Maio",// mes
    "col3": "20",//Dia
    "col4":"14",// hora de inicio
    "col5":"14:30",
    "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='altera2(this,reservas)'>Modificar</button>"
    },// hora de fim

    {"col1":"Apartamento 203",
      "col2": "Maio",
      "col3": "21",
      "col4":"10",
      "col5":"14",
      "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='altera2(this,reservas)'>Modificar</button>"},

    {  "col1":"Apartamento 205",
        "col2": "Maio",
        "col3": "30",
        "col4":"14",
        "col5":"16",
        "col6":"<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='altera2(this,reservas)'>Modificar</button>"
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

  function myDeleteFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
    //reservas.splice(reservas.indexOf('reservas[i-1]'),1);
    reservas.splice(i-1,1);
    alert("A reserva foi eleminada com sucesso!");
    $('#table').DataTable().destroy();
    limpaTabela();
  }

  function limpaTabela(){
    tabela(reservas);
  }

  function altera2(b,reservas){
    var i = b.parentNode.parentNode.rowIndex;
    linha= i;
    $('#table').DataTable().destroy();
    reservas[i-1]["col2"]=   "<input type=text id='dia'></input>";
    reservas[i-1]["col3"]=   "<input type=month id='mes'></input>";
    reservas[i-1]["col4"]=   "<input type=time id='hora_inicio'></input>";
    reservas[i-1]["col5"]=   "<input type=time id='hora_fim'></input>";
    reservas[i-1]["col6"]=   "<button onclick=modifica(linha) id=btn>Confirmar</input>";
    limpaTabela();
  }

  function modifica(i){
    reservas[i-1]["col2"]= $('#dia').val();
    reservas[i-1]["col3"]= $('#mes').val();
    reservas[i-1]["col4"]= $('#hora_inicio').val();
    reservas[i-1]["col5"]= $('#hora_fim').val();
    reservas[i-1]["col6"]= "<button onclick='myDeleteFunction(this)'>Eliminar</button><button onclick='altera2(this,reservas)'>Modificar</button>"
    $('#table').DataTable().destroy();
    alert("Alteração concluída com sucesso.");
    tabela(reservas);

  }
  function smartRetorcede(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var utilizador = url.searchParams.get("utilizador");


    if(utilizador == "gestor" ){
      document.getElementById("retorcede").classList.remove("hide");

    }
  }

//fuction alterar(reservas)

//tabela(reservas);
