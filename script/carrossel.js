
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function mostrarLarguraDaTela() {
  var larguraAnterior = document.documentElement.clientWidth;

  function verificarMudancaDeLargura() {
      var larguraAtual = document.documentElement.clientWidth;
      
      // Verificar se a largura mudou
      if (larguraAtual !== larguraAnterior) {
           if(larguraAtual < 924){

            const elementosComSw = document.querySelectorAll('.sw');
            const elementosComSwWraper = document.querySelectorAll('.sw-wrapper');
            const elementosComSlide = document.querySelectorAll('.sw-slide');

            elementosComSw.forEach(function(element){
              element.classList.add('swiper');
            })
            elementosComSwWraper.forEach(function(element){
              element.classList.add('swiper-wrapper');
            })
            elementosComSlide.forEach(function(element){
              element.classList.add('swiper-slide');
            })

           
           }
           else{

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