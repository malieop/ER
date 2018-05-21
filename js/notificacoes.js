var notificacoes= [
  {"col1":"10-AB-50", //matricula
    "col2": "Posto Reservado",// motivo
    "col3": "18/05/18",//Data
    "col4":"14h",// Hora
    },

    {"col1":"20-XD-69", //matricula
      "col2": "Posto Reservado",// motivo
      "col3": "19/05/18",//Data
      "col4":"16h",// Hora
    },
    {"col1":"55-XD-70", //matricula
        "col2": "Avaria do Posto",// motivo
        "col3": "19/05/18",//Data
        "col4":"20h",// Hora
    },
    { "col1":"99-DC-99", //matricula
      "col2": "Posto Reservado",// motivo
      "col3": "20/05/18",//Data
      "col4":"21h",// Hora
    }
    ]
function tabela(notificacoes) {
                $('#table').DataTable({
                    data: notificacoes,
                    columns: [
                        { data: 'col1' },
                        { data: 'col2' },
                        { data: 'col3' },
                        { data: 'col4' }
                    ]
                })

      }
