link = document.getElementById('carrossel-css');
const conteinerTrofel = document.getElementById('premios');
function mostrarLarguraDaTela() {
  var larguraAnterior = document.documentElement.clientWidth;

function verificarMudancaDeLargura() {
      var larguraAtual = document.documentElement.clientWidth;
      
      // Verificar se a largura mudou
      if (larguraAtual !== larguraAnterior) {
        if(larguraAtual < 924){
            conteinerTrofel.innerHTML = '';
            conteinerTrofel.innerHTML = 
        }
        else{
            conteinerTrofel.innerHTML = '';
            conteinerTrofel.innerHTML  = `<div class="main-premiacoes">
            <div class="main-premiacoes-catgoria-avancada">
                <div>
                    <div class="main-premiacoes-categoria-titulo">
                        <h2>Categoria Avançada</h2>
                    </div>
                    <h3>Primeiro lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                    <h3>Segundo lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                    <h3>Terceiro lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/Trofeu-ouro.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/trofel-prata.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/trofeu-bronze.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
            </div>
            <div class="main-premiacoes-catgoria-mirim">
                <div>
                    <h2 class="main-premiacoes-categoria-titulo">Categoria Mirim</h2>
                    <h3>Primeiro lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                    <h3>Segundo lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                    <h3>Terceiro lugar   Kit Braço Robótico</h3>
                    <img src="src/svg/Vector-checklist.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/Trofeu-ouro.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/trofel-prata.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
                <div class="main-premiacoes-premiacao-colum">
                    <img class="main-trofeus" src="src/svg/trofeu-bronze.svg" alt="">
                    <img src="src/svg/Representacao_premio.svg" alt="">
                </div>
            </div>
        </div>`
        }
          // Atualizar a largura anterior
          larguraAnterior = larguraAtual;
      }
  }

  // Chamar a função inicialmente
  verificarMudancaDeLargura();

  // Adicionar um ouvinte de evento de redimensionamento
  window.addEventListener('resize', verificarMudancaDeLargura);
}

// Chamar a função para iniciar a monitorização da largura da tela em tempo real
mostrarLarguraDaTela();





