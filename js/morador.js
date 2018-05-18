var j = 1;
function IniciarCarregamento()
{

    var url_string = window.location.href
    var url = new URL(url_string);
    var utilizador = url.searchParams.get("utilizador");

    if(utilizador=="morador1")
      {
        var t = document.getElementById ("iniciar")
        var b = document.getElementById ("animationBattery");
        if(j==1)
        {
          j=0;
          t.classList.remove("btn-success")
          t.className+= " btn-danger"
          t.innerHTML =" <img src='../images/unplugged.png' width= '30px'> Parar Carregamento"
          b.classList.remove("hide");
        }
        else
        {
          j=1;
          t.classList.remove("btn-danger")
          t.className+= " btn-success"
          t.innerHTML  =" <img src='../images/plug.png' width= '30px'> Iniciar Carregamento"
          b.className+= " hide"
        }

      }
    else
      {
        alert("Erro no carregamento, favor tentar mais tarde")
      }


}
