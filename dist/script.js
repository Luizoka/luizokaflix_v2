var listaFilmes = [];
var listaTrailer = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var trailer = document.getElementById('trailer').value;
  
  var elementoListaFilmes = document.getElementById('listaFilmes');
  
  if(filmeFavorito.endsWith('jpg') || (filmeFavorito.endsWith('jpeg'))){
    listaFilmes.push(filmeFavorito);
    listaTrailer.push(trailer);
    
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href= ${' + trailer + '}><img src=' + filmeFavorito + '></a>';

  } else{
    document.getElementById('mensagemErro').innerHTML = 'Endereço de imagem incorreto!';
  }
  limparCampos();
}

function limparCampos(){
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}