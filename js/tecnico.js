
  $(document).ready(function () {
    var reservas= [
      {"col1":"Apartamento 202", //apartamento
        "col2": "Maio",// mes
        "col3": "20",//Dia
        "col4":"14",// hora de inicio
        "col5":"14:30",
        },// hora de fim

        {"col1":"Apartamento 203",
          "col2": "Maio",
          "col3": "21",
          "col4":"10",
          "col5":"14"},

        {  "col1":"Apartamento 205",
            "col2": "Maio",
            "col3": "30",
            "col4":"14",
            "col5":"16"}
    ]
            $('#table').DataTable({
                data: reservas,
                columns: [
                    { data: 'col1' },
                    { data: 'col2' },
                    { data: 'col3' },
                    { data: 'col4' },
                    { data: 'col5' },
                ]
            });
        });
