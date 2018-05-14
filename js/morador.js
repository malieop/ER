function IniciarCarregamento()
{
    var url_string = window.location.href
    var url = new URL(url_string);
    var utilizador = url.searchParams.get("utilizador");

    if(utilizador=="morador1")
      {
        var t = document.getElementById ("iniciar")
        t.classList.remove("btn-success")
        t.className+= " btn-danger"

      }
    else
      {
        alert("Erro no carregamento, favor tentar mais tarde")
      }


}
