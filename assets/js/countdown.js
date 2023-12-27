window.addEventListener("load", () => {
  // Data alvo
  const dataAlvo = new Date("2024-02-10T00:15:00");

  function atualizarContagem() {
    // Data atual
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferenca = dataAlvo - dataAtual;

    // Calcula dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibe a contagem no elemento com o id "countdown"
    document.getElementById("countdown").textContent = `Faltam: ${dias} dias, ${horas}:${minutos}:${segundos}`;
  }

  // Atualiza a contagem a cada segundo
  setInterval(atualizarContagem, 1000);

  // Chama a função inicialmente para evitar um atraso no início
  atualizarContagem();
});
