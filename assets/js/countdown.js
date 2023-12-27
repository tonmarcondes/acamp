window.addEventListener("load", () => {
  const dataAlvo = new Date("2024-02-10T00:15:00");

  function atualizarContagem() {
    const dataAtual = new Date();

    // Calcula a diferença em milissegundos
    const diferenca = dataAlvo - dataAtual;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent = `Acamp: - ${dias} dias, ${horas}:${minutos}:${segundos}`;
  }

  setInterval(atualizarContagem, 1000);

  atualizarContagem();
});
