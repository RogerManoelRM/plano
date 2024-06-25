function mostrarCaixaCompra(plano) {
  var caixaCompra = document.getElementById('caixa-compra');
  var titulo = document.getElementById('caixa-compra-titulo');
  var descricao = document.getElementById('caixa-compra-descricao');

  caixaCompra.style.display = 'block';

  if (plano === 'Gratis') {
      titulo.innerText = 'Plano Gratis';
      descricao.innerText = 'Detalhes do plano gratis.';
  } else if (plano === 'Premium') {
      titulo.innerText = 'Plano Premium';
      descricao.innerText = 'Detalhes do plano premium.';
  }
}

function fecharCaixaCompra() {
  var caixaCompra = document.getElementById('caixa-compra');
  caixaCompra.style.display = 'none';
}
